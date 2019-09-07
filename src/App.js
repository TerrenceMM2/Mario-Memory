import React, { Component } from "react";
import Grid from "./components/Grid";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";

class App extends Component {
  
  state = {
    characters,
    score: 0,
    highScore: 0
  };

  handlerIncrementScore = () => {
    let score = this.state.score + 1;
    this.setState({
      score: score
    });
    this.handlerCardShuffle(characters);
  };

  handlerCardShuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  render() {
    return (
      <div>
      <Header score={this.state.score} highScore={this.state.highScore}/>
        <Wrapper>
          <Grid handlerIncrementScore={this.handlerIncrementScore} characters={this.state.characters} />
        </Wrapper>
      </div>
    );
  }
}

export default App;
