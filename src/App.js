import './App.css';

import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const initialState = { fullName: "", bio: "", imgSrc: "./profile.jpg", profession: "", showProfile: false, counter: 0 };
const boldTxt = { fontWeight: "700", textTransform: "uppercase" };
class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.updateState = this.updateState.bind(this)
    this.hideState = this.hideState.bind(this)

  }

  hideState() {
    this.setState(initialState)
  }

  updateState() {
    this.setState({
      fullName: "houssem hkimi",
      bio: "frontend project!",
      imgSrc: "/profile.jpg",
      profession: "Student",
      showProfile: true,
    })
  }

  componentDidMount() {
    console.log("state did mount");
    setInterval(() => {

      this.setState({
        counter: this.state.counter + 1
      })
      console.log(this.state.counter)
    }, 1000);

  }

  componentWillUnmount() {
    alert(`The state lasted ${this.state.counter} seconds !`)
  }

  render() {

    if (!this.state.showProfile) {
      return (
        <div className="main" style={{ backgroundImage: "url(/1.jpg)" }}>
          <div className="info-container">
            <div style={{ width: "30%", paddingBottom: ".8em" }}>
              <img src={this.state.imgSrc} style={{ width: "100%", height: "100%" }} alt="profile pic"></img>
            </div>
            <Button variant="warning" onClick={this.updateState}>
              Show Informations
            </Button>
          </div>
        </div>)
    }

    return (
      <div className="main" style={{ backgroundImage: "url(/1.jpg)" }}>
        <div className="info-container">
          <p>Fullname : <span style={boldTxt}>{this.state.fullName}</span> </p>
          <p>Profession : <span style={boldTxt}>{this.state.profession}</span></p>
          <p>Bio : {this.state.bio}</p>
          <div style={{ width: "30%", paddingBottom: "1em" }}>
            <img src={this.state.imgSrc} style={{ width: "100%", height: "100%" }} alt="profile pic"></img>
          </div>
          <Button variant="secondary" onClick={this.hideState}>
            Hide Informations
          </Button>
        </div>
      </div>)
  }
}


export default App;