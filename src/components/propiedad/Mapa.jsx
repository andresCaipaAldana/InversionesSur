import './Mapa.css'

function Mapa({ propiedad }) {
  if (!propiedad?.ubicacion) return null

  const { direccion, ciudad, lat, lng } = propiedad.ubicacion

  if (!lat || !lng) return null

  const src = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`

  return (
    <section className="mapa">
      <div className="container">
        <h2>Ubicación</h2>
        <p className="mapa__intro">
          <strong>{direccion || ciudad}</strong>
          {ciudad && direccion && (
            <>
              <br />
              {ciudad}
            </>
          )}
        </p>
        <div className="mapa__contenedor">
          <iframe
            title={`Ubicación de ${propiedad.nombre}`}
            src={src}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Mapa
