import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTIxZDcxNGJiMmU2MDNkNDE1OGMyNzdiNzZmMDdlMiIsIm5iZiI6MTc1Mzg4MDQyNy44MjQsInN1YiI6IjY4OGExNzZiNjA0OTViNzQwNzg0YmU5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQC2TIld_LlUZwEpZC4drqoI1kt0EzWX-D55AgIluHE",
    },
  };

  useEffect(() => {
    const getOfficialTrariler = (video) => {
      const trailers = video.filter((video) => video.type === "Trailer");

      const officialTrailer = trailers.find(
        (video) =>
          video.official === true && /official trailer/i.test(video.name)
      );

      return officialTrailer || trailers[0];
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(getOfficialTrariler(res.results)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
        <p> official{apiData.official}</p>
      </div>
    </div>
  );
};

export default Player;
