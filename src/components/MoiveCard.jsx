import { NavLink } from "react-router-dom";
import Star from "../assets/star.png";

export default function MoiveCard({ movie }) {
  const shorten = (string) => {
    if (string.length > 120) {
      const shortened = string.substring(0, 120) + "...";
      return shortened;
    } else {
      return string;
    }
  };

  return (
    <NavLink className="link-to" to={`/${movie.id}`}>
      <div className="box">
        <div className="imgbox">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
        </div>

        <div className="rating-home">
          <img src={Star} alt="Image did not load" />
          <p>{Math.round(movie.vote_average * 10) / 10}</p>
          <p id="more-info">More Info</p>
        </div>
        <h1>{movie.title}</h1>
      </div>
    </NavLink>
  );
}
