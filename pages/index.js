import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../DUMMY_DATA";
import EventList from "../components/events/eventList";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <h1>Featured Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}
