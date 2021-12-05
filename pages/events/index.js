import { getAllEvents } from "../../DUMMY_DATA";
import EventList from "../../components/events/eventList";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";

function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function findEvents(year, month) {
    router.push(`events/${year}/${month}`);
  }

  return (
    <>
      <EventSearch onSearch={findEvents} />
      <EventList events={allEvents} />
    </>
  );
}
export default AllEventsPage;
