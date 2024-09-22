/*Class Based Component */

import React, { Component } from "react";

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:"",
        location:"",
        avatar_url:""
      }
    };
    // console.log(this.props.name +" Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name +" Child componentDidMount");
    const data = await fetch("https://api.github.com/users/saurabhT311");
    const json = await data.json();
    console.log("json", json);
    this.setState({
      userInfo: json,
    })
  }

  render() {
    // console.log(this.props.name +" Child render");
    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location || "India"}</h3>
        <h4>Contact: @saurabhT511</h4>
      </div>
    );
  }
}

export default User;

//Code for Popup 
// useEffect(() => {
//   const handleClickOutside = (event) => {
//     if (
//       showPopup &&
//       emailPopupRef.current &&
//       !emailPopupRef.current.contains(event.target)
//     ) {
//       setShowPopup(false);
//     }
//   };
//   document.addEventListener("mousedown", handleClickOutside);
//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, [showPopup]);