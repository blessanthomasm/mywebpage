import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Myimg from "./img/Blessan.jpeg";
import MdPhone from "@mui/icons-material/Phone";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CollectionsIcon from "@mui/icons-material/Collections";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import MapIcon from "@mui/icons-material/Map";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "./sidebar.css";
import FirstPage from "./firstpage";
import Gallery from "./Gallery";
import Fav from "./fav";
import Calendar from "./calendar";
import Map from "./Map";
import Feedback from "./Feedback";
import Contact from "./Contact";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <React.Fragment>
      <Grid
        container
        style={{
          height: "32em",
        }}
      >
        <Grid item xs={2.25} style={{ backgroundColor: "grey" }}>
          <HashLink to="#first">
            {" "}
            <center>
              <img
                src={Myimg}
                alt="my_image"
                height="150em"
                width="150em"
                style={{
                  borderRadius: "50em",
                  marginTop: "1rem",
                }}
              />
            </center>
          </HashLink>
          <h1 style={{ textAlign: "center", color: "blue", marginTop: "0%" }}>
            <HashLink to="#first">BLESSANTHOMAS</HashLink>
          </h1>

          <div style={{ marginTop: "-10%" }}>
            <Button variant="text" sx={{ width: "100%" }}>
              <NavLink to="/resume">
                <InsertDriveFileIcon />
                Resume
              </NavLink>
            </Button>
            <Button variant="text" sx={{ width: "100%" }}>
              <HashLink to="/#gallery">
                <CollectionsIcon />
                Gallery
              </HashLink>
            </Button>
            <Button variant="text" sx={{ width: "100%" }}>
              <HashLink to="#fav">
                <FavoriteIcon />
                Favourite
              </HashLink>
            </Button>
            <Button variant="text" sx={{ width: "100%" }}>
              <HashLink to="#feedback">
                <EditIcon />
                Feedback
              </HashLink>
            </Button>
            <Button variant="text" sx={{ width: "100%" }}>
              <HashLink to="#contact">
                <MdPhone />
                Contact me
              </HashLink>
            </Button>
            <Button variant="text" sx={{ width: "100%" }}>
              <HashLink to="#map">
                <MapIcon />
                Map
              </HashLink>
            </Button>
            <Button variant="text" sx={{ width: "100%" }}>
              <HashLink to="#forth">
                <CalendarTodayIcon />
                Calendar
              </HashLink>
            </Button>
          </div>
        </Grid>
        <Grid
          item
          xs={9.75}
          style={{
            backgroundColor: "black",
            height: "32em",
            overflow: "hidden",
          }}
        >
          <div>
            {" "}
            <div id="first">
              <FirstPage />
            </div>
            <div id="gallery">
              <Gallery />
            </div>
            <div id="fav">
              <Fav />
            </div>
            <div id="forth">
              <Calendar />
            </div>
            <div id="map">
              <Map />
            </div>
            <div id="feedback" style={{ backgroundColor: "white" }}>
              <center>
                <Feedback />
              </center>
            </div>
            <div id="contact">
              <Contact />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        sx={{ width: "100%", backgroundColor: "blue", height: "6.5vh" }}
      >
        <h4 style={{ marginTop: "0%", marginLeft: "47%" }}>
          Blessan Thomas
          <br /> <span style={{ marginLeft: "20%" }}> &#169;blessan </span>
        </h4>
      </Grid>
    </React.Fragment>
  );
}
