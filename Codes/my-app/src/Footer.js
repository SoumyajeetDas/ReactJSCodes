import React, {Component} from 'react'


import './Footer.css'

let name = 'Footer';

export default class footer extends Component{
    render()
    {
        return(
            <footer>
                <p>{name}</p>
            </footer>
        );
    }
}