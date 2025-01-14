export default function ShowCard({ movie, reviews }) {
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
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.director}</p>
            <p className="card-text">{movie.genre}</p>
            <p className="card-text">{movie.release_year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
