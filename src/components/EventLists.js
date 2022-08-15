import React from "react";
import styles from "./EventLists.module.css";

export default function EventLists({ events, handleClick }) {
  return (
    <div className="event-lists">
      {events.map((event, index) => (
        <div key={event.id} className={styles.card}>
          <h2>
            {index}- {event.title}
          </h2>
          <p>
            {event.location}-{event.date}
          </p>

          <button onClick={() => handleClick(event.id)}>
            Delete the event
          </button>
        </div>
      ))}
    </div>
  );
}
