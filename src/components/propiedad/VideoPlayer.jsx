import { useRef, useState, useEffect } from 'react'
import { getMediaUrl } from '../../data/propiedades'
import './VideoPlayer.css'

function VideoPlayer({ videos = [], titulo = 'Video' }) {
  const videoRef = useRef(null)
  const [indiceActual, setIndiceActual] = useState(0)

  if (!videos || videos.length === 0) return null

  const total = videos.length
  const videoActual = videos[indiceActual]

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {
        // Auto-play bloqueado por el navegador, no pasa nada
      })
    }
  }, [indiceActual])

  const tituloDinamico = total > 1 ? `${titulo} (${indiceActual + 1} de ${total})` : titulo

  return (
    <section className="video-player">
      <div className="container">
        <h2>{tituloDinamico}</h2>
        <div className="video-player__contenedor">
          <video
            ref={videoRef}
            src={getMediaUrl(videoActual)}
            controls
            preload="metadata"
            playsInline
            className="video-player__video"
          />
        </div>

        {total > 1 && (
          <div className="video-player__selector">
            {videos.map((video, idx) => (
              <button
                key={idx}
                className={`video-player__boton ${
                  idx === indiceActual ? 'video-player__boton--activo' : ''
                }`}
                onClick={() => setIndiceActual(idx)}
              >
                Video {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default VideoPlayer
