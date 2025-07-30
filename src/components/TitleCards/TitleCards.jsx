import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTIxZDcxNGJiMmU2MDNkNDE1OGMyNzdiNzZmMDdlMiIsIm5iZiI6MTc1Mzg4MDQyNy44MjQsInN1YiI6IjY4OGExNzZiNjA0OTViNzQwNzg0YmU5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQC2TIld_LlUZwEpZC4drqoI1kt0EzWX-D55AgIluHE",
    },
  };

  const handleWheel = (event) => {
    event.preventDefualt();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  console.log(category);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1&release_date.gte=2015-01-01&sort_by=vote_average.desc&vote_count.gte=500`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + card.backdrop_path}
              />
              <p>{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
