import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";

class App extends Component {
  
  state = {
    characters
  };
  
  render() {
    return (
      <div>
      <Header />
        <Wrapper>
          <div>
            {this.state.characters.map(character => (<Card name={character.name} data-id={character.id} image={character.image}/>))}
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
