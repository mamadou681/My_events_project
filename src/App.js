import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventLists from "./components/EventLists";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "GNU Radio event", id: 1 },
    { title: "HackRf One Day", id: 2 },
    { title: "Free talk", id: 3 },
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => event.id !== id);
    });
  };

  const subtitle = "All events in Mamadou kingdom";

  const handleEvent = (event) => {
    setEvents((prevState) => {
      return [...prevState, event];
    });
    setShowModal(false);
  };
  return (
    <div className="App">
      <Title title="Events in your area " subtitle={subtitle} />

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}
      {showEvents && <EventLists events={events} handleClick={handleClick} />}
      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm handleEvent={handleEvent} />
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>Add an Event</button>
      </div>
    </div>
  );
}

export default App;
