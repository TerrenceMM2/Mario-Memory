import React from "react";
import Scoreboard from "../../components/Scoreboard";

const styles = {
    jumbotron: {
        margin: 0
    }
}

function Header() {
    return (
        <div style={styles.jumbotron} className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Mario Memory</h1>
                <p className="lead">Click the images to earn a point. Do not click an image twice.</p>
                <Scoreboard />
            </div>
        </div>
    );
};

export default Header;