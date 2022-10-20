import { Component } from "react"
import Clock from "./Clock.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.timezones = ["Australia/Sydney", "Africa/Maputo", "America/Los_Angeles", "America/New_York", "Asia/Hong_Kong", "Europe/Lisbon"];
  }

  render() {
    return (
      <>
        { this.timezones.map((timezone, index) => {
          return <div key={ index }>
            <p>{ timezone }:</p>
            <Clock timezone={ timezone } />
          </div>
        })}
      </>
    )
  }
}