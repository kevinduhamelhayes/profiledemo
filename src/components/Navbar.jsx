import "./styles/Navbar.css"
export default function Navbar({ theme }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <ul>
            <li className="navbar-li">home</li>
            <li className="navbar-li">stack</li>
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
