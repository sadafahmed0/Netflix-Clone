import React, { useEffect, useState } from "react";
import instance from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
    origin: "https://www.youtube.com",
    // origin: "https://www.themoviedb.org/",
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log("Trailer URL:", url);
          if (url) {
            // Check if the URL is from YouTube
            if (url.includes("youtube.com")) {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            } else {
              console.log("Trailer URL from TMDB:", url);
              // Set the TMDB trailer URL directly
              setTrailerUrl(url);
            }
          } else {
            console.log("Trailer URL not found");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  console.table("movies", movies);
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
};

export default Row;
