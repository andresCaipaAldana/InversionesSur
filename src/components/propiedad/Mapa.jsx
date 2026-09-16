import './Mapa.css'

const LAT = 4.3439
const LNG = -74.3675
const DIRECCION = 'Cl. 21 #4-35, Fusagasugá, Cundinamarca'

function Mapa() {
  const src = `https://www.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`

  return (
    <section className="mapa">
      <div className="container">
        <h2>Ubicación Privilegiada</h2>
        <p className="mapa__intro">
          <strong>{DIRECCION}</strong>
          <br />
          Cerca a las principales vías de acceso: Calle 22, Transversal 12 y
          Carrera 3. Rodeado de importantes sitios de educación, salud,
          entretenimiento y comercio.
        </p>
        <div className="mapa__contenedor">
          <iframe
            title="Ubicación Torre Manolo"
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
