import React from "react";

class Calendar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=uiie0t12vp5m5j562snf68m7b4%40group.calendar.google.com&ctz=Asia%2FKolkata"
          style={{ border: 0 }}
          width="100%"
          height="500px"
          frameBorder="0"
          scrolling="no"
          title="Calender"
        ></iframe>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Calendar;
