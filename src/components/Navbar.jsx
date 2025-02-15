import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-header navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies Blog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/movies">
                Movies List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/about"} className="nav-link" aria-current="page">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
