import { Component } from "react"
import moment from "moment";
import "moment-timezone";

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = { curTime: new Date() };
    }

    componentDidMount() {
        this.timeInterval = setInterval(() => this.setState({ curTime: new Date() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    render() {
        return <p>{ moment(this.state.curTime).tz(this.props.timezone).format('YYYY-MM-DD HH:mm:ss') }</p>;
    }
}