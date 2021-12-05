import Button from "../ui/button";
import styles from "./event-search.module.css";
import { useRef } from "react";
function EventSearch({ onSearch }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const yearInputRef = useRef(null);
  const monthInputRef = useRef(null);

  function submitHandler(event) {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    onSearch(selectedYear, selectedMonth);
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {months.map((month, index) => {
              return (
                <option value={`${index + 1}`} key={index}>
                  {month}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <Button> Find Events</Button>
    </form>
  );
}

export default EventSearch;
