import "./stylesroutes/Stack.css"
import {
  FaCss3,
  FaFlask,
  FaHtml5,
  FaJsSquare,
  FaLinux,
  FaPython,
  FaReact,
} from "react-icons/fa"
import {
  BiLogoMongodb,
  BiLogoGithub,
  BiLogoPostgresql,
  BiLogoDocker,
} from "react-icons/bi"
import { SiPowerbi } from "react-icons/si"
import { DiScrum } from "react-icons/di"
import { RiStarSFill, RiStarSLine } from "react-icons/ri"

export default function Stack() {
  return (
    <div className="contenedor-principal">
      <h1 className="titulo-del-stack">Stack</h1>
      <div className="stack-content">
        <div className="stack-body-left">
          <h2>Front-end</h2>
          <ul className="ul-stack-left">
            <li className="li-left">
              <FaHtml5 color="#DD4B25" size={"1.5em"} />
              <h3 className="titulos-stack">HTML</h3>
              <div className="contenedor-stars">
                <RiStarSFill color="#DD4B25" size={"1.5em"} />
                <RiStarSFill color="#DD4B25" size={"1.5em"} />
                <RiStarSFill color="#DD4B25" size={"1.5em"} />
                <RiStarSFill color="#DD4B25" size={"1.5em"} />
                <RiStarSLine color="#DD4B25" size={"1.5em"} />
              </div>
            </li>
            <li className="li-left">
              <FaCss3 color="#2862E9" size={"1.5em"} />
              <h3 className="titulos-stack">CSS</h3>
              <div className="contenedor-stars">
                <RiStarSFill color="#2862E9" size={"1.5em"} />
                <RiStarSFill color="#2862E9" size={"1.5em"} />
                <RiStarSFill color="#2862E9" size={"1.5em"} />
                <RiStarSFill color="#2862E9" size={"1.5em"} />
                <RiStarSLine color="#2862E9" size={"1.5em"} />
              </div>
            </li>
            <li className="li-left">
              <FaJsSquare color="#F7DF1E" size={"1.5em"} />
              <h3 className="titulos-stack">JavaScript</h3>
              <div className="contenedor-stars">
                {" "}
                <RiStarSFill color="#F7DF1E" size={"1.5em"} />
                <RiStarSFill color="#F7DF1E" size={"1.5em"} />
                <RiStarSFill color="#F7DF1E" size={"1.5em"} />
                <RiStarSFill color="#F7DF1E" size={"1.5em"} />
                <RiStarSLine color="#F7DF1E" size={"1.5em"} />
              </div>
            </li>
            <li className="li-left">
              <FaReact color="#66DBFC" size={"1.5em"} />
              <h3 className="titulos-stack">React</h3>
              <div className="contenedor-stars">
                <RiStarSFill color="#66DBFC" size={"1.5em"} />
                <RiStarSFill color="#66DBFC" size={"1.5em"} />
                <RiStarSFill color="#66DBFC" size={"1.5em"} />
                <RiStarSFill color="#66DBFC" size={"1.5em"} />
                <RiStarSFill color="#66DBFC" size={"1.5em"} />
              </div>
            </li>
            <li className="li-left">
              <FaReact color="#66DBFC" size={"1.5em"} />
              <h3 className="titulos-stack">React Router</h3>
              <div className="contenedor-stars">
                <RiStarSFill color="#66DBFC" size={"1.5em"} />
                <RiStarSFill color="#66DBFC" size={"1.5em"} />
                <RiStarSFill color="#66DBFC" size={"1.5em"} />
                <RiStarSFill color="#66DBFC" size={"1.5em"} />
                <RiStarSFill color="#66DBFC" size={"1.5em"} />
              </div>
            </li>
          </ul>
        </div>
        <div className="stack-body-right">
          <h2>Back-end</h2>
          <ul className="ul-stack-right">
            <li className="li-right">
              <FaPython color="#3872A3" size={"1.5em"} />
              <h3 className="titulos-stack">Python</h3>
              <div className="contenedor-stars">
                <RiStarSFill color="#3872A3" size={"1.5em"} />
                <RiStarSFill color="#3872A3" size={"1.5em"} />
                <RiStarSFill color="#3872A3" size={"1.5em"} />
                <RiStarSFill color="#3872A3" size={"1.5em"} />
                <RiStarSLine color="#3872A3" size={"1.5em"} />
              </div>
            </li>
            <li className="li-right">
              <FaFlask color="#A9E108" size={"1.5em"} />
              <h3 className="titulos-stack">Flask</h3>
              <div className="contenedor-stars">
                {" "}
                <RiStarSFill color="#A9E108" size={"1.5em"} />
                <RiStarSFill color="#A9E108" size={"1.5em"} />
                <RiStarSFill color="#A9E108" size={"1.5em"} />
                <RiStarSFill color="#A9E108" size={"1.5em"} />
                <RiStarSFill color="#A9E108" size={"1.5em"} />
              </div>
            </li>
            <li className="li-right">
              <BiLogoMongodb color="#08EE69" size={"1.55em"} />
              <h3 className="titulos-stack">MongoDB</h3>
              <div className="contenedor-stars">
                <RiStarSFill color="#08EE69" size={"1.5em"} />
                <RiStarSFill color="#08EE69" size={"1.5em"} />
                <RiStarSFill color="#08EE69" size={"1.5em"} />
                <RiStarSFill color="#08EE69" size={"1.5em"} />
                <RiStarSFill color="#08EE69" size={"1.5em"} />
              </div>
            </li>
            <li className="li-right">
              <BiLogoPostgresql color="#396C94" size={"1.5em"} />
              <h3 className="titulos-stack">SQL</h3>
              <div className="contenedor-stars">
                <RiStarSFill color="#396C94" size={"1.5em"} />
                <RiStarSFill color="#396C94" size={"1.5em"} />
                <RiStarSFill color="#396C94" size={"1.5em"} />
                <RiStarSFill color="#396C94" size={"1.5em"} />
                <RiStarSFill color="#396C94" size={"1.5em"} />
              </div>
            </li>
            <li className="li-right">
              <BiLogoGithub color="#420897" size={"1.5em"} />
              <h3 className="titulos-stack">Git Hub</h3>
              <div className="contenedor-stars">
                <RiStarSFill color="#420897" size={"1.5em"} />
                <RiStarSFill color="#420897" size={"1.5em"} />
                <RiStarSFill color="#420897" size={"1.5em"} />
                <RiStarSFill color="#420897" size={"1.5em"} />
                <RiStarSLine color="#420897" size={"1.5em"} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="soft-skills">
        <h2>utility skills</h2>
        <div className="grilla-soft-skills">
          <ul className="ul-soft-skills">
            <li className="li-soft-skills">
              <BiLogoDocker color="#2BBAEC" size={"1.5em"} />
              Docker
            </li>
            <li className="li-soft-skills">
              <FaLinux color="#FAEE08" size={"1.5em"} />
              unix/linux
            </li>
            <li className="li-soft-skills">
              <SiPowerbi color="#ECBF30" size={"1.5em"} />
              PowerBI
            </li>
            <li className="li-soft-skills">
              <DiScrum color="#FF9308" size={"1.5em"} />
              Scrum
            </li>
            <li className="li-soft-skills">
              <BiLogoGithub color="#420897" size={"1.5em"} />
              GitHub
            </li>
            <li className="li-soft-skills">
              <BiLogoGithub color="#420897" size={"1.5em"} />
              GitHub
            </li>
            <li className="li-soft-skills">
              <BiLogoGithub color="#420897" size={"1.5em"} />
              GitHub
            </li>
            <li className="li-soft-skills">
              <BiLogoGithub color="#420897" size={"1.5em"} />
              GitHub
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
