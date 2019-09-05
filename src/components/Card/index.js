import React from "react";
import "./style.css";

function Card(props) {

    return (
        <figure className="figure">
            <img src={props.image} data-id={props.id} alt={props.name} className="figure-img img-fluid rounded" />
        </figure>
    );
}

export default Card;