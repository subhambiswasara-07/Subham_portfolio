import React from 'react'
import "./cards.css";

const Cards = ({card}) => {

  return (
    <div className="card ">
      <div className="card-img" id={"card-" + card.id}>
        <img src={card.Url} alt="" />
      </div>
      <div className="card-text">
        <h2>{card.text}</h2>
        <p>{card.desc}</p>
        <a href={card.Url} target="_blank" rel="noopener noreferrer">
          visit
        </a>
      </div>
    </div>
  );
}

export default Cards
