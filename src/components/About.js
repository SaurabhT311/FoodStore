import React, { Component } from "react";
import User from "./User";
import UserContext from "../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <div>
          Logged User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is a About Page</h2>
        <User name={"Saurabh"} location={"Ahmedabad"} />
      </div>
    );
  }
}

export default About;
