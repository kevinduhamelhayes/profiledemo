import "./Navbar.css"
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <ul>
            <li>
              {" "}
              <a href="#">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Stack</a>{" "}
            </li>
          </ul>
        </div>
        <div className="navbar-rigth">
          <ul>
            <li>
              <a href="https://github.com/kevinduhamelhayes">Gibhub</a>
            </li>
            <li>
              {" "}
              <a href="#">Contact</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
