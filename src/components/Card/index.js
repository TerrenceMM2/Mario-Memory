import React from "react";
import "./style.css";

function Card(props) {

    return (
        <figure className="figure hvr-grow-shadow">
            <img onClick={props.handlerIncrementScore} src={props.image} id={props.id} alt={props.name} className="figure-img img-fluid rounded" />
        </figure>
    );
}

export default Card;

