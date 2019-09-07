import React from "react";
import Card from "../Card";

const styles = {
    cardContainer : {
        display : "grid",
        gridTemplateColumns: "25% 25% 25% 25%",
        gridTemplateRows: "25% 25% 25% 25%"
    }
}

function Header(props) {
    return (
        <div style={styles.cardContainer}>
            {props.characters.map(character => (<Card key={character.id} handlerIncrementScore={props.handlerIncrementScore} name={character.name} data-id={character.id} image={character.image}/>))}
        </div>
    );
};

export default Header;