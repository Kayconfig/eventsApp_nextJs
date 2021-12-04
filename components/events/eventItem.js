import Link from "next/link";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";
import styles from "./event-item.module.css";

function EventItem({ title, date, address, id, image, isDetail }) {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = address.replace(", ", "\n");
  return (
    <li className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>

        {!isDetail && (
          <div className={styles.actions}>
            <Button link={`/events/${id}`}>
              <span>Explore Event</span>
              <span className={styles.icon}>
                {" "}
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        )}
      </div>
    </li>
  );
}

export default EventItem;
