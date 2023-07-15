import "./stylesroutes/Stack.css"
import {
  FaCss3,
  FaFlask,
  FaHtml5,
  FaJsSquare,
  FaPython,
  FaReact,
} from "react-icons/fa"
import { BiLogoMongodb, BiLogoGithub, BiLogoPostgresql } from "react-icons/bi"
export default function Stack() {
  return (
    <>
      <div className="contenedor-principal">
        <h1 className="titulo-del-stack">Stack</h1>
        <div className="stack-content">
          <div className="stack-body-left">
            <h2>Front-end</h2>
            <ul className="ul-stack-left">
              <li className="li-left">
                <FaHtml5 color="#DD4B25" size={"1.5em"} />
                HTML
              </li>
              <li className="li-left">
                <FaCss3 color="#2862E9" size={"1.5em"} />
                CSS
              </li>
              <li className="li-left">
                <FaJsSquare color="#F7DF1E" size={"1.5em"} />
                Javascript
              </li>
              <li className="li-left">
                <FaReact color="#66DBFC" size={"1.5em"} />
                React
              </li>
              <li className="li-left">
                <FaReact color="#66DBFC" size={"1.5em"} />
                React Router
              </li>
              <li className="li-left">
                <FaHtml5 color="" size={"1.5em"} />
                Vite
              </li>
              <li className="li-left">
                <FaHtml5 color="" size={"1.5em"} />
                React
              </li>
              <li className="li-left">
                <FaHtml5 color="" size={"1.5em"} />
                React
              </li>
            </ul>
          </div>
          <div className="stack-body-rigth">
            <h2>Back-end</h2>
            <ul className="ul-stack-rigth">
              <li className="li-rigth">
                <FaPython color="#3872A3" size={"1.5em"} />
                Python
              </li>
              <li className="li-rigth">
                <FaFlask color="#A9E108" size={"1.5em"} />
                Flask
              </li>
              <li className="li-rigth">
                <BiLogoMongodb color="#08EE69" size={"1.55em"} />
                MongoDb
              </li>
              <li className="li-rigth">
                <BiLogoPostgresql color="#396C94" size={"1.5em"} />
                Sql
              </li>
              <li className="li-rigth">
                <BiLogoGithub color="#420897" size={"1.5em"} />
                Git Hub
              </li>
              <li className="li-rigth">
                <FaHtml5 color="" size={"1.5em"} />
                React
              </li>
              <li className="li-rigth">
                <FaHtml5 color="" size={"1.5em"} />
                React
              </li>
              <li className="li-rigth">
                <FaHtml5 color="" size={"1.5em"} />
                React
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
