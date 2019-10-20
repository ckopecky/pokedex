import axios from 'axios';
import React from 'react';
import Pokedex from "./components/Pokedex";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        offset: 0, // this is the offset from the top of the array -- will help with pagination
        limit: 40, // this is the limit per page
        prev: null,
        next: null,
        count: null,
        pokemon: [],
        loading: true
      }
  }

  componentDidMount() {
    this.getPokemon();
    
      }

  getOffset = () => {
    let offset = this.state.offset;
    offset += this.state.limit;
    this.setState({ offset })
  }

  componentDidMount() {

  }
  
  
  render(){
    return (
      <div className="App">
        <Pokedex appName="Pokedex" />
      </div>
    );
  }
}

export default App;
