import React from "react";
import Scoreboard from "../../components/Scoreboard";

const styles = {
    jumbotron : {
        margin : 0,
        borderRadius : 0,
        padding : "1rem 0",
        backgroundColor : "transparent"
    },
    instructions : {
        margin : 0
    },
    title : {
        fontFamily : "Super Mario",
        fontKerning : "10px",
        color : "rgb(96, 165, 238)",
        letterSpacing : "5px",
        WebkitTextStroke : "2px black",
        textShadow : "27px 14px 1px #2607bb",
        fontSize : "5rem",
        textAlign : "center"
    },
    container : {
        padding: 0
    }
}

function Header(props) {
    return (
        <div style={styles.jumbotron} className="jumbotron jumbotron-fluid">
            <div style={styles.container} className="container">
                <h1 style={styles.title} className="display-4">Mario Memory</h1>
                <Scoreboard score={props.score} highScore={props.highScore}/>
                <div style={styles.instructions} className="lead">click an image to earn a point.</div>
                <div style={styles.instructions} className="lead">do not click an image twice.</div>
            </div>
        </div>
    );
};

export default Header;