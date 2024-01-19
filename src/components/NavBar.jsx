import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <h1>
            <Link to="/">MOVIE DATABASE</Link>
          </h1>
          <SearchBar />
          <div className="nav-links">
            <NavLink to="/">Featured </NavLink>
            <NavLink to="/nowplaying">Now Playing</NavLink>
            <NavLink to="/highestrated">Highest Rated</NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
