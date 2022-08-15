import React from "react";
import { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm({ handleEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Russia");

  const restForm = () => {
    setDate("");
    setTitle("");
    setLocation("Russia");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };
    handleEvent(event);

    restForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span>Event date:</span>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        <span>Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="Russia">Russia</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Guinea">Guinea</option>
        </select>
      </label>
      <button>submit</button>
    </form>
  );
}
