import { useEffect } from "react";

export default function FilmsPage() {
  function fetchMoviesData() {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  useEffect(() => {
    fetchMoviesData();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1>Movies List</h1>
      </div>
    </>
  );
}
