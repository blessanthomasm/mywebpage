import React from "react";
import HomeHeader from "./HomeHeader";
import SideBar from "./SideBar";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <SideBar />
      </React.Fragment>
    );
  }
}

export default Home;
