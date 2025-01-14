export default function ShowCard({ data, reviews }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={data.image}
            className="card-show-img img-fluid rounded-start"
            alt={data.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.director}</p>
            <p className="card-text">{data.genre}</p>
            <p className="card-text">{data.release_year}</p>

            {reviews ? (
              reviews.map((review) => {
                return (
                  <>
                    <div key={review.id}>
                      <p className="card-text">{review.name}</p>
                      <p className="card-text">{review.text}</p>
                      <p className="card-text">{review.vote}</p>
                    </div>
                  </>
                );
              })
            ) : (
              <p>nessuna recensione</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
