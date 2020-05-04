import React, { Component } from "react";
import Blog from "./BlogShow";
class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      heading: "",
      comment: "",
      status: true
    };
    this.DataSubmit = this.DataSubmit.bind(this);
    this.Changes = this.Changes.bind(this);
    this.Comments = this.Comments.bind(this);
    this.Headings = this.Headings.bind(this);
  }

  Changes(event) {
    this.setState({
      username: event.target.value
    });
  }

  Comments(event) {
    this.setState({
      comment: event.target.value
    });
  }

  Headings(event) {
    this.setState({
      heading: event.target.value
    });
  }

  DataSubmit(event) {
    event.preventDefault();
    this.setState({
      status: false
    });
  }
  render() {
    if (this.state.status) {
      return (
        <div>
          <form onSubmit={this.DataSubmit}>
            <label>Username: </label>
            <br />
            <input
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.Changes}
            />
            <br />
            <label>Heading:</label>
            <br />
            <input type="text" name="pass" onChange={this.Headings} />
            <br />
            <input type="textbox" onChange={this.Comments} />
            <br />
            <button type="submit">Submit</button> <br />
            {/*
  <p>{this.state.username}</p>  */}
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <Blog
            username={this.state.username}
            heading={this.state.heading}
            comment={this.state.comment}
          />
        </div>
      );
    }
  }
}
export default LogIn;
