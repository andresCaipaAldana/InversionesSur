import './Entorno.css'

const atractivos = [
  {
    icono: '🎓',
    titulo: 'Zona Educativa',
    items: [
      'Institución Educativa Nuestra Señora de Belén (a pocos pasos)',
      'Universidad de Cundinamarca (770 m)',
      'Colegio Campestre Himalaya (a 2 cuadras)',
    ],
  },
  {
    icono: '🛒',
    titulo: 'Comercio y Mercado',
    items: [
      'Supermercado El Rendidor (a 1 cuadra)',
      'Centro Comercial Avenida (1 km)',
      'Plaza de Mercado Municipal (1.5 km)',
    ],
  },
  {
    icono: '🌳',
    titulo: 'Recreación',
    items: [
      'Parque Municipal Coburgo (a 5 min caminando)',
      'Concha Acústica de Fusagasugá (1 km)',
      'Estadio Municipal Fernando Mazuera (1.2 km)',
    ],
  },
  {
    icono: '🚌',
    titulo: 'Movilidad',
    items: [
      'Parada de bus Cootrans (a 3 cuadras)',
      'Terminal de Transportes (2 km)',
      'Vía directa al centro de Fusagasugá',
    ],
  },
]

function Entorno() {
  return (
    <section className="entorno">
      <div className="container">
        <h2>Todo lo que necesitas, cerca de ti</h2>
        <p className="entorno__intro">
          Vive en el epicentro de la comodidad en Fusagasugá. Tu nuevo hogar está
          rodeado de todo lo esencial para el día a día.
        </p>
        <div className="entorno__grid">
          {atractivos.map((grupo, idx) => (
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
