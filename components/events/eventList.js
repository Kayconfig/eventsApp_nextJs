import EventItem from "./eventItem";
import styles from "./event-list.module.css";
function EventList({ events }) {
  return (
    <ul className={styles.list}>
      {events.map((event, index) => (
        <EventItem
          title={event.title}
          date={event.date}
          address={event.location}
          id={event.id}
          image={event.image}
          key={index}
        />
      ))}
    </ul>
  );
}

export default EventList;
