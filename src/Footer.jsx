import "./Footer.css"
export default function Footer() {
  return (
    <nav className="footer">
      <div className="footer-content">
        <div className="footer-left">
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
        <div className="footer-rigth">
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
