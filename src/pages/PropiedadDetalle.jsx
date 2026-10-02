import { useParams, Link } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import HeroDetalle from '../components/propiedad/HeroDetalle'
import Galeria from '../components/propiedad/Galeria'
import VideoPlayer from '../components/propiedad/VideoPlayer'
import Unidades from '../components/propiedad/Unidades'
import ZonasComunes from '../components/propiedad/ZonasComunes'
import Parqueaderos from '../components/propiedad/Parqueaderos'
import Entorno from '../components/propiedad/Entorno'
import Mapa from '../components/propiedad/Mapa'
import CtaFinalDetalle from '../components/propiedad/CtaFinalDetalle'
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

  const tieneFotos = propiedad.media?.fotos && propiedad.media.fotos.length > 0
  const tieneVideos = propiedad.media?.videos && propiedad.media.videos.length > 0

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
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <div className="container propiedad-detalle__breadcrumb">
        <Link to="/" className="propiedad-detalle__volver">
          <span className="propiedad-detalle__volver-icono">←</span>
          <span>Volver a propiedades</span>
        </Link>
      </div>
      <HeroDetalle propiedad={propiedad} />

      {tieneFotos && (
        <Galeria fotos={propiedad.media.fotos} titulo="Galería de fotos" />
      )}

      {tieneVideos && (
        <div id="video">
          <VideoPlayer
            videos={propiedad.media.videos}
            titulo={propiedad.media.videos.length > 1 ? 'Recorridos en video' : 'Recorrido en video'}
          />
        </div>
      )}

      {renderSecciones()}

      {propiedad.entorno && <Entorno data={propiedad} />}
      <Mapa propiedad={propiedad} />
      <CtaFinalDetalle propiedad={propiedad} />
      <Footer propiedad={propiedad} />
    </>
  )
}

export default PropiedadDetalle
