import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoiveCard from "../components/MoiveCard";

function SearchPage() {
  const { search } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function getSearched() {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=17d8b0633701cf4de71d2a5b6ee14dc3&language=en-US&page=1&include_adult=false&query=${search}`
      );
      const data = await res.json();
      setSearchResults(data.results);
    }
    getSearched();
  }, [search]);

  return (
    <div className="container">
      {searchResults.length > 1 ? (
        searchResults.map((movie) => {
          return <MoiveCard movie={movie} key={movie.id} />;
        })
      ) : (
        <h1>No Results found ...</h1>
      )}
    </div>
  );
}

export default SearchPage;
