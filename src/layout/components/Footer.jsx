import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="left-footer">
          <Link>
            <span className="fs-5">About Us</span>
          </Link>
        </div>

        <div className="right-footer">
          <nav className="footer-right-nav">
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-youtube"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
