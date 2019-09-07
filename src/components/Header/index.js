import React from "react";
import Scoreboard from "../../components/Scoreboard";

const styles = {
    jumbotron : {
        margin : 0,
        borderRadius : 0,
        padding : "1rem 0"
    },
    lead : {
        display : "inline-block",
        margin : 0
    }
}

function Header(props) {
    return (
        <div style={styles.jumbotron} className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Mario Memory</h1>
                <p style={styles.lead} className="lead">Click the images to earn a point. Do not click an image twice.</p>
                <Scoreboard score={props.score} highScore={props.highScore}/>
            </div>
        </div>
    );
};

export default Header;