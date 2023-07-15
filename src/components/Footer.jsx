import "./styles/Footer.css"
export default function Footer({ theme }) {
  return (
    <nav className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <ul>
            <li className="sin-dif">meet me at</li>
            <li className="footer-li">
              <a href="www.linkedin.com/in/kevin-duhamel-hayes">Linkedin</a>
            </li>
          </ul>
        </div>
        <div className="footer-rigth">
          <ul>
            <li className="footer-li">
              <a href="https://github.com/kevinduhamelhayes"></a>
            </li>
            <li className="footer-li">
              {" "}
              <a href="#">Contact</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
