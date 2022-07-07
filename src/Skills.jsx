import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import hml from "./img/Skills/HTML.png";
import cs from "./img/Skills/css.png";
import java from "./img/Skills/javascript.jpg";
import boot from "./img/Skills/bootstrap.png";
import sem from "./img/Skills/semanticui.png";

class Skills extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ display: "inline-block", padding: "1rem" }}>
          <Card sx={{ maxWidth: 345, display: "inline-block" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={hml}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HTML
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
                image={cs}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CSS
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
                image={java}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  javascript
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
                image={boot}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bootstrap
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
                image={sem}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Semantic UI
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;
