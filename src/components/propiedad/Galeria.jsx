import { useState } from 'react'
import { getMediaUrl } from '../../data/propiedades'
import './Galeria.css'

function Galeria({ fotos = [], titulo = 'Galería' }) {
  const [indiceActual, setIndiceActual] = useState(0)

  if (!fotos || fotos.length === 0) return null

  const total = fotos.length
  const fotoActual = getMediaUrl(fotos[indiceActual])

  const siguiente = () => setIndiceActual((i) => (i + 1) % total)
  const anterior = () => setIndiceActual((i) => (i - 1 + total) % total)

  return (
    <section className="galeria">
      <div className="container">
        <h2>{titulo}</h2>

        <div className="galeria__principal">
          <img src={fotoActual} alt={`Foto ${indiceActual + 1}`} />

          {total > 1 && (
            <>
              <button
                className="galeria__nav galeria__nav--prev"
                onClick={anterior}
                aria-label="Foto anterior"
              >
                ‹
              </button>
              <button
                className="galeria__nav galeria__nav--next"
                onClick={siguiente}
                aria-label="Siguiente foto"
              >
                ›
              </button>

              <div className="galeria__contador">
                {indiceActual + 1} / {total}
              </div>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="galeria__miniaturas">
            {fotos.map((foto, idx) => (
              <button
                key={idx}
                className={`galeria__miniatura ${
                  idx === indiceActual ? 'galeria__miniatura--activa' : ''
                }`}
                onClick={() => setIndiceActual(idx)}
                aria-label={`Ver foto ${idx + 1}`}
              >
                <img src={getMediaUrl(foto)} alt={`Miniatura ${idx + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Galeria
