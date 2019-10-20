import axios from 'axios';
import React from 'react';

class Card extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                name: "", // string
                abilities: [], // array
                exp: null, // number
                id: null, // number
                height: null, // number
                sprites: {}, // object with png links (back_default/front_default)
                types: [], // can have more than one type
                weight: null // number
            }

    }
    componentDidMount() {
        axios.get(`${this.props.pokemon.url}`)
            .then(response => {
              
                const { name, abilities, base_experience, id, height, sprites, types, weight } = response.data;
                let uppercase = name[0].toUpperCase() + name.slice(1);
                let newId = id.toString().length < 3 ? id.toString().padStart(3, '0') : id;
                let fancyPic = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`;
                console.log(fancyPic)
                sprites.front_default = fancyPic;
                this.setState({ name: uppercase, abilities, exp: base_experience, id, height, sprites, types, weight})
            })
    }

    getId = (id) => {
        if(id.length < 3) {
            id = id.padStart(3,'0');
            id = Number(id);
        } 
        return id;
    }


    return (
        <div>
            {props.name}
        </div>
    );
};

export default Card;