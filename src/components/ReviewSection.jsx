export default function ReviewSection({ reviews }) {
  function voteStarsFormatter(vote) {
    if (vote <= 1) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </>
      );
    }

    if (vote <= 2) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </>
      );
    }

    if (vote <= 3) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </>
      );
    }

    if (vote <= 4) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </>
      );
    }

    if (vote <= 5) {
      return (
        <>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </>
      );
    }
  }

  return (
    <>
      <h4 className="fw-bold title-text">
        <i className="fa-regular fa-comments"></i> Reviews
      </h4>

      <div>
        {reviews ? (
          reviews.map((review) => {
            return (
              <div key={review.id} className="card my-4">
                <div className="card-body card-bg rounded">
                  <ul className="list-group list-group-flush rounded">
                    <li className="list-group-item d-flex">
                      <div className="user-badge rounded-pill">
                        <i className="fa-solid fa-user"></i>
                        <span className="ms-2">{review.name}</span>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-flex justify-content-between">
                        <div>{review.text}</div>
                        <div className="flex-shrink-0 ps-2">
                          {voteStarsFormatter(review.vote)}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })
        ) : (
          <p>nessuna recensione</p>
        )}
      </div>
    </>
  );
}
