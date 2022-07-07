import React from "react";
import Grid from "@mui/material/Grid";
import bagmg from "./img/div6.jpg";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CollectionsIcon from "@mui/icons-material/Collections";
import { NavLink } from "react-router-dom";

class Gallery extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundImage: `url(${bagmg})` }}>
          <h1 style={{ textAlign: "center", color: "antiquewhite" }}>
            Gallery
          </h1>
          <p
            style={{ fontSize: "large", color: "bisque", textAlign: "center" }}
          >
            Memories are Preserved Here
          </p>
          <Grid container>
            <Grid item xs={6} sx={{ width: "100%", textAlign: "center" }}>
              <NavLink to="/gallery/clg">
                {" "}
                <FolderIcon sx={{ fontSize: 100 }} />
                <span style={{ fontSize: "5em" }}> College</span>
              </NavLink>
            </Grid>
            <Grid item xs={6} sx={{ width: "100%", textAlign: "center" }}>
              <NavLink to="/gallery/iv">
                <FolderOpenIcon sx={{ fontSize: 100 }} />
                <span style={{ fontSize: "5em" }}> I-V</span>
              </NavLink>
            </Grid>
            <span style={{ paddingTop: "15rem" }}></span>
            <Grid item xs={6} sx={{ width: "100%", textAlign: "center" }}>
              <NavLink to="/gallery/hostel">
                <FolderIcon sx={{ fontSize: 100 }} />
                <span style={{ fontSize: "5em" }}> Hostel</span>
              </NavLink>
            </Grid>
            <Grid item xs={6} sx={{ width: "100%", textAlign: "center" }}>
              <NavLink to="/gallery/sslc">
                <CollectionsIcon sx={{ fontSize: 100 }} />
                <span style={{ fontSize: "5em" }}> SSLC</span>
              </NavLink>
            </Grid>
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;
