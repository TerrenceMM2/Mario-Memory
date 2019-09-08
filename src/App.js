import React, { Component } from "react";
import Grid from "./components/Grid";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import GameModal from "./components/Modal";
import characters from "./characters.json";
import gifs from "./gifs.json";

class App extends Component {
  
  state = {
    characters,
    score: 0,
    highScore: 0,
    charactersClicked: [],
    modalTitle: "",
    modalGif: "",
    showModal: false
  };

  handlerIncrementScore = (event) => {
    let id = event.target.id
    this.handlerCardShuffle(characters);
    this.handlerCharactersClicked(this.state.charactersClicked, id)
  };

  handlerCardShuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handlerCloseModal(){
    this.setState({ showModal: false });
  }

  handlerOpenModal(){
    this.setState({ showModal: true });
  }

  handlerCharactersClicked = (arr, id) => {
    this.handlerCloseModal();

    if (arr.includes(id)) {
      let gif = gifs[1].loss[Math.floor(Math.random()*gifs.length)];
      this.setState({
        score: 0,
        charactersClicked: [],
        modalGif: gif,
        modalTitle: "Game Over!"
      });
      this.handlerOpenModal();
      if (this.state.highScore < this.state.score) {
        this.setState({
          highScore: this.state.score
        });
      }
    } else {
      let score = this.state.score + 1;
      this.setState({
        score: score
      });
      if (score === 15) {
        let gif = gifs[0].win[Math.floor(Math.random()*gifs.length)];
        this.setState({
          highScore: 15,
          score: 0,
          charactersClicked: [],
          modalGif: gif,
          modalTitle: "You Win!"
        });
        this.handlerOpenModal();
      }
    }
    
    this.state.charactersClicked.push(id);

  }
  
  render() {

    return (
      <div>
      <Header score={this.state.score} highScore={this.state.highScore}/>
        <Wrapper>
          <Grid handlerCharactersClicked={this.handlerCharactersClicked} handlerIncrementScore={this.handlerIncrementScore} characters={this.state.characters} />
        </Wrapper>
        <GameModal close={this.handlerCloseModal} onHide={this.close} modalTitle={this.state.modalTitle} modalGif={this.state.modalGif} showModal={this.state.showModal} />
      </div>
    );
  }
}

export default App;
