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
  if (event.speaker) {
    speaker = (
      <p>
        <span style={{ fontSize: "14px" }}>by {event.speaker}</span>
      </p>
    );
  }
  return (
    <div>
      <strong>{event.title}</strong>
      {speaker}
    </div>
  );
}

const KUCalendar = () => (
  <Calendar
    localizer={localizer}
    events={eventsList}
    startAccessor="start"
    endAccessor="end"
    defaultView={Views.DAY}
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
    resources={locationMap}
    resourceIdAccessor="locationId"
    resourceTitleAccessor="locationTitle"
    components={{
      event: Event,
      agenda: {
        event: EventAgenda,
      },
    }}
    style={{ height: 1400 }}
  />
);

KUCalendar.propTypes = {};

const exportedEvents = [
  {
    id: 1,
    title:
      "Beginners' Workshop on Organic Kitchen Garden - Vegetables and Fruits",
    speaker: "Ramesh Mandiya, Madhu Jain",
    type: "workshop",
    allDay: false,
    start: "2021-03-26T07:00:00.000Z",
    end: "2021-03-26T08:30:00.000Z",
    locationId: 1,
    locationName: "Front Lawn",
  },
  {
    id: 2,
    title: "Roof Top Gardening - How to grow Summer Vegetables on Rooftop",
    speaker: "Narinder Singh",
    allDay: false,
    start: "2021-03-26T08:30:00.000Z",
    end: "2021-03-26T09:30:00.000Z",
    locationId: 1,
    locationName: "Front Lawn",
  },
  {
    id: 3,
    title: "Medicinal Plants in Kitchen Garden",
    allDay: false,
    start: "2021-03-26T09:30:00.000Z",
    end: "2021-03-26T10:30:00.000Z",
    locationId: 1,
    locationName: "Front Lawn",
  },
  {
    id: 4,
    title: "How to do Home Composting",
    speaker: "Ekta Bansal, Jagtar Dhaliwal",
    allDay: false,
    start: "2021-03-26T10:30:00.000Z",
    end: "2021-03-26T11:30:00.000Z",
    locationId: 1,
    locationName: "Front Lawn",
  },
  {
    id: 5,
    title: "Fruit & Food Forest",
    speaker: "Phool Kumar, Ravdeep Singh",
    allDay: false,
    start: "2021-03-26T11:30:00.000Z",
    end: "2021-03-26T13:30:00.000Z",
    locationId: 1,
    locationName: "Front Lawn",
  },
  {
    id: 6,
    title: "Curing without Medicines",
    speaker: "Atul Shah",
    allDay: false,
    start: "2021-03-26T07:00:00.000Z",
    end: "2021-03-26T09:00:00.000Z",
    locationId: 2,
    locationName: "Lecture Hall / Seminar Room for Health",
  },
  {
    id: 7,
    title: "Marma Chikitsa and Local Health Traditions",
    speaker: "Dr N N Mehrotra and Team",
    allDay: false,
    start: "2021-03-26T09:30:00.000Z",
    end: "2021-03-26T11:30:00.000Z",
    locationId: 2,
    locationName: "Lecture Hall / Seminar Room for Health",
  },
  {
    id: 8,
    title: "Millet Cooking",
    allDay: false,
    start: "2021-03-26T07:00:00.000Z",
    end: "2021-03-26T09:00:00.000Z",
    locationId: 3,
    locationName: "MRS PTU Kitchen Space - Cookery Classes",
  },
  {
    id: 9,
    title: "Green Live Food without Fire",
    allDay: false,
    start: "2021-03-26T09:30:00.000Z",
    end: "2021-03-26T11:30:00.000Z",
    locationId: 3,
    locationName: "MRS PTU Kitchen Space - Cookery Classes",
  },
  {
    id: 10,
    title: "Millet Processing at Home",
    allDay: false,
    start: "2021-03-26T11:30:00.000Z",
    end: "2021-03-26T13:30:00.000Z",
    locationId: 3,
    locationName: "MRS PTU Kitchen Space - Cookery Classes",
  },
  {
    id: 11,
    title:
      "Guidance and Collaborations for the Cultivation of Medicinal Plants",
    allDay: false,
    start: "2021-03-26T09:00:00.000Z",
    end: "2021-03-26T11:30:00.000Z",
    locationId: 4,
    locationName:
      "Lecture Hall / Seminar Room for Ecological Agriculture Technologies",
  },
  {
    id: 12,
    title: "Seed Conservation Techniques",
    allDay: false,
    start: "2021-03-26T11:30:00.000Z",
    end: "2021-03-26T13:30:00.000Z",
    locationId: 4,
    locationName:
      "Lecture Hall / Seminar Room for Ecological Agriculture Technologies",
  },
  {
    id: 13,
    title: "Experience Sharing by Master Artisans and Weavers",
    allDay: false,
    start: "2021-03-26T09:30:00.000Z",
    end: "2021-03-26T11:30:00.000Z",
    locationId: 5,
    locationName: "TRINJAN Pavillion",
  },
  {
    id: 14,
    title: "TRINJAN Workshop on Spinning",
    allDay: false,
    start: "2021-03-26T11:30:00.000Z",
    end: "2021-03-26T13:30:00.000Z",
    locationId: 5,
    locationName: "TRINJAN Pavillion",
  },
  {
    id: 15,
    title:
      "Growing Fruits in Kitchen Gardening and Rooftop Experience sharing Workshop on Organic Kitchen Garden",
    speaker: "Narinder Singh, Umaid Singh, Vipin Chhabra, Kamaljieet Kaur",
    allDay: false,
    start: "2021-03-27T04:30:00.000Z",
    end: "2021-03-27T07:30:00.000Z",
    locationId: 1,
    locationName: "Front Lawn - Organic Kitchen Garden Avenue",
  },
  {
    id: 16,
    title: "How to Grow Organic Mushroom",
    speaker: "Dr Sukhdeep Hundal, Jagtar Dhaliwal",
    allDay: false,
    start: "2021-03-27T07:30:00.000Z",
    end: "2021-03-27T08:30:00.000Z",
    locationId: 1,
    locationName: "Front Lawn - Organic Kitchen Garden Avenue",
  },
  {
    id: 17,
    title: "Fruit & Food Forest",
    speaker: "Phool Kumar, Ravdeep Singh, Kamajeet Hayer, Devinder Singh",
    allDay: false,
    start: "2021-03-27T09:00:00.000Z",
    end: "2021-03-27T11:30:00.000Z",
    locationId: 1,
    locationName: "Front Lawn - Organic Kitchen Garden Avenue",
  },
  {
    id: 18,
    title: "Community Organic Farming",
    allDay: false,
    start: "2021-03-27T11:30:00.000Z",
    end: "2021-03-27T13:30:00.000Z",
    locationId: 1,
    locationName: "Front Lawn - Organic Kitchen Garden Avenue",
  },
  {
    id: 19,
    title: "Curing without Medicines",
    speaker: "Atul Shah",
    allDay: false,
    start: "2021-03-27T04:30:00.000Z",
    end: "2021-03-27T06:30:00.000Z",
    locationId: 2,
    locationName: "Lecture Hall / Seminar Room",
  },
  {
    id: 20,
    title: "Marma Chikitsa and Local Health Traditions",
    speaker: "Dr N N Mehrotra and team",
    allDay: false,
    start: "2021-03-27T06:30:00.000Z",
    end: "2021-03-27T08:30:00.000Z",
    locationId: 2,
    locationName: "Lecture Hall / Seminar Room",
  },
  {
    id: 21,
    title: "Millet Cooking - I",
    allDay: false,
    start: "2021-03-27T05:00:00.000Z",
    end: "2021-03-27T07:00:00.000Z",
    locationId: 3,
    locationName: "MRS PTU Kitchen Space - Cookery Classes",
  },
  {
    id: 22,
    title: "Green Live Food without Fire",
    allDay: false,
    start: "2021-03-27T07:00:00.000Z",
    end: "2021-03-27T09:00:00.000Z",
    locationId: 3,
    locationName: "MRS PTU Kitchen Space - Cookery Classes",
  },
  {
    id: 23,
    title: "Millet Processing at Home",
    allDay: false,
    start: "2021-03-27T09:00:00.000Z",
    end: "2021-03-27T11:00:00.000Z",
    locationId: 3,
    locationName: "MRS PTU Kitchen Space - Cookery Classes",
  },
  {
    id: 24,
    title: "Millet Cooking - II",
    allDay: false,
    start: "2021-03-27T11:00:00.000Z",
    end: "2021-03-27T13:00:00.000Z",
    locationId: 3,
    locationName: "MRS PTU Kitchen Space - Cookery Classes",
  },
  {
    id: 25,
    title:
      "Guidance and Collaborations for the Cultivation of Medicinal Plants",
    allDay: false,
    start: "2021-03-27T05:30:00.000Z",
    end: "2021-03-27T08:30:00.000Z",
    locationId: 4,
    locationName:
      "Lecture Hall / Seminar Room for Ecological Agriculture Technologies",
  },
  {
    id: 26,
    title: "Seed Conservation Techniques",
    allDay: false,
    start: "2021-03-27T09:30:00.000Z",
    end: "2021-03-27T12:30:00.000Z",
    locationId: 4,
    locationName:
      "Lecture Hall / Seminar Room for Ecological Agriculture Technologies",
  },
  {
    id: 27,
    title: "Discussion on Spinning Heritage of Punjab",
    allDay: false,
    start: "2021-03-27T05:30:00.000Z",
    end: "2021-03-27T06:30:00.000Z",
    locationId: 5,
    locationName: "TRINJAN Pavillion",
  },
  {
    id: 28,
    title: "Experience Sharing by Master Artisans and Weavers",
    allDay: false,
    start: "2021-03-27T08:30:00.000Z",
    end: "2021-03-27T09:30:00.000Z",
    locationId: 5,
    locationName: "TRINJAN Pavillion",
  },
  {
    id: 29,
    title: "TRINJAN Workshop",
    allDay: false,
    start: "2021-03-27T10:30:00.000Z",
    end: "2021-03-27T11:30:00.000Z",
    locationId: 5,
    locationName: "TRINJAN Pavillion",
  },
  {
    id: 30,
    title:
      "Holistic Food to Holistic Health : Building a Millet Promotion Movement in the Region",
    speaker: "Dr Khadar Wali, Dr Amar Singh Azad",
    allDay: false,
    start: "2021-03-28T03:30:00.000Z",
    end: "2021-03-28T06:00:00.000Z",
    locationId: 6,
    locationName: "Main Auditorium",
  },
  {
    id: 31,
    title:
      "Growing Fruits in Kitchen Gardening and Rooftop Experience sharing Workshop on Organic Kitchen Garden",
    allDay: false,
    start: "2021-03-28T06:30:00.000Z",
    end: "2021-03-28T08:00:00.000Z",
    locationId: 1,
    locationName: "Front Lawn - Organic Kitchen Garden Avenue",
  },
  {
    id: 32,
    title: "Preparing Bio Inputs at Home",
    speaker: "Ramesh Mandiya, Madhu Jain",
    allDay: false,
    start: "2021-03-28T08:00:00.000Z",
    end: "2021-03-28T09:00:00.000Z",
    locationId: 1,
    locationName: "Front Lawn - Organic Kitchen Garden Avenue",
  },
  {
    id: 33,
    title: "Growing Fruits in Five Layer Model",
    speaker: "Phool Kumar",
    allDay: false,
    start: "2021-03-28T09:00:00.000Z",
    end: "2021-03-28T10:30:00.000Z",
    locationId: 1,
    locationName: "Front Lawn - Organic Kitchen Garden Avenue",
  },
  {
    id: 34,
    title: "Ganga Maa Mandal",
    speaker: "Poshan Vatika Nutrition Garden",
    allDay: false,
    start: "2021-03-28T10:30:00.000Z",
    end: "2021-03-28T12:00:00.000Z",
    locationId: 1,
    locationName: "Front Lawn - Organic Kitchen Garden Avenue",
  },
  {
    id: 35,
    title: "Millet Cooking - I",
    allDay: false,
    start: "2021-03-28T07:00:00.000Z",
    end: "2021-03-28T09:00:00.000Z",
    locationId: 3,
    locationName: "MRS PTU Kitchen Space - Cookery Classes",
  },
  {
    id: 36,
    title: "Green Live Food without Fire",
    allDay: false,
    start: "2021-03-28T09:00:00.000Z",
    end: "2021-03-28T10:30:00.000Z",
    locationId: 3,
    locationName: "MRS PTU Kitchen Space - Cookery Classes",
  },
  {
    id: 37,
    title: "Millet Cooking - II",
    allDay: false,
    start: "2021-03-28T10:30:00.000Z",
    end: "2021-03-28T12:00:00.000Z",
    locationId: 3,
    locationName: "MRS PTU Kitchen Space - Cookery Classes",
  },
  {
    id: 38,
    title:
      "Guidance and Collaborations for the Cultivation of Medicinal Plants",
    allDay: false,
    start: "2021-03-28T07:00:00.000Z",
    end: "2021-03-28T08:30:00.000Z",
    locationId: 4,
    locationName:
      "Lecture Hall / Seminar Room for Ecological Agriculture Technologies",
  },
  {
    id: 39,
    title: "Seed Conservation Techniques",
    allDay: false,
    start: "2021-03-28T08:30:00.000Z",
    end: "2021-03-28T12:00:00.000Z",
    locationId: 4,
    locationName:
      "Lecture Hall / Seminar Room for Ecological Agriculture Technologies",
  },
  {
    id: 40,
    title: "Discussion on Sustainable and Ecological Clothing",
    allDay: false,
    start: "2021-03-28T08:30:00.000Z",
    end: "2021-03-28T09:30:00.000Z",
    locationId: 5,
    locationName: "TRINJAN Pavillion",
  },
  {
    id: 41,
    title: "Experience Sharing by Master Artisans and Weavers",
    allDay: false,
    start: "2021-03-28T10:30:00.000Z",
    end: "2021-03-28T11:30:00.000Z",
    locationId: 5,
    locationName: "TRINJAN Pavillion",
  },
  {
    id: 42,
    title: "TRINJAN Workshop",
    allDay: false,
    start: "2021-03-28T12:30:00.000Z",
    end: "2021-03-28T13:30:00.000Z",
    locationId: 5,
    locationName: "TRINJAN Pavillion",
  },
];

const locationMap = [
  { locationId: 1, locationTitle: "Front Lawn" },
  { locationId: 2, locationTitle: "Seminar Hall for Health" },
  { locationId: 3, locationTitle: "MRS PTU Kitchen Space" },
  {
    locationId: 4,
    locationTitle: "Seminar Room for Ecological Agriculture Technologies",
  },
  { locationId: 5, locationTitle: "Trinjan Pavillion" },
  { locationId: 6, locationTitle: "Main Auditorium" },
];

const transformDates = (events) => {
  return events.map((item) => {
    var temp = Object.assign({}, item);
    temp.start = moment(temp.start).toDate();
    temp.end = moment(temp.end).toDate();
    temp.resourceId = temp.locationId;
    return temp;
  });
};

const eventsList = transformDates(exportedEvents);

export default KUCalendar;
