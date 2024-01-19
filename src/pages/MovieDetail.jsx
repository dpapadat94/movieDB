import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Star from "../assets/star.png";
function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=17d8b0633701cf4de71d2a5b6ee14dc3&language=en-US`
      );
      const data = await res.json();
      setMovie(data);
      window.scrollTo(0, 0);
    }
    fetchMovie();
  }, []);

  const rounded = Math.round(movie.vote_average * 10) / 10;

  return (
    <div className="moviepage">
      <div>
        <img
          className="backdrop"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      </div>
      <div className="info">
        <div className="title2">
          <h1>{movie.title}</h1>
          <div className="info-box">
            <div className="rating">
              <img src={Star} className="starpng" />
              <p>{movie.vote_average}</p>
            </div>
            <div className="stats">
              <h3>Run Time:</h3>
              <p>{movie.runtime} min.</p>
            </div>
            <div className="stats">
              <h3>Released:</h3>
              <p>{movie.release_date}</p>
            </div>
          </div>
        </div>
        {movie.tagline ? <p className="tagline">{`"${movie.tagline}"`}</p> : ""}

        <p className="description">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
