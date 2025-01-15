import { useEffect, useState } from "react";
import MoviesCard from "../../components/MoviesCard";

export default function MoviesIndexPage() {
  const [moviesData, setMoviesData] = useState([]);

  function fetchMoviesData() {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMoviesData(data));
  }

  useEffect(() => {
    fetchMoviesData();
  }, []);

  return (
    <>
      <div className="container mt-5 py-5">
        <h1 className="fw-bold title-text mb-4">
          <i className="fa-solid fa-film"></i> MOVIES
        </h1>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {moviesData.map((movie) => {
            return (
              <div key={movie.id} className="col">
                <MoviesCard data={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
