import './FiltrosPropiedades.css'

const TIPOS = [
  { valor: 'todas', label: 'Todas', icono: '✨' },
  { valor: 'casa', label: 'Casas', icono: '🏡' },
  { valor: 'apartamento', label: 'Apartamentos', icono: '🏢' },
  { valor: 'lote', label: 'Lotes', icono: '🌳' },
  { valor: 'proyecto', label: 'Proyectos', icono: '🏗️' },
  { valor: 'finca', label: 'Fincas', icono: '🌾' },
]

function FiltrosPropiedades({ filtroActivo = 'todas', onCambiarFiltro }) {
  return (
    <section id="propiedades" className="filtros">
      <div className="container">
        <h2>Nuestras Propiedades</h2>
        <div className="filtros__lista">
          {TIPOS.map((tipo) => (
            <button
              key={tipo.valor}
              className={`filtros__boton ${
                filtroActivo === tipo.valor ? 'filtros__boton--activo' : ''
              }`}
              onClick={() => onCambiarFiltro && onCambiarFiltro(tipo.valor)}
            >
              <span className="filtros__icono">{tipo.icono}</span>
              <span>{tipo.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FiltrosPropiedades
