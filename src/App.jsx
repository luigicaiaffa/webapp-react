import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieShowPage from "./pages/MovieShowPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />

            <Route path="movies/">
              <Route index element={<MoviesPage />} />
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
