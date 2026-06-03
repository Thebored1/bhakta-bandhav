"use client";

import { useActionState } from "react";
import { createEvent, updateEvent } from "@/lib/admin/actions";
import type { EventRow } from "@/lib/supabase/types";
import Link from "next/link";
import RichTextEditor from "@/components/admin/RichTextEditor";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const TAGS = ["Festival","Pilgrimage","Retreat","Online","Study","Satsang","Other"];

export default function EventForm({ event }: { event?: EventRow }) {
  const action = event ? updateEvent.bind(null, event.id) : createEvent;
  const [state, formAction, isPending] = useActionState(action, null);

  return (
    <form action={formAction} className="admin-form">
      <div className="admin-form-grid">
        <label className="admin-label">
          Day
          <input name="d" className="admin-input" defaultValue={event?.d} placeholder="14" maxLength={2} required />
        </label>
        <label className="admin-label">
          Month
          <select name="m" className="admin-input" defaultValue={event?.m ?? "Jan"}>
            {MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </label>
        <label className="admin-label">
          Tag / Category
          <select name="tag" className="admin-input" defaultValue={event?.tag ?? "Festival"}>
            {TAGS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
      </div>

      <label className="admin-label">
        Title
        <input name="title" className="admin-input" defaultValue={event?.title} placeholder="Event title" required />
      </label>

      <label className="admin-label">
        Location / Place
        <input name="place" className="admin-input" defaultValue={event?.place} placeholder="e.g. Sri Radhe Kunj, Vrindavan" required />
      </label>

      <label className="admin-label">
        Time
        <input name="time" className="admin-input" defaultValue={event?.time} placeholder="e.g. 7:00 PM EST" required />
      </label>

      <label className="admin-label">
        Description
        <RichTextEditor
          name="description"
          defaultValue={event?.description ?? ""}
          placeholder="Full event details, schedule, and notes for attendees…"
        />
      </label>

      {state?.error && <p className="admin-error">{state.error}</p>}

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn-primary" disabled={isPending}>
          {isPending ? "Saving…" : event ? "Update event" : "Create event"}
        </button>
        <Link href="/admin/events" className="admin-btn-ghost">Cancel</Link>
      </div>
    </form>
  );
}
