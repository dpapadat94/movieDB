import { useEffect, useState } from "react";
import MoiveCard from "../components/MoiveCard";

function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=17d8b0633701cf4de71d2a5b6ee14dc3&language=en-US&page=1`
      );
      const data = await response.json();
      setNowPlaying(data.results);
    }
    fetchMovies();
  }, []);

  return (
    <div className="container">
      {nowPlaying.map((movie) => {
        return <MoiveCard movie={movie} key={movie.id} />;
      })}
    </div>
  );
}
export default NowPlaying;
