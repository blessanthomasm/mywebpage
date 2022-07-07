import React from "react";
import clg1 from "./img/college/clg1.webp";
import clg2 from "./img/college/college-2.jpg";
import clg3 from "./img/college/clg3.jpg";
import clg4 from "./img/college/clg4.jpg";
import clg5 from "./img/college/clg5.jpg";
import clg6 from "./img/college/clg6.jpg";
import { HashLink } from "react-router-hash-link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";
export default class Clg extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "grey" }}>
          <HashLink to="/#gallery">
            <ArrowBackIcon sx={{ fontSize: 75 }} />
          </HashLink>
          <h1 style={{ textAlign: "center", marginTop: "-3%" }}>College</h1>
          <Box>
            <center>
              <img
                src={clg1}
                style={{ width: "25rem", height: "25rem" }}
                alt="img1"
              />
              <img
                src={clg2}
                style={{ width: "25rem", height: "25rem" }}
                alt="img2"
              />
              ;
              <img
                src={clg3}
                style={{ width: "25rem", height: "25rem" }}
                alt="img3"
              />
              ;
              <img
                src={clg4}
                style={{ width: "25rem", height: "25rem" }}
                alt="img4"
              />
              ;
              <img
                src={clg5}
                style={{ width: "25rem", height: "25rem" }}
                alt="img5"
              />
              ;
              <img
                src={clg6}
                style={{ width: "25rem", height: "25rem" }}
                alt="img6"
              />
            </center>
          </Box>
        </div>
      </React.Fragment>
    );
  }
}
