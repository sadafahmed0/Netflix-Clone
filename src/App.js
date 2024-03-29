import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
        <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
        <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
        <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
        <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
};

export default App;
