import { useState, useEffect, useRef } from 'react'
import './Stats.css'

const STATS = [
  { valor: 10, sufijo: '+', label: 'Años de experiencia' },
  { valor: 50, sufijo: '+', label: 'Propiedades vendidas' },
  { valor: 3, sufijo: '', label: 'Municipios' },
  { valor: 100, sufijo: '%', label: 'Clientes satisfechos' },
]

function Stats() {
  const [iniciado, setIniciado] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !iniciado) {
          setIniciado(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [iniciado])

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats__grid">
          {STATS.map((stat, idx) => (
            <Contador key={idx} stat={stat} iniciado={iniciado} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contador({ stat, iniciado }) {
  const [valor, setValor] = useState(0)

  useEffect(() => {
    if (!iniciado) return

    const duracion = 1500
    const pasos = 40
    const incremento = stat.valor / pasos
    let actual = 0
    let contador = 0

    const intervalo = setInterval(() => {
      contador++
      actual += incremento
      if (contador >= pasos) {
        setValor(stat.valor)
        clearInterval(intervalo)
      } else {
        setValor(Math.floor(actual))
      }
    }, duracion / pasos)

    return () => clearInterval(intervalo)
  }, [iniciado, stat.valor])

  return (
    <div className="stats__item">
      <div className="stats__valor">
        {valor}
        <span className="stats__sufijo">{stat.sufijo}</span>
      </div>
      <div className="stats__label">{stat.label}</div>
    </div>
  )
}

export default Stats
