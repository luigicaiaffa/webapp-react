import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AboutUsPage from "./pages/AboutUsPage";

import MoviesIndexPage from "./pages/movies/MoviesIndexPage";
import MovieShowPage from "./pages/movies/MovieShowPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutUsPage />} />

            <Route path="movies/">
              <Route index element={<MoviesIndexPage />} />
              <Route path=":id" element={<MovieShowPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
