import React from 'react';

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
    return (
        <div>
            {props.name}
        </div>
    );
};

export default Card;