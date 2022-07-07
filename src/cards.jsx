import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import cricket from "./img/cricket.webp";
import football from "./img/Football.jpg";
import basketball from "./img/basketball.jpg";

class Cards extends React.Component {
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
                  SPORTS
                  <br />
                  Cricket
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cricket is a bat-and-ball game played between two teams of
                  eleven players each on a field at the centre of which is a
                  22-yard (20-metre) pitch with a wicket at each end, each
                  comprising two bails balanced on three stumps.
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
                  SPORTS
                  <br />
                  football
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Football, also called association football or soccer, is a
                  game involving two teams of 11 players who try to maneuver the
                  ball into the other team's goal without using their hands or
                  arms. The team that scores more goals wins.
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
                  SPORTS
                  <br />
                  BASKETBALL
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Basketball is a game played between two teams of five players
                  each on a rectangular court, usually indoors. Each team tries
                  to score by tossing the ball through the opponent's goal, an
                  elevated horizontal hoop and net called a basket.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
