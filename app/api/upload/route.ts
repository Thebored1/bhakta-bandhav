import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerSupabaseClient } from "@/lib/supabase/server";

const COOKIE_NAME = "admin_session";
const PAYLOAD = "authenticated";

async function isAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  if (!token) return false;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return false;
  const dotIdx = token.indexOf(".");
  if (dotIdx === -1) return false;
  const payload = token.slice(0, dotIdx);
  const sig = token.slice(dotIdx + 1);
  if (payload !== PAYLOAD) return false;
  try {
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]
    );
    const sigBytes = new Uint8Array(sig.match(/.{2}/g)!.map((b) => parseInt(b, 16)));
    return await crypto.subtle.verify("HMAC", key, sigBytes, enc.encode(payload));
  } catch { return false; }
}

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];
const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file || !file.size) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: "Only JPEG, PNG, WebP, GIF, and AVIF are allowed" }, { status: 400 });
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "File must be under 5 MB" }, { status: 400 });
  }

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const name = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const supabase = createServerSupabaseClient();
  const { error } = await supabase.storage.from("images").upload(name, buffer, {
    contentType: file.type,
    upsert: false,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const { data } = supabase.storage.from("images").getPublicUrl(name);
  return NextResponse.json({ url: data.publicUrl });
}
