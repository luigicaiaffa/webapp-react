import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
        <h1>{movieData.title}</h1>

        <ShowCard movie={movieData} />

        <hr />

        <ReviewSection reviews={reviewsData} />
      </div>
    </>
  );
}
