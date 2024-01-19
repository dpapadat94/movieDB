import { useEffect, useState } from "react";
import MoiveCard from "../components/MoiveCard";

function HighestRated() {
  const [highest, setHighest] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=17d8b0633701cf4de71d2a5b6ee14dc3&language=en-US&page=1`
      );
      const data = await response.json();
      setHighest(data.results);
    }
    fetchMovies();
  }, []);

  return (
    <div className="container">
      {highest.map((movie) => {
        return <MoiveCard movie={movie} key={movie.id} />;
      })}
    </div>
  );
}
export default HighestRated;
