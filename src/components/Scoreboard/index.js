import React from "react";

const styles = {
    scoreBoard : {
        display : "inline-block",
        fontSize : "1.25rem",
        float : "right",
        letterSpacing : "-3px",
        textAlign : "right",
        lineHeight : "28px"
    },
    score : {
        fontSize : "1.7rem"
    }
}

function Scoreboard(props) {
    return (
        <div style={styles.scoreBoard}>
            <div>CURRENT SCORE: <span style={styles.score}>{props.score}</span></div>
            <div>HIGH SCORE: <span style={styles.score}>{props.highScore}</span></div>
        </div>
        );
};

export default Scoreboard;