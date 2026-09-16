import { useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import HeroGeneral from '../components/home/HeroGeneral'
import FiltrosPropiedades from '../components/home/FiltrosPropiedades'
import PropiedadCard from '../components/common/PropiedadCard'
import { getPropiedadesPorTipo } from '../data/propiedades'
import './Home.css'

function Home() {
  const [filtro, setFiltro] = useState('todas')
  const propiedadesFiltradas = getPropiedadesPorTipo(filtro)

  return (
    <>
      <Header />
      <HeroGeneral />
      <FiltrosPropiedades filtroActivo={filtro} onCambiarFiltro={setFiltro} />
      <section className="home__grid-section">
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
      <Footer />
    </>
  )
}

export default Home
