import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import EventForm from "@/components/admin/EventForm";
import type { EventRow } from "@/lib/supabase/types";

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createServerSupabaseClient();
  const { data } = await supabase.from("events").select("*").eq("id", id).single();
  if (!data) notFound();
  return (
    <div>
      <div className="admin-page-head">
        <h1 className="admin-page-title">Edit event</h1>
      </div>
      <EventForm event={data as EventRow} />
    </div>
  );
}
