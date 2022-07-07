import React from "react";
import Grid from "@mui/material/Grid";
import bagmfav from "./img/div8.jpg";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BrushIcon from "@mui/icons-material/Brush";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class Fav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundImage: `url(${bagmfav})` }}>
          <h1 style={{ textAlign: "center", color: "white" }}>MY FAV</h1>
          <Grid container>
            <Grid item xs={6} sx={{ width: "100%", textAlign: "center" }}>
              <NavLink to="fav/favorite">
                <SportsBasketballIcon sx={{ fontSize: 90, color: "orange" }} />
                <span style={{ fontSize: "5em", color: "orange" }}>
                  {" "}
                  Sports
                </span>
              </NavLink>
            </Grid>
            <Grid item xs={6} sx={{ width: "100%", textAlign: "center" }}>
              <HashLink to="fav/favorite/#food">
                <RestaurantIcon sx={{ fontSize: 90, color: "orange" }} />
                <span style={{ fontSize: "5em", color: "orange" }}> Food</span>
              </HashLink>
            </Grid>
            <Grid item xs={6} sx={{ width: "100%", textAlign: "center" }}>
              <HashLink to="fav/favorite/#music">
                <MusicNoteIcon sx={{ fontSize: 90, color: "orange" }} />
                <span style={{ fontSize: "5em", color: "orange" }}> Music</span>
              </HashLink>
            </Grid>
            <Grid item xs={6} sx={{ width: "100%", textAlign: "center" }}>
              <HashLink to="fav/favorite/#vechicle">
                <DirectionsCarIcon sx={{ fontSize: 90, color: "orange" }} />
                <span style={{ fontSize: "5em", color: "orange" }}>
                  {" "}
                  Vechicles
                </span>
              </HashLink>
            </Grid>
            <Grid item xs={6} sx={{ width: "100%", textAlign: "center" }}>
              <HashLink to="fav/favorite/#place">
                <LocationOnIcon sx={{ fontSize: 90, color: "orange" }} />
                <span style={{ fontSize: "5em", color: "orange" }}> Place</span>
              </HashLink>
            </Grid>
            <Grid item xs={6} sx={{ width: "100%", textAlign: "center" }}>
              <HashLink to="fav/favorite/#transport">
                <LocalShippingIcon sx={{ fontSize: 90, color: "orange" }} />
                <span style={{ fontSize: "5em", color: "orange" }}>
                  {" "}
                  Transport
                </span>
              </HashLink>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{ width: "100%", textAlign: "center" }}
            ></Grid>
            <Grid item xs={6} sx={{ width: "100%", textAlign: "center" }}>
              <HashLink to="fav/favorite/#color">
                <BrushIcon sx={{ fontSize: 90, color: "orange" }} />
                <span style={{ fontSize: "5em", color: "orange" }}> Color</span>
              </HashLink>
            </Grid>
          </Grid>
          <br />
        </div>
      </React.Fragment>
    );
  }
}
export default Fav;
