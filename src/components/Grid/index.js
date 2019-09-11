import React from "react";
import Card from "../Card";

const styles = {
    cardContainer : {
        display : "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr"
    }
}

function Header(props) {
    return (
        <div style={styles.cardContainer}>
            {/* For each character in the array, create a new card. */}
            {props.characters.map(character => (<Card key={character.id} handlerCardClick={props.handlerCardClick} name={character.name} id={character.id} image={character.image}/>))}
        </div>
    );
};

export default Header;