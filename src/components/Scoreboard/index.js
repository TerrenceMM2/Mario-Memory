import React from "react";

const styles = {
    scoreBoard : {
        display : "inline-block",
        fontSize : "1.25rem",
        float : "right",
        fontWeight : 100,
    }
}

function Scoreboard(props) {
    return (
            <div style={styles.scoreBoard}>Current Score: {props.score} | High Score: {props.highScore}</div>
        );
};

export default Scoreboard;