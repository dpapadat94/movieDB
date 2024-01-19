import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

function RootLayout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      {/* <SearchBar /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
