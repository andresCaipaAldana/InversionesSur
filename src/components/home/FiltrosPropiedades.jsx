import { useState } from 'react'
import './FiltrosPropiedades.css'

const TIPOS = [
  { valor: 'todas', label: 'Todas' },
  { valor: 'proyecto', label: 'Proyectos' },
  { valor: 'finca', label: 'Fincas' },
  { valor: 'lote', label: 'Lotes' },
  { valor: 'casa', label: 'Casas' },
  { valor: 'apartamento', label: 'Apartamentos' },
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
              {tipo.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FiltrosPropiedades
