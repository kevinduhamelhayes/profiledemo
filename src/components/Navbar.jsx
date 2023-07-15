import "./styles/Navbar.css"
import { Link } from "react-router-dom"
import Stack from "../routes/Stack"
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <ul>
            <li className="navbar-li">
              <links />
            </li>
            <li className="navbar-li">
              <Link to="./routes/Stack">Stack</Link>
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
              <a href="#">Contact</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
