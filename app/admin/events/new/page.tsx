import EventForm from "@/components/admin/EventForm";

export default function NewEventPage() {
  return (
    <div>
      <div className="admin-page-head">
        <h1 className="admin-page-title">New event</h1>
      </div>
      <EventForm />
    </div>
  );
}
