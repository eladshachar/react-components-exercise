import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render() {
        let arr = []
        for(let i = 0; i<500; i+=1){
            arr.push("Spam")
        }

        return(
            <div>{arr.map((spam) => <li>{spam}</li>)}</div>
        )
    }
}

export default Spamalot

