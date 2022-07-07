import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { HashLink } from "react-router-hash-link";
import cricket from "./img/cricket.webp";
import Divider from "@mui/material/Divider";
import biriyani from "./img/biriyani.webp";
import kfc from "./img/chicken.webp";
import jeep from "./img/jeep.jpg";
import vagamon from "./img/Vagamon.jpg";
import air from "./img/aeroplane.jpg";
import Musicplayer from "./Musicplayer";

class Favourite extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "white" }}>
          <div
            style={{
              height: "4em",
              backgroundColor: "#00a4d9",
              position: "fixed",
              width: "100%",
            }}
          >
            <HashLink to="/#fav">
              <HomeIcon sx={{ fontSize: 75 }} />
            </HashLink>
            <h1 style={{ textAlign: "center", marginTop: "-4%" }}>MY FAV</h1>
          </div>
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <Divider>SPORTS</Divider>
          <center>
            <img src={cricket} alt="cricket" style={{ height: "30rem" }} />
            <br />
            <b>Fav Sport:Cricket</b>
            <br />
            <b> Fav cricketer:SACHIN TENDULKAR</b>
          </center>
          <br />
          <div id="food">
            <br />

            <br />
            <br />
            <Divider>FOOD</Divider>
            <center>
              <img src={biriyani} alt="biriyani" style={{ height: "23rem" }} />
              <img src={kfc} alt="kfc" style={{ height: "23rem" }} />
              <br />
              <b style={{ marginLeft: "-15%" }}>
                Biriyani <span style={{ marginLeft: "25%" }}>Chicken</span>
              </b>
            </center>
          </div>
          <div id="music"></div>
          <br />
          <br />
          <br />
          <Divider>Music</Divider>
          <center>
            <h2>SINGER: SHREYA GHOSHAL, M G SreeKumar</h2>
            <h2>COMPOSER:A.R.RAHMAN</h2>
            <Musicplayer />
          </center>
          <div id="vechicle"></div>
          <br />
          <Divider>Vechicle</Divider>
          <center>
            <img src={jeep} alt="jeep" style={{ height: "23rem" }} />
            <br />
            <b>jeep</b>
          </center>
          <div>
            <div id="place"></div>

            <br />
            <br />
            <br />
            <br />
            <Divider>PLACE</Divider>
            <center>
              <h3>Vagamon</h3>
              <img src={vagamon} alt="place" style={{ height: "23rem" }} />
            </center>
          </div>
          <div>
            <div id="transport"></div>
            <Divider>TRANSPORT</Divider>
            <center>
              <img src={air} alt="place" style={{ height: "23rem" }} />
              <h3>Aeroplane</h3>
            </center>
          </div>
          <div id="color"></div>
          <div>
            <Divider>COLOR</Divider>
            <div style={{ backgroundColor: "green", height: "3rem" }}>
              <center>
                <h3>GREEN</h3>
              </center>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Favourite;
