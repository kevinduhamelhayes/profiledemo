import "./styles/body.css"

export default function Body() {
  return (
    <div className="container-body">
      <div className="container-body-fig-left">
        <figure>
          <img
            className="round-image"
            src="https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg"
            alt="mi imagen de presentacion"
          />
        </figure>
      </div>
      <div className="container-body-text-right">
        <h1>Hola soy Kevin</h1>
        <p>
          Hi there! I'm Ian, a passionate frontend developer and tech enthusiast
          from Argentina. This is my digital showroom, where I showcase some of
          my most interesting development projects. I'm excited to share them
          with you and I hope you enjoy your visit
        </p>
      </div>
    </div>
  )
}
