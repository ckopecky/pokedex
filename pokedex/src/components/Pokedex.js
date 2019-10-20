import React, { Component } from 'react';
import Card from "./Card";


class Pokedex extends Component {
    render() {
        return (
            <div>
                {this.props.appName}
                <Card name={this.props.appName} />
            </div>
        );
    }
}



export default Pokedex;