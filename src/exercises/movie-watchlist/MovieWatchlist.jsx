import { useState } from "react";
import "./MovieWatchlist.css";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception" },
    { id: 2, title: "Interstellar" },
    { id: 3, title: "The Dark Knight" },
  ]);

  const [newMovie, setNewMovie] = useState("");

  const addMovie = () => {
    if (newMovie.trim() !== "") {
      setMovies([
        ...movies,
        {
          id: movies.length + 1,
          title: newMovie.trim(),
        },
      ]);

      setNewMovie("");
    }
  };

  const removeMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="watchlist-container">
      <h1 className="watchlist-title">Movie Watchlist</h1>

      <p className="movie-count">Total Movies: {movies.length}</p>
      <div className="movie-form">
        <input
          className="movie-input"
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Enter movie title"
        />

        <button className="add-button" onClick={addMovie}>
          Add Movie
        </button>
      </div>

      {movies.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <span>{movie.title}</span>
          <button className="remove-button" onClick={() => removeMovie(movie.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
