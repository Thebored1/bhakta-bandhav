"use server";

import { redirect } from "next/navigation";
import { createSession, destroySession } from "./session";

export async function loginAction(
  _prev: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const password = formData.get("password") as string;
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return { error: "Invalid password." };
  }
  await createSession();
  redirect("/admin/posts");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}
