import "./styles/Navbar.css"
import { Link } from "react-router-dom"
export default function Navbar({ theme }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <ul>
            <li className="navbar-li">
              <Link to="/">home</Link>
            </li>
            <li className="navbar-li">
              <Link to="/stack">stack</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-rigth">
          <ul>
            <li className="navbar-li">
              <a href="https://github.com/kevinduhamelhayes">Gibhub</a>
            </li>
            <li className="navbar-li">
              {" "}
              <a href="mailto:kevinduhamelh@gmail.com">Contact</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
