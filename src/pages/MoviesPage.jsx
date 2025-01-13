import { useEffect, useState } from "react";
import MoviesCard from "../components/MoviesCard";

export default function FilmsPage() {
  const [moviesData, setMoviesData] = useState([]);

  function fetchMoviesData() {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMoviesData(data));
  }

  useEffect(() => {
    fetchMoviesData();
  }, []);

  console.log(moviesData);

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4">Movies List</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">
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
