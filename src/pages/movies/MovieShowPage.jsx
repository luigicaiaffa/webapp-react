import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ShowCard from "../../components/ShowCard";
import ReviewSection from "../../components/ReviewSection";

export default function FilmShowPage() {
  const [movieData, setMovieData] = useState({});

  const goToPage = useNavigate();

  const params = useParams();
  const id = params.id;

  function fetchMovieData() {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => {
        if (res.status !== 200) {
          goToPage("/not_found");
        }
        return res.json();
      })
      .then((data) => {
        setMovieData(data);
      });
  }

  useEffect(() => {
    fetchMovieData();
  }, []);

  const reviewsData = movieData.reviews;

  return (
    <>
      <div className="container mt-5 py-5">
        <div className="d-flex justify-content-between">
          <h1 className="fw-bold">
            <i className="fa-solid fa-film"></i> {movieData.title}
          </h1>

          <div>
            <Link className="btn card-bg" to={"/movies"}>
              Torna alla lista
            </Link>
          </div>
        </div>

        <ShowCard movie={movieData} />

        <hr />

        <h4 className="fw-bold">Recensioni</h4>
        <ReviewSection reviews={reviewsData} />
      </div>
    </>
  );
}
