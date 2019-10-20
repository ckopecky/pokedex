import React from 'react';
import Pokedex from "./components/Pokedex";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {

      }
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
