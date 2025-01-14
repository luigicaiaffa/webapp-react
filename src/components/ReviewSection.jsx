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
    <div>
      {reviews ? (
        reviews.map((review) => {
          return (
            <ul key={review.id} className="list-group list-group-flush mt-4">
              <li className="list-group-item mb-2">
                <span className="user-badge">{review.name.charAt(0)}</span>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>{review.text}</div>
                  <div>{voteStarsFormatter(review.vote)}</div>
                </div>
              </li>
            </ul>
          );
        })
      ) : (
        <p>nessuna recensione</p>
      )}
    </div>
  );
}
