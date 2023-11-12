import React, { Component } from 'react'

export default class Content extends Component {


    constructor() {
        super();

        this.state = {
            interval: null,
            time: new Date()
        };


    }

    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                console.log("Before setState",this.state)
                this.setState(
                    {
                        time: new Date()
                    }

                )
                console.log("After setState",this.state)
            }, 5000),

        })

    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
        console.log("In return of useEffect")
    }

    render() {
        return (
            <>
                <h5>{new Date().toLocaleTimeString()}</h5>
                <img src="CoD-5.jpg" width="500" height="500" alt="Loading..." />
            </>
        )
    }
}
