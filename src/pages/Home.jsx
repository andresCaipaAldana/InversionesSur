import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import HeroGeneral from '../components/home/HeroGeneral'
import FiltrosPropiedades from '../components/home/FiltrosPropiedades'
import Stats from '../components/home/Stats'
import CtaFinal from '../components/home/CtaFinal'
import PropiedadCard from '../components/common/PropiedadCard'
import { getPropiedadesPorTipo } from '../data/propiedades'
import './Home.css'

function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filtroUrl = searchParams.get('filtro') || 'todas'
  const [filtro, setFiltro] = useState(filtroUrl)

  useEffect(() => {
    setFiltro(filtroUrl)
  }, [filtroUrl])

  const handleCambiarFiltro = (nuevoFiltro) => {
    setFiltro(nuevoFiltro)
    if (nuevoFiltro === 'todas') {
      setSearchParams({})
    } else {
      setSearchParams({ filtro: nuevoFiltro })
    }
  }

  const propiedadesFiltradas = getPropiedadesPorTipo(filtro)

  return (
    <>
      <Header filtroActivo={filtro} onCambiarFiltro={handleCambiarFiltro} />
      <HeroGeneral />
      <FiltrosPropiedades filtroActivo={filtro} onCambiarFiltro={handleCambiarFiltro} />
      <section className="home__grid-section" id="propiedades">
        <div className="container">
          {propiedadesFiltradas.length === 0 ? (
            <p className="home__vacio">
              No hay propiedades disponibles en esta categoría por el momento.
            </p>
          ) : (
            <div className="home__grid">
              {propiedadesFiltradas.map((propiedad) => (
                <PropiedadCard key={propiedad.id} propiedad={propiedad} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Stats />
      <CtaFinal />
      <Footer />
    </>
  )
}

export default Home
