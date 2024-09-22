import React, { Component } from "react";
import User from "./User";


class About extends Component {

  constructor(props){
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
        <h2>This is a About Page</h2>
        <User name={"Saurabh"} location={"Ahmedabad"} />
      </div>
    );
  }
}

export default About;
