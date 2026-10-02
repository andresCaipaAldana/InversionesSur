import './Entorno.css'

function Entorno({ data }) {
  // Si la propiedad no tiene entorno, no renderizar nada
  if (!data?.entorno) return null

  const { titulo, intro, grupos } = data.entorno

  if (!grupos || grupos.length === 0) return null

  return (
    <section className="entorno">
      <div className="container">
        <h2>{titulo}</h2>
        {intro && <p className="entorno__intro">{intro}</p>}
        <div className="entorno__grid">
          {grupos.map((grupo, idx) => (
            <div key={idx} className="entorno__card">
              <span className="entorno__icono">{grupo.icono}</span>
              <h3 className="entorno__titulo">{grupo.titulo}</h3>
              <ul className="entorno__lista">
                {grupo.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Entorno
