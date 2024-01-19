//17d8b0633701cf4de71d2a5b6ee14dc3   API key
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import HighestRated from "./pages/HighestRated";
import NowPlaying from "./pages/NowPlaying";
import MovieDetail from "./pages/MovieDetail";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="highestrated" element={<HighestRated />} />
      <Route path="nowplaying" element={<NowPlaying />} />
      <Route path="/:id" element={<MovieDetail />} />
      <Route path="searchpage/:search" element={<SearchPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
