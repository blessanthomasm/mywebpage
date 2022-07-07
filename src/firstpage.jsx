import React from "react";

class FirstPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="firstpage"></div>
        <div
          className="text"
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <center>
            <h3
              style={{
                color: "white",
                paddingTop: "3%",
                fontSize: "30px",
                fontWeight: "300px",
                fontFamily: "Blackadder ITC",
              }}
            >
              Hello it's me,
            </h3>
            <h1
              style={{
                color: "darkgray",
                paddingTop: "0.5%",
                fontSize: "70px",
                fontWeight: "500px",
              }}
            >
              BLESSAN THOMAS
            </h1>
            <h3
              style={{
                color: "white",
                paddingTop: "5%",
                fontFamily: "Blackadder ITC",
                fontSize: "30px",
                wordSpacing: "5px",
                textAlign: "center",
              }}
            >
              An enthusiastic product designer currently shaping the future of
              software development by designing smooth user-interfaces that
              promote user interaction with information and data. While
              traveling around the world.
            </h3>
          </center>
        </div>
        <br /> <br /> <br /> <br /> <br />
      </React.Fragment>
    );
  }
}

export default FirstPage;
