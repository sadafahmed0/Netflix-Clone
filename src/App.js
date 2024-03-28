import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./request";

const App = () => {
  return (
    <>
      <div className="App">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      </div>
    </>
  );
};

export default App;
