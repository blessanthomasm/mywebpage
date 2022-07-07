import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import cricket from "./img/cricket.webp";
import football from "./img/Football.jpg";
import basketball from "./img/basketball.jpg";
import chess from "./img/chess.jpeg";
import code from "./img/code.jpg";

class Hobbies extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ display: "inline-block", padding: "1rem" }}>
          <Card sx={{ maxWidth: 345, display: "inline-block" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={cricket}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Play
                  <br />
                  Cricket
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div style={{ display: "inline-block", padding: "1rem" }}>
          <Card sx={{ maxWidth: 345, display: "inline-block" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={football}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Play
                  <br />
                  football
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div style={{ display: "inline-block", padding: "1rem" }}>
          <Card sx={{ maxWidth: 345, display: "inline-block" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={basketball}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Play
                  <br />
                  BASKETBALL
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <br />
        <div style={{ display: "inline-block", padding: "1rem" }}>
          <Card sx={{ maxWidth: 345, display: "inline-block" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={chess}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Play
                  <br />
                  CHESS
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div style={{ display: "inline-block", padding: "1rem" }}>
          <Card sx={{ maxWidth: 345, display: "inline-block" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={code}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Practise
                  <br />
                  Coding
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Hobbies;
