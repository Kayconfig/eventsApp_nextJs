import { useRouter } from "next/router";
import { getFilteredEvents } from "../../DUMMY_DATA";
import EventList from "../../components/events/eventList";

function FilteredEventPage() {
  const { searchParams } = useRouter().query;

  if (!searchParams) {
    return (
      <Container>
        <p>Loading</p>
      </Container>
    );
  }
  const [year, month] = searchParams;
  const events = getFilteredEvents({ year: +year, month: +month });

  return (
    <Container>
      {events.length > 0 ? (
        <EventList events={events} />
      ) : (
        <p>No events found.</p>
      )}
    </Container>
  );
}
export default FilteredEventPage;

function Container({ children }) {
  return (
    <div style={{ marginLeft: "1rem" }}>
      <h1>Filtered Page</h1>
      {children}
    </div>
  );
}
