export default function ReviewSection({ reviews }) {
  return (
    <div>
      {reviews ? (
        reviews.map((review) => {
          return (
            <>
              <div key={review.id}>
                <p className="">{review.name}</p>
                <p className="">{review.text}</p>
                <p className="">{review.vote}</p>
              </div>
            </>
          );
        })
      ) : (
        <p>nessuna recensione</p>
      )}
    </div>
  );
}
