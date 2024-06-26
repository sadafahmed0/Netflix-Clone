const API_URL = "98d0900d2381e5dd1f54e7c9cabbba3b";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_URL}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_URL}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_URL}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_URL}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_URL}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_URL}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_URL}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_URL}&with_genres=99`,
};

export default requests;
