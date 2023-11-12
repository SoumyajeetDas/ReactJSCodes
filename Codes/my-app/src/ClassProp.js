import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Check extends Component {
    render(){
        return (
            <h1>{this.props.value}</h1>
        );
    }

}

Check.propTypes = { value:PropTypes.string}

Check.defaultProps = { value:'AAAAAAAA'}