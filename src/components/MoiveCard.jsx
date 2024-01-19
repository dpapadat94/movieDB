import { NavLink } from "react-router-dom";
import Star from "../assets/star.png";

export default function MoiveCard({ movie }) {
  const fit = (title) => {
    if (title.length > 18) {
      const shrunk = title.substring(0, 18) + "...";
      return shrunk;
    } else {
      return title;
    }
  };

  return (
    <NavLink className="link-to" to={`/${movie.id}`}>
      <div className="box">
        <div className="imgbox">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          ) : (
            <img
              src={
                "https://cdn.storyboardthat.com/storyboard-srcsets/poster-templates/movie-poster-3.png"
              }
              alt="image not found"
            />
          )}
        </div>

        <div className="rating-home">
          <img src={Star} alt="Image did not load" />
          <p>{Math.round(movie.vote_average * 10) / 10}</p>
          <p id="more-info">More Info</p>
        </div>
        <h1>{fit(movie.title)}</h1>
      </div>
    </NavLink>
  );
}
