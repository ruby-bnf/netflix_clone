import React from "react";
import { Link } from "react-router-dom";

const TitleCard = ({ card, index }) => {
  return (
    <Link to={`/player/${card.id}`} className="card" key={index}>
      <img src={"https://image.tmdb.org/t/p/w500" + card.backdrop_path} />
      <p>{card.title}</p>
    </Link>
  );
};

export default TitleCard;
