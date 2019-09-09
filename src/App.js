import React, { Component } from "react";
import Grid from "./components/Grid";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import GameModal from "./components/Modal";
import MusicBed from "./components/MusicBed";
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
    showModal: false,
  };

  handlerCardClick = (event) => {
    let id = event.target.id;
    this.handlerCardShuffle(characters);
    this.handlerGameCalculation(this.state.charactersClicked, id);
  };

  handlerCardShuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handlerHideModal = () => {
    this.setState({ showModal: false })
  }

  handlerGameCalculation = (arr, id) => {

    if (arr.includes(id)) {
      let gif = gifs[1].loss[Math.floor(Math.random() * 5)];
      this.setState({
        score: 0,
        charactersClicked: [],
        modalGif: gif,
        modalTitle: "Game Over!",
        showModal: true
      });
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
        let gif = gifs[0].win[Math.floor(Math.random() * 5)];
        this.setState({
          highScore: 15,
          score: 0,
          charactersClicked: [],
          modalGif: gif,
          modalTitle: "You Win!",
          showModal: true
        });
      }
    }
    
    this.state.charactersClicked.push(id);

  }
  
  render() {

    return (
      <div>
      <Header score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
          <Grid handlerGameCalculation={this.handlerGameCalculation} handlerCardClick={this.handlerCardClick} characters={this.state.characters} />
        </Wrapper>
        <GameModal close={this.handlerCloseModal} onHide={this.close} modalTitle={this.state.modalTitle} modalGif={this.state.modalGif} showModal={this.state.showModal} hideModal={this.handlerHideModal} />
        <MusicBed />
      </div>
    );
  }
}

export default App;
