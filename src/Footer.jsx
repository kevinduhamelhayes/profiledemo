import "./Footer.css"
export default function Footer() {
  return (
    <nav className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <ul>
            <li>meet me at</li>
            <li>
              <a href="www.linkedin.com/in/kevin-duhamel-hayes">Linkedin</a>
            </li>
          </ul>
        </div>
        <div className="footer-rigth">
          <ul>
            <li>
              <a href="https://github.com/kevinduhamelhayes"></a>
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
