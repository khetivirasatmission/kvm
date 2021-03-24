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
      <span>
        &mdash; <span>{event.speaker}</span>
      </span>
    );
  }

  return (
    <p>
      <strong>{event.title}</strong> {speaker}
    </p>
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
      <strong>{event.title}</strong>
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
    step={30}
    timeslots={1}
    min={moment("09:00am", "h:mma").toDate()}
    max={moment("07:00pm", "h:mma").toDate()}
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
    style={{ height: 400 }}
  />
);

KUCalendar.propTypes = {};

const exportedEvents = [
  {
      "id": 1,
      "title": "Kudrat Utsav 2021 Inaugration",
      "enabled": true,
      "type": "lecture",
      "allDay": false,
      "start": "2021-03-26T04:30:00.000Z",
      "end": "2021-03-26T05:30:00.000Z"
  },
  {
      "id": 2,
      "title": "Honoring farmers & NGOs for Ecological Straw Management",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-26T06:00:00.000Z",
      "end": "2021-03-26T07:30:00.000Z"
  },
  {
      "id": 3,
      "title": "Prize Distribution for Art for Nature Competition",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-26T07:30:00.000Z",
      "end": "2021-03-26T09:00:00.000Z"
  },
  {
      "id": 4,
      "title": "Organic Kitchen Gardening - Vegetables and Fruits",
      "speaker": "Ramesh Mandiya, Madhu Jain",
      "enabled": true,
      "type": "workshop",
      "allDay": false,
      "start": "2021-03-28T05:30:00.000Z",
      "end": "2021-03-28T07:00:00.000Z"
  },
  {
      "id": 5,
      "title": "Roof Top Gardening - How to grow Summer Vegetables on Rooftop",
      "speaker": "Narinder Singh",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-26T08:30:00.000Z",
      "end": "2021-03-26T09:30:00.000Z"
  },
  {
      "id": 6,
      "title": "Medicinal Plants in Kitchen Garden",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-26T09:30:00.000Z",
      "end": "2021-03-26T10:30:00.000Z"
  },
  {
      "id": 7,
      "title": "How to do Home Composting",
      "speaker": "Ekta Bansal, Jagtar Dhaliwal",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-26T10:30:00.000Z",
      "end": "2021-03-26T11:30:00.000Z"
  },
  {
      "id": 8,
      "title": "Fruit & Food Forest",
      "speaker": "Phool Kumar, Ravdeep Singh",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-26T11:30:00.000Z",
      "end": "2021-03-26T13:30:00.000Z"
  },
  {
      "id": 9,
      "title": "Curing without Medicines",
      "speaker": "Atul Shah",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-26T07:00:00.000Z",
      "end": "2021-03-26T09:00:00.000Z"
  },
  {
      "id": 10,
      "title": "Marma Chikitsa and Local Health Traditions",
      "speaker": "Dr N N Mehrotra and Team",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-26T09:30:00.000Z",
      "end": "2021-03-26T11:30:00.000Z"
  },
  {
      "id": 11,
      "title": "Millets Cooking Workshop",
      "speaker": "Chef Meghna Shukla",
      "enabled": true,
      "type": "class",
      "allDay": false,
      "start": "2021-03-27T05:30:00.000Z",
      "end": "2021-03-27T07:00:00.000Z"
  },
  {
      "id": 12,
      "title": "Green Live Food without Fire",
      "enabled": false,
      "type": "class",
      "allDay": false,
      "start": "2021-03-26T09:30:00.000Z",
      "end": "2021-03-26T11:30:00.000Z"
  },
  {
      "id": 13,
      "title": "Millet Processing at Home",
      "enabled": false,
      "type": "class",
      "allDay": false,
      "start": "2021-03-26T11:30:00.000Z",
      "end": "2021-03-26T13:30:00.000Z"
  },
  {
      "id": 14,
      "title": "Guidance and Collaborations for the Cultivation of Medicinal Plants",
      "speaker": "Dr. J S Brar",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-26T09:00:00.000Z",
      "end": "2021-03-26T11:30:00.000Z"
  },
  {
      "id": 15,
      "title": "Seed Conservation Techniques",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-26T11:30:00.000Z",
      "end": "2021-03-26T13:30:00.000Z"
  },
  {
      "id": 16,
      "title": "Experience Sharing by Master Artisans and Weavers",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-26T09:30:00.000Z",
      "end": "2021-03-26T11:30:00.000Z"
  },
  {
      "id": 17,
      "title": "Trinjan Workshop on Spinning",
      "enabled": false,
      "type": "workshop",
      "allDay": false,
      "start": "2021-03-26T11:30:00.000Z",
      "end": "2021-03-26T13:30:00.000Z"
  },
  {
      "id": 18,
      "title": "Growing Fruits in Kitchen Gardening and Rooftop Experience sharing Workshop on Organic Kitchen Garden",
      "speaker": "Narinder Singh, Umaid Singh, Vipin Chhabra, Kamaljieet Kaur",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-27T04:30:00.000Z",
      "end": "2021-03-27T07:30:00.000Z"
  },
  {
      "id": 19,
      "title": "How to grow Organic Mushroom",
      "speaker": "Dr Sukhdeep Hundal, Jagtar Dhaliwal",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-27T07:30:00.000Z",
      "end": "2021-03-27T08:30:00.000Z"
  },
  {
      "id": 20,
      "title": "Fruit & Food Forest",
      "speaker": "Phool Kumar, Ravdeep Singh, Kamajeet Hayer, Devinder Singh",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-27T09:00:00.000Z",
      "end": "2021-03-27T11:30:00.000Z"
  },
  {
      "id": 21,
      "title": "Community Organic Farming",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-27T11:30:00.000Z",
      "end": "2021-03-27T13:30:00.000Z"
  },
  {
      "id": 22,
      "title": "Curing without Medicines",
      "speaker": "Atul Shah",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-27T04:30:00.000Z",
      "end": "2021-03-27T06:30:00.000Z"
  },
  {
      "id": 23,
      "title": "Marma Chikitsa and Local Health Traditions",
      "speaker": "Dr N N Mehrotra and team",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-27T06:30:00.000Z",
      "end": "2021-03-27T08:30:00.000Z"
  },
  {
      "id": 24,
      "title": "Millet Cooking - I",
      "enabled": false,
      "type": "class",
      "allDay": false,
      "start": "2021-03-27T05:00:00.000Z",
      "end": "2021-03-27T07:00:00.000Z"
  },
  {
      "id": 25,
      "title": "Green Live Food without Fire",
      "enabled": false,
      "type": "class",
      "allDay": false,
      "start": "2021-03-27T07:00:00.000Z",
      "end": "2021-03-27T09:00:00.000Z"
  },
  {
      "id": 26,
      "title": "Millet Processing at Home",
      "enabled": false,
      "type": "class",
      "allDay": false,
      "start": "2021-03-27T09:00:00.000Z",
      "end": "2021-03-27T11:00:00.000Z"
  },
  {
      "id": 27,
      "title": "Millet Cooking - II",
      "enabled": false,
      "type": "class",
      "allDay": false,
      "start": "2021-03-27T11:00:00.000Z",
      "end": "2021-03-27T13:00:00.000Z"
  },
  {
      "id": 28,
      "title": "Guidance and Collaborations for the Cultivation of Medicinal Plants",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-27T05:30:00.000Z",
      "end": "2021-03-27T08:30:00.000Z"
  },
  {
      "id": 29,
      "title": "Seed Conservation Techniques",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-27T09:30:00.000Z",
      "end": "2021-03-27T12:30:00.000Z"
  },
  {
      "id": 30,
      "title": "Discussion on Spinning Heritage of Punjab",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-27T05:30:00.000Z",
      "end": "2021-03-27T06:30:00.000Z"
  },
  {
      "id": 31,
      "title": "Experience Sharing by Master Artisans and Weavers",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-27T08:30:00.000Z",
      "end": "2021-03-27T10:30:00.000Z"
  },
  {
      "id": 32,
      "title": "Trinjan Workshop",
      "enabled": false,
      "type": "workshop",
      "allDay": false,
      "start": "2021-03-27T10:30:00.000Z",
      "end": "2021-03-27T12:30:00.000Z"
  },
  {
      "id": 33,
      "title": "Holistic Food to Holistic Health : Building a Millet Promotion Movement in the Region",
      "speaker": "Dr Khadar Wali, Dr Amar Singh Azad",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-28T04:30:00.000Z",
      "end": "2021-03-28T06:30:00.000Z"
  },
  {
      "id": 34,
      "title": "Growing Fruits in Kitchen Gardening and Rooftop Experience sharing Workshop on Organic Kitchen Garden",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-28T06:30:00.000Z",
      "end": "2021-03-28T08:00:00.000Z"
  },
  {
      "id": 35,
      "title": "Preparing Bio Inputs at Home",
      "speaker": "Ramesh Mandiya, Madhu Jain",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-28T08:00:00.000Z",
      "end": "2021-03-28T09:00:00.000Z"
  },
  {
      "id": 36,
      "title": "Growing Fruits in 5 Layer Model",
      "speaker": "Phool Kumar",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-28T09:00:00.000Z",
      "end": "2021-03-28T10:30:00.000Z"
  },
  {
      "id": 37,
      "title": "Ganga Maa Mandal",
      "speaker": "Poshan Vatika Nutrition Garden",
      "enabled": false,
      "allDay": false,
      "start": "2021-03-28T10:30:00.000Z",
      "end": "2021-03-28T12:00:00.000Z"
  },
  {
      "id": 38,
      "title": "Millet Cooking - I",
      "enabled": false,
      "type": "class",
      "allDay": false,
      "start": "2021-03-28T07:00:00.000Z",
      "end": "2021-03-28T09:00:00.000Z"
  },
  {
      "id": 39,
      "title": "Green Live Food without Fire",
      "enabled": false,
      "type": "class",
      "allDay": false,
      "start": "2021-03-28T09:00:00.000Z",
      "end": "2021-03-28T10:30:00.000Z"
  },
  {
      "id": 40,
      "title": "Millet Cooking - II",
      "enabled": false,
      "type": "class",
      "allDay": false,
      "start": "2021-03-28T10:30:00.000Z",
      "end": "2021-03-28T12:00:00.000Z"
  },
  {
      "id": 41,
      "title": "Guidance and Collaborations for the Cultivation of Medicinal Plants",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-28T07:00:00.000Z",
      "end": "2021-03-28T08:30:00.000Z"
  },
  {
      "id": 42,
      "title": "Seed Conservation Techniques",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-28T08:30:00.000Z",
      "end": "2021-03-28T12:00:00.000Z"
  },
  {
      "id": 43,
      "title": "Discussion on Sustainable and Ecological Clothing",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-28T08:30:00.000Z",
      "end": "2021-03-28T10:30:00.000Z"
  },
  {
      "id": 44,
      "title": "Experience Sharing by Master Artisans and Weavers",
      "enabled": false,
      "type": "discussion",
      "allDay": false,
      "start": "2021-03-28T10:30:00.000Z",
      "end": "2021-03-28T12:30:00.000Z"
  },
  {
      "id": 45,
      "title": "Trinjan Workshop",
      "enabled": false,
      "type": "workshop",
      "allDay": false,
      "start": "2021-03-28T12:30:00.000Z",
      "end": "2021-03-28T13:30:00.000Z"
  }
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
