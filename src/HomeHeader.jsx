import React from "react";
import Grid from "@mui/material/Grid";
import background from "./img/div7.jpg";
import logo from "./img/btmlogo.png";
import proimg from "./img/pro img2.png";

export default function HomeHeader() {
  return (
    <Grid
      container
      style={{
        height: "10em",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid item xs={3}>
        <img src={logo} alt="logo" height="210rem" />
      </Grid>
      <Grid item xs={6}>
        <text
          style={{
            fontFamily: "Blackadder ITC",
            fontSize: "3rem",
          }}
        >
          <center style={{ paddingTop: "2rem" }}>Blessan Thomas</center>
        </text>
      </Grid>
      <Grid item xs={3}>
        <img
          style={{ marginRight: "0", paddingLeft: "40%" }}
          src={proimg}
          alt="pro"
          height="150rem"
        />
      </Grid>
    </Grid>
  );
}
