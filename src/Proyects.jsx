import "./proyects.css"

export default function Proyect() {
  return (
    <div className="container">
      <div className="grid-2-2">
        <div className="container-fig-left">
          <figure>
            <img
              className="round-image"
              src="#"
              alt="esto deberia estar centrado"
            />
          </figure>
        </div>
        <div className="container-text-right">
          <h2>esto sera una tarjeta</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
      </div>
    </div>
  )
}
