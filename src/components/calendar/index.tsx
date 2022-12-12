import React from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

// const CheckboxGroup = Checkbox.Group;
const localizer = momentLocalizer(moment);

function Event({ event }) {
  let speaker;
  if (event.speaker) {
    speaker = (
      <p style={{ marginTop: "5px" }}>
        <span style={{ fontSize: "14px", lineHeight: "18px" }}>
          by {event.speaker}
        </span>
      </p>
    );
  }

  return (
    <div>
      <strong style={{ fontSize: "16px" }}>{event.title}</strong> {speaker}
    </div>
  );
}

function EventAgenda({ event }) {
  let speaker;
  let locationName;
  if (event.speaker) {
    speaker = <span style={{ fontSize: "14px" }}>by {event.speaker}</span>;
  }
  if (event.locationName) {
    locationName = (
      <span style={{ fontSize: "14px", color: "#4472c4" }}>
        @ {event.locationName}
      </span>
    );
  }
  return (
    <div>
      <strong style={{ fontSize: "16px", color: "#4472c4" }}>
        {event.title}
      </strong>
      <p>
        {speaker}
        {/* {locationName} */}
      </p>
    </div>
  );
}

const KUCalendar = () => (
  <Calendar
    localizer={localizer}
    events={eventsList}
    startAccessor="start"
    endAccessor="end"
    defaultView={Views.AGENDA}
    defaultDate={new Date(2021, 2, 26)}
    step={60}
    timeslots={1}
    min={moment("07:00am", "h:mma").toDate()}
    max={moment("06:00pm", "h:mma").toDate()}
    views={{
      day: true,
      agenda: true,
    }}
    popup={true}
    // resources={locationMap}
    // resourceIdAccessor="locationId"
    // resourceTitleAccessor="locationTitle"
    components={{
      event: Event,
      agenda: {
        event: EventAgenda,
      },
    }}
    style={{ height: 800 }}
  />
);

KUCalendar.propTypes = {};

const exportedEvents = [
  {
    id: 1,
    title: "Kudrat Utsav 2021 Inaugration",
    enabled: true,
    type: "lecture",
    allDay: false,
    start: "2021-03-26T04:30:00.000Z",
    end: "2021-03-26T05:30:00.000Z",
  },
  {
    id: 2,
    title: "Managing Corona through Home Remedies",
    speaker:
      "Dr Narinder Nath Mehrotra (Lucknow), Dr Bishvroop Roy Chowdery (Faridabad), Dr Amar Singh Azad (Patiala)",
    enabled: true,
    type: "lecture",
    allDay: false,
    start: "2021-03-26T05:30:00.000Z",
    end: "2021-03-26T07:30:00.000Z",
  },
  {
    id: 3,
    title: "Organic Kitchen Gardening - Learn to grow your own food",
    speaker:
      "Rohit Gupta (Ludhiana), Vipin Chhabra (Ludhiana) , Umaid Singh (Bhiwani) , Narinder Singh (Amritsar)",
    enabled: true,
    type: "workshop",
    allDay: false,
    start: "2021-03-27T01:30:00.000Z",
    end: "2021-03-27T03:30:00.000Z",
  },
  {
    id: 4,
    title: "Millets Cooking Class",
    speaker: "Chef Meghna Shukla (Indore)",
    enabled: true,
    type: "class",
    allDay: false,
    start: "2021-03-27T05:30:00.000Z",
    end: "2021-03-27T07:30:00.000Z",
  },
  {
    id: 5,
    title: "Significance of Millets : Food and Farming",
    speaker:
      "Dr Khadar Wali (Mysore), Raspinder Singh (Ludhiana), Gurmukh Singh (Batala) ",
    enabled: true,
    type: "lecture",
    allDay: false,
    start: "2021-03-28T05:30:00.000Z",
    end: "2021-03-28T07:30:00.000Z",
  },
  {
    id: 6,
    title: "Managing Health with Marma Chikitsa",
    speaker: "Dr N N Mehrotra (Lucknow), Dr Navin Joshi (Dehradoon)",
    enabled: true,
    type: "lecture",
    allDay: false,
    start: "2021-03-28T10:30:00.000Z",
    end: "2021-03-28T12:30:00.000Z",
  },
];

// const locationMap = [
//   { locationId: 1, locationTitle: "Front Lawn" },
//   { locationId: 2, locationTitle: "Seminar Hall for Health" },
//   { locationId: 3, locationTitle: "Kitchen Space" },
//   {
//     locationId: 4,
//     locationTitle: "Seminar Room for Eco-Agri Tech.",
//   },
//   { locationId: 5, locationTitle: "Trinjan Pavillion" },
//   { locationId: 6, locationTitle: "Main Auditorium" },
// ];

const transformDates = (events) => {
  return events
    .map((item) => {
      var temp = Object.assign({}, item);
      temp.start = moment(temp.start).toDate();
      temp.end = moment(temp.end).toDate();
      // temp.resourceId = temp.locationId;
      return temp;
    })
    .filter(function (e) {
      return e.enabled;
    });
};

const eventsList = transformDates(exportedEvents);

export default KUCalendar;
