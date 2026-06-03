"use client";

import Link from "next/link";
import { deleteEvent } from "@/lib/admin/actions";
import type { EventRow } from "@/lib/supabase/types";

export default function EventsTable({ events }: { events: EventRow[] }) {
  if (events.length === 0) {
    return <p className="admin-empty">No events yet. <Link href="/admin/events/new">Create the first one.</Link></p>;
  }
  return (
    <div className="admin-table-wrap">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Place</th>
            <th>Tag</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((ev) => (
            <tr key={ev.id}>
              <td className="admin-td-date">{ev.d} {ev.m}</td>
              <td className="admin-td-title">{ev.title}</td>
              <td>{ev.place}</td>
              <td><span className="admin-chip">{ev.tag}</span></td>
              <td className="admin-td-actions">
                <Link href={`/admin/events/${ev.id}`} className="admin-action-link">Edit</Link>
                <form action={deleteEvent.bind(null, ev.id)} style={{ display: "inline" }}>
                  <button
                    type="submit"
                    className="admin-action-delete"
                    onClick={(e) => { if (!confirm("Delete this event?")) e.preventDefault(); }}
                  >
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
