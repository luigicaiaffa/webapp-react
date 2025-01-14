export default function ShowCard({ movie }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={movie.image}
            className="card-show-img img-fluid rounded-start"
            alt={movie.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fa-solid fa-clapperboard"></i> {movie.director}
              </li>
              <li className="list-group-item">
                <i class="fa-solid fa-bars"></i> {movie.genre}
              </li>
              <li className="list-group-item">
                <i className="fa-solid fa-calendar"></i> {movie.release_year}
              </li>
            </ul>

            <hr />

            <p className="px-3 card-text">{movie.abstract}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
