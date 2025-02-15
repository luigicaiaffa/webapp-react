import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ShowCard from "../../components/ShowCard";
import ReviewSection from "../../components/ReviewSection";
import StoreReviewsForm from "../../components/StoreReviewsForm";

export default function MovieShowPage() {
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
        <div className="d-flex justify-content-between mb-3">
          <h1 className="fw-bold title-text">
            <i className="fa-solid fa-film"></i> {movieData.title}
          </h1>

          <div>
            <Link className="btn card-bg" to={"/movies"}>
              Back to list
            </Link>
          </div>
        </div>

        <ShowCard movie={movieData} />

        <hr />

        <ReviewSection reviews={reviewsData} />

        <StoreReviewsForm />
      </div>
    </>
  );
}
