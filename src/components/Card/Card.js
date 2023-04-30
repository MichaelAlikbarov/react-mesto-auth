import React from "react";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="cards__card">
      <img
        className="cards__foto"
        src={props.link}
        alt={props.name}
        onClick={handleClick}
      />
      <div className="cards__place">
        <h2 className="cards__name">{props.name}</h2>
        <div className="cards__heart-container">
          <button className="cards__heart" type="button"></button>
          <div className="cards__quantity-like">{props.likes}</div>
        </div>
      </div>
      <button className="cards__delete"></button>
    </li>
  );
}
