import React from "react";
import Music from "./Music";

class Musicplayer extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div
          style={{ height: "40rem", width: "80%", border: "2px solid black" }}
        >
          <Music />
        </div>
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

export default Musicplayer;
