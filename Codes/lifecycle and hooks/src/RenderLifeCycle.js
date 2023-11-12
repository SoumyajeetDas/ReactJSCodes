import React, { Component } from 'react'

export default class ClassRender extends Component {

    constructor(){
        super();
        console.log('I am a constructor');
    }

    render() {
        console.log("In Render");

        return (
            
            <>
                <h1>{this.props.data}</h1>
            </>
        );


    }
}