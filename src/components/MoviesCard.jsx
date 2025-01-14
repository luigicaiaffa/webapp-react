import { Link } from "react-router-dom";

export default function MoviesCard({ data }) {
  return (
    <>
      <Link className="card-link" to={`/movies/${data.id}`}>
        <div className="card h-100">
          <img src={data.image} className="card-img-top" alt={data.title} />
          <div className="card-body">
            <h5 className="card-title fw-bold">{data.title}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex align-items-center">
                <i className="fa-solid fa-clapperboard"></i>
                <div className="mx-2">{data.director}</div>
              </li>
              <li className="list-group-item d-flex align-items-center">
                <i className="fa-solid fa-bars"></i>
                <div className="mx-2">{data.genre}</div>
              </li>
              <li className="list-group-item d-flex align-items-center">
                <i className="fa-solid fa-calendar"></i>
                <div className="mx-2">{data.release_year}</div>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
}
