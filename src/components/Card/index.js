import React from "react";
import "./style.css";

function Card(props) {

    return (
        <figure className="figure">
            <img onClick={props.handlerIncrementScore} src={props.image} data-id={props.id} alt={props.name} className="hvr-grow-shadow figure-img img-fluid rounded" />
        </figure>
    );
}

export default Card;

