import { useParams, Link } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import HeroDetalle from '../components/propiedad/HeroDetalle'
import Unidades from '../components/propiedad/Unidades'
import ZonasComunes from '../components/propiedad/ZonasComunes'
import Parqueaderos from '../components/propiedad/Parqueaderos'
import Entorno from '../components/propiedad/Entorno'
import Mapa from '../components/propiedad/Mapa'
import { getPropiedadPorId } from '../data/propiedades'
import './PropiedadDetalle.css'

function PropiedadDetalle() {
  const { id } = useParams()
  const propiedad = getPropiedadPorId(id)

  if (!propiedad) {
    return (
      <>
        <Header />
        <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
          <h2>Propiedad no encontrada</h2>
          <p style={{ marginTop: '1rem' }}>
            <Link to="/" style={{ color: 'var(--color-secundario)' }}>
              ← Volver al inicio
            </Link>
          </p>
        </div>
        <Footer />
      </>
    )
  }

  // Renderiza secciones según el tipo de propiedad
  const renderSecciones = () => {
    switch (propiedad.tipo) {
      case 'proyecto':
        return (
          <>
            {propiedad.unidades && <Unidades data={propiedad} />}
            {propiedad.zonasComunes && <ZonasComunes data={propiedad} />}
            {propiedad.parqueaderos && <Parqueaderos data={propiedad} />}
          </>
        )
      case 'finca':
        // Aquí irían secciones específicas de finca
        return null
      case 'lote':
        // Aquí irían secciones específicas de lote
        return null
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <HeroDetalle propiedad={propiedad} />
      {renderSecciones()}
      <Entorno />
      <Mapa ubicacion={propiedad.ubicacion} />
      <Footer />
    </>
  )
}

export default PropiedadDetalle
