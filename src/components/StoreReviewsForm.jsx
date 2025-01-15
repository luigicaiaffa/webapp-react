export default function StoreReviewsForm() {
  return (
    <div className="pt-4">
      <h5 className="title-text mb-3 fw-bold">Add your review</h5>
      <form className="row g-3 align-items-center">
        <div className="col-4 col-lg-2">
          <input type="text" className="form-control" placeholder="name" />
        </div>

        <div className="col-4 col-lg-2">
          <select className="form-select" defaultValue="0">
            <option value="0" disabled>
              vote...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="col-4 col-lg-8">
          <button type="submit" className="btn card-bg">
            Pubblish
          </button>
        </div>

        <div className="col-8 col-lg-4">
          <textarea
            name="text"
            className="form-control"
            id="text"
            placeholder="comment"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
