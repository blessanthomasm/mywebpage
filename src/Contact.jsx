import React from "react";
import bgcont from "./img/div8.jpg";
import Container from "@mui/material/Container";
import "./form.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    var a = this.state.value;
    var re = /^[A-Za-z]+$/;

    if (re.test(a)) {
    } else {
      alert("Invalid Input");
    }
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundImage: `url(${bgcont})` }}>
          <center>
            <Container sx={{ width: "50rem" }}>
              <br />
              <br />
              <form>
                <span style={{ textAlign: "center" }}>
                  <h1>ContactME</h1>
                </span>
                <p>You can contact me here.</p>
                <label>
                  First Name:
                  <input
                    type="text"
                    id="first"
                    placeholder="Name"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onBlur={this.handleSubmit}
                    required
                  />
                </label>
                <br />
                <br />
                <label>
                  Last Name:
                  <input type="text" id="last" placeholder="Name" required />
                </label>
                <br /> <br />
                <label>
                  <span style={{ paddingLeft: " 2.5rem" }}>Email:</span>
                  <input
                    type="email"
                    id="email"
                    placeholder="abc@gmail.com"
                    required
                  />
                </label>
                <br />
                <br />
                <label>
                  Message:
                  <textarea rows="8" cols="35" defaultValue={"Message"} />
                </label>
                <br />
                <br />
                <button type="Submit">SEND</button>
              </form>
            </Container>
          </center>
          <br />
          <br />
          <br />
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
