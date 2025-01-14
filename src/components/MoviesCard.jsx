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
              <li className="list-group-item">{data.director}</li>
              <li className="list-group-item">{data.genre}</li>
              <li className="list-group-item">{data.release_year}</li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
}
