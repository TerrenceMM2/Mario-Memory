import React, { Component } from "react";

const styles = {
    scoreBoard : {
        display: "inline",
        position: "absolute",
        top: 0,
        right: 0,
        marginTop: "6.5rem",
        marginRight: "3rem",
        padding: "2rem",
        fontSize: "1.5rem",
        fontWeight: 100,
    }
}

class Scoreboard extends Component {

    state = {
        currentScore: 0,
        highScore: 0
    }
    
    render() {
        return (
            <div style={styles.scoreBoard}>Current Score: {this.state.currentScore} | High Score: {this.state.highScore}</div>
        );
    }
};

export default Scoreboard;