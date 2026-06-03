import Link from "next/link";
import { getEvents } from "@/lib/supabase/queries";
import EventsTable from "@/components/admin/EventsTable";

export default async function AdminEventsPage() {
  const events = await getEvents();
  return (
    <div>
      <div className="admin-page-head">
        <div>
          <h1 className="admin-page-title">Events</h1>
          <p className="admin-page-sub">{events.length} event{events.length !== 1 ? "s" : ""}</p>
        </div>
        <Link href="/admin/events/new" className="admin-btn-primary">+ New event</Link>
      </div>
      <EventsTable events={events} />
    </div>
  );
}
