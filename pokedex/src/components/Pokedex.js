import React, { Component } from 'react';
import Card from "./Card";


class Pokedex extends Component {
    render() {
        return (
            <>
                <h1>{this.props.appName}</h1>
                <div className="pokedex-container">
                    {this.props.pokemon.map(pokemon => {
                        return (
                            <Card pokemon={pokemon} />
                        )
                    })}
                </div>
            </>
        );
    }}



export default Pokedex;