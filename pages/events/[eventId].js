import { useRouter } from "next/router";
import { getEventById } from "../../DUMMY_DATA";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventDetailPage() {
  const { eventId } = useRouter().query;
  const event = getEventById(eventId);
  if (!event) {
    return (
      <Container>
        <p>No Event Found.</p>
      </Container>
    );
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
function Container({ children }) {
  return (
    <div>
      <h1>Event Detail</h1>
      <section>{children}</section>
    </div>
  );
}
export default EventDetailPage;
