import { Component } from "react"
import { DateTime } from "luxon";

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = { curTime: DateTime.now() };
    }

    componentDidMount() {
        this.timeInterval = setInterval(() => this.setState({ curTime: DateTime.now() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    render() {
        return <p>{ this.state.curTime.setZone(this.props.timezone).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS) }</p>;
    }
}