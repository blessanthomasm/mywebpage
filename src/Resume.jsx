import { Button, Divider } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { HashLink } from "react-router-hash-link";
import Grid from "@mui/material/Grid";
import pro from "./img/pro img2.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";
import res from "./img/files/BTM.pdf";
import Cards from "./cards";
import Hobbies from "./Hobbies";
import Skills from "./Skills";

class Resume extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "#2c3642",
            height: "3rem",
            position: "fixed",
            width: "100%",
          }}
        >
          <HashLink to="/resume/#resume">
            {" "}
            <Button sx={{ marginTop: "-2%" }}>
              <b style={{ fontSize: 20, color: "white" }}>RESUME</b>
            </Button>
          </HashLink>
          <HashLink to="/resume/#interset">
            <Button sx={{ marginTop: "-2%" }}>
              <b style={{ fontSize: 20, color: "white" }}>INTEREST</b>
            </Button>
          </HashLink>
          <HashLink to="/resume/#hobbies">
            <Button sx={{ marginTop: "-2%" }}>
              <b style={{ fontSize: 20, color: "white" }}>HOBBIES</b>
            </Button>
          </HashLink>
          <HashLink to="/resume/#skills">
            <Button sx={{ marginTop: "-2%" }}>
              <b style={{ fontSize: 20, color: "white" }}>SKILLS</b>
            </Button>
          </HashLink>

          <b style={{ marginLeft: "69%" }}>
            <HashLink to="/#first">
              <HomeIcon sx={{ fontSize: 45, color: "white" }} />
            </HashLink>
          </b>
        </div>
        <br />
        <div id="resume"></div> <br />
        <Grid container>
          <Grid
            item
            xs={3}
            sx={{ backgroundColor: "#2c3642", height: "51rem" }}
          >
            <img src={pro} alt="pro" width="100%" />
            <b style={{ color: "white", fontSize: "1.5rem" }}>CONTACT</b>
            <br />
            <EmailIcon sx={{ color: "white", fontSize: "medium" }} />
            <b style={{ color: "white" }}>
              {" "}
              blessan.thomas_ms09b1@smartcliff.academy
            </b>
            <br />
            <PhoneEnabledIcon sx={{ color: "white", fontSize: "medium" }} />
            <b style={{ color: "white" }}>+919876543210</b>
            <br />
            <InstagramIcon sx={{ color: "white", fontSize: "medium" }} />
            <b style={{ color: "white" }}>blessanthomas1997</b>
            <br />
            <br />
            <center>
              <Divider
                sx={{ bgcolor: "white", width: "95%", height: "0.01rem" }}
              />
            </center>
            <b style={{ color: "white", fontSize: "1.5rem" }}>SKILLS</b>
            <br />
            <br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "3.8rem",
                width: "3.8rem",
                bgcolor: "#00a4d9",
              }}
            >
              HTML
            </Button>
            <br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "3.8rem",
                width: "3.8rem",
                bgcolor: "#00a4d9",
              }}
            >
              CSS
            </Button>{" "}
            <br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "3.8rem",
                width: "3.8rem",
                bgcolor: "#00a4d9",
              }}
            >
              Js
            </Button>
            <br />
            <br />
            <center>
              <Divider
                sx={{ bgcolor: "white", width: "95%", height: "0.01rem" }}
              />
              <br />
              <NavLink to={res} download>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "50%",
                    height: "6rem",
                    width: "6rem",
                    bgcolor: "#00a4d9",
                  }}
                >
                  DOWNLOAD
                </Button>
              </NavLink>
            </center>
          </Grid>
          <Grid item xs={9}>
            <div
              style={{
                backgroundColor: "#00a4d9",
                height: "16rem",
                marginTop: "-2%",
              }}
            >
              <center>
                <h1 style={{ color: "white", paddingTop: "2%" }}>
                  BLESSAN THOMAS
                </h1>
                <h2 style={{ color: "white" }}> Front End Developer</h2>
              </center>
            </div>
            <div style={{ backgroundColor: "#e5e5e5", height: "35rem" }}>
              <center>
                <Divider>
                  <h2>EDUCATION</h2>
                </Divider>
              </center>
              <Grid container>
                <Grid xs={3} style={{ paddingLeft: "2rem" }}>
                  2016
                  <br />
                  2018
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid xs={6} style={{ paddingLeft: "2rem" }}>
                  <h1>DBHSS THACHAMPARA[HSE]</h1>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid xs={3}>
                  <br />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid xs={6} style={{ paddingLeft: "2rem" }}>
                  Deserunt velit qui esse excepteur officia culpa sint ut
                  consectetur proident. Sit exercitation mollit cillum sit. Enim
                  culpa eu veniam excepteur cupidatat laborum sit sit sint esse
                  non. Excepteur et incididunt magna sunt et occaecat
                  exercitation laborum irure labore sunt do. Duis commodo nulla
                  nostrud laborum minim ipsum magna. Laborum sit est nisi
                  officia sint. Ea aute occaecat culpa sit duis mollit laborum
                  ullamco eiusmod.
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid xs={3} style={{ paddingLeft: "2rem" }}>
                  2018
                  <br />
                  2022
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid xs={6} style={{ paddingLeft: "2rem" }}>
                  <h1>CKEC [B.E - CSE ](UG)</h1>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid xs={3}>
                  <br />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid xs={6} style={{ paddingLeft: "2rem" }}>
                  Qui ipsum exercitation dolore qui pariatur quis. Irure laboris
                  eu deserunt cupidatat ad qui irure cupidatat incididunt culpa
                  nostrud sint. Cupidatat voluptate nulla magna laborum duis ex
                  magna consequat incididunt deserunt velit minim. Nisi
                  cupidatat pariatur anim fugiat dolore.
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <div id="interset"></div>
        <br />
        <h1 style={{ textAlign: "center" }}>INTEREST</h1>
        <br />
        <center>
          {" "}
          <Cards />
        </center>
        <div id="hobbies"></div>
        <br />
        <h1 style={{ textAlign: "center" }}>HOBBIES</h1>
        <br />
        <center>
          {" "}
          <Hobbies />
        </center>
        <div id="skills"></div>
        <br />
        <h1 style={{ textAlign: "center" }}>SKILLS</h1>
        <br />
        <center>
          {" "}
          <Skills />
        </center>
      </React.Fragment>
    );
  }
}

export default Resume;
