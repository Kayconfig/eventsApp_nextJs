import { useRouter } from "next/router";
import { getFilteredEvents } from "../../DUMMY_DATA";
import EventList from "../../components/events/eventList";
import ResultsTitle from "../../components/events/results-title";

function FilteredEventPage() {
  const { searchParams } = useRouter().query;

  if (!searchParams) {
    return (
      <Container>
        <p>Loading</p>
      </Container>
    );
  }
  const [year, month] = [+searchParams[0], +searchParams[1]];
  if (isNaN(year) || isNaN(month) || month > 12) {
    return (
      <Container>
        <p>Invalid parameter please adjust and try again!</p>
      </Container>
    );
  }
  const events = getFilteredEvents({ year, month });
  const date = new Date(year, month - 1);
  return (
    <Container>
      <ResultsTitle date={date} />
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
  return <div style={{ marginLeft: "1rem" }}>{children}</div>;
}
