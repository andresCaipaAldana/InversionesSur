#!/bin/bash
# ============================================================
# Cambio 012: Cards de propiedades estilo Marval
# - Foto grande con overlay
# - Badge de tipo de propiedad
# - Datos con íconos (área, hab, baños)
# - Precio destacado
# - CTA "Descúbrelo →"
# - Hover elegante
# Fecha: $(date +%Y-%m-%d)
# ============================================================

set -e

cd "$(dirname "$0")/../.."
echo "🎨 Rediseñando Cards..."
echo ""

# --- 1. PropiedadCard.jsx ---
echo "1️⃣ Actualizando PropiedadCard.jsx..."
cat > src/components/common/PropiedadCard.jsx << 'EOF'
import { Link } from 'react-router-dom'
import { getMediaUrl } from '../../data/propiedades'
import './PropiedadCard.css'

function PropiedadCard({ propiedad }) {
  const {
    id,
    nombre,
    subtitulo,
    tipo,
    ubicacion,
    imagenPrincipal,
    precioTexto,
    estado,
    media,
    caracteristicas,
  } = propiedad

  const tipoLabel = {
    proyecto: 'Proyecto',
    finca: 'Finca',
    lote: 'Lote',
    casa: 'Casa',
    apartamento: 'Apartamento',
  }

  // Determinar portada
  let portada = null
  if (imagenPrincipal) {
    portada = imagenPrincipal
  } else if (media?.fotos && media.fotos.length > 0) {
    portada = getMediaUrl(media.fotos[0])
  }

  // Extraer datos de características (o usar defaults)
  const datos = extraerDatos(caracteristicas, tipo)

  return (
    <Link to={`/propiedad/${id}`} className="prop-card">
      {/* Imagen */}
      <div className="prop-card__imagen">
        {portada ? (
          <img src={portada} alt={nombre} loading="lazy" />
        ) : (
          <div className="prop-card__placeholder">
            <span>{tipo === 'lote' ? '🌳' : tipo === 'casa' ? '🏡' : tipo === 'finca' ? '🌾' : '🏢'}</span>
          </div>
        )}
        <span className="prop-card__badge">{tipoLabel[tipo] || tipo}</span>
        {estado === 'proximamente' && (
          <span className="prop-card__estado">Próximamente</span>
        )}
      </div>

      {/* Contenido */}
      <div className="prop-card__contenido">
        <h3 className="prop-card__nombre">{nombre}</h3>
        <p className="prop-card__ubicacion">
          <span className="prop-card__icono">📍</span>
          {ubicacion?.ciudad || 'Sin ubicación'}
        </p>

        {/* Datos con íconos */}
        <div className="prop-card__datos">
          {datos.area && (
            <div className="prop-card__dato">
              <span className="prop-card__icono">📐</span>
              <span>{datos.area}</span>
            </div>
          )}
          {datos.habitaciones && (
            <div className="prop-card__dato">
              <span className="prop-card__icono">🛏</span>
              <span>{datos.habitaciones}</span>
            </div>
          )}
          {datos.banos && (
            <div className="prop-card__dato">
              <span className="prop-card__icono">🛁</span>
              <span>{datos.banos}</span>
            </div>
          )}
        </div>

        {/* Precio */}
        {precioTexto && (
          <div className="prop-card__precio-wrap">
            <span className="prop-card__precio">{precioTexto}</span>
          </div>
        )}

        {/* CTA */}
        <span className="prop-card__cta">
          Descúbrelo <span className="prop-card__cta-flecha">→</span>
        </span>
      </div>
    </Link>
  )
}

// Función auxiliar para extraer datos de las características
function extraerDatos(caracteristicas = [], tipo) {
  const datos = {
    area: null,
    habitaciones: null,
    banos: null,
  }

  if (!caracteristicas || caracteristicas.length === 0) return datos

  // Buscar área (ej: "170 m² construidos", "1.700 m²", "39.8 - 90 m²")
  const areaMatch = caracteristicas.find((c) => /m²/.test(c))
  if (areaMatch) {
    datos.area = areaMatch.replace(' construidos', '').replace(' construido', '')
  }

  // Buscar habitaciones (ej: "3 habitaciones", "4 habitaciones")
  const habMatch = caracteristicas.find((c) => /habitacion/i.test(c))
  if (habMatch) {
    datos.habitaciones = habMatch
  }

  // Buscar baños (ej: "4 baños", "2 baños")
  const banosMatch = caracteristicas.find((c) => /ba[ñn]o/i.test(c))
  if (banosMatch) {
    datos.banos = banosMatch
  }

  return datos
}

export default PropiedadCard
EOF
echo "   ✅ PropiedadCard.jsx actualizado"

# --- 2. PropiedadCard.css ---
echo "2️⃣ Actualizando PropiedadCard.css..."
cat > src/components/common/PropiedadCard.css << 'EOF'
.prop-card {
  display: flex;
  flex-direction: column;
  background: var(--color-blanco);
  border-radius: var(--radio-lg);
  overflow: hidden;
  box-shadow: var(--sombra);
  transition: all var(--transicion);
  border: 1px solid var(--color-borde);
  height: 100%;
}

.prop-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--sombra-fuerte);
  border-color: transparent;
}

/* ============================================
   IMAGEN
   ============================================ */
.prop-card__imagen {
  position: relative;
  aspect-ratio: 4 / 3;
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-primario-claro) 100%);
  overflow: hidden;
}

.prop-card__imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.prop-card:hover .prop-card__imagen img {
  transform: scale(1.08);
}

.prop-card__placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 4rem;
  opacity: 0.6;
  filter: grayscale(0.3);
}

.prop-card__badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--color-blanco);
  color: var(--color-primario);
  padding: 0.35rem 0.9rem;
  border-radius: var(--radio-full);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: var(--sombra-sm);
}

.prop-card__estado {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--color-acento);
  color: var(--color-blanco);
  padding: 0.35rem 0.9rem;
  border-radius: var(--radio-full);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: var(--sombra-sm);
}

/* ============================================
   CONTENIDO
   ============================================ */
.prop-card__contenido {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.75rem;
}

.prop-card__nombre {
  font-family: var(--fuente-titulos);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-primario);
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0;
}

.prop-card__ubicacion {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: var(--color-texto-suave);
  font-weight: 400;
  margin: 0;
}

.prop-card__icono {
  font-size: 1rem;
  line-height: 1;
}

/* ============================================
   DATOS CON ÍCONOS
   ============================================ */
.prop-card__datos {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.75rem 0;
  border-top: 1px solid var(--color-borde);
  border-bottom: 1px solid var(--color-borde);
  margin: 0.25rem 0;
}

.prop-card__dato {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  color: var(--color-texto);
  font-weight: 500;
}

.prop-card__dato .prop-card__icono {
  font-size: 0.95rem;
  opacity: 0.85;
}

/* ============================================
   PRECIO
   ============================================ */
.prop-card__precio-wrap {
  margin-top: auto;
  padding-top: 0.5rem;
}

.prop-card__precio {
  display: block;
  font-family: var(--fuente-titulos);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-primario);
  letter-spacing: -0.01em;
}

/* ============================================
   CTA
   ============================================ */
.prop-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-secundario);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  transition: gap var(--transicion), color var(--transicion);
  margin-top: 0.25rem;
}

.prop-card__cta-flecha {
  display: inline-block;
  transition: transform var(--transicion);
}

.prop-card:hover .prop-card__cta {
  gap: 0.7rem;
  color: var(--color-primario);
}

.prop-card:hover .prop-card__cta-flecha {
  transform: translateX(4px);
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 640px) {
  .prop-card__contenido {
    padding: 1.25rem;
    gap: 0.6rem;
  }

  .prop-card__nombre {
    font-size: 1.15rem;
  }

  .prop-card__precio {
    font-size: 1.05rem;
  }

  .prop-card__datos {
    gap: 0.75rem;
  }
}
EOF
echo "   ✅ PropiedadCard.css actualizado"

echo ""
echo "✅ Cambio 012 aplicado correctamente"
echo ""
echo "📋 Notas:"
echo "   - Card con imagen 4:3 grande"
echo "   - Badge del tipo (Proyecto, Casa, Lote, Finca)"
echo "   - Datos con íconos: 📐 área · 🛏 hab · 🛁 baños"
echo "   - Precio destacado"
echo "   - CTA 'Descúbrelo →' con animación"
echo "   - Hover: elevación + zoom en imagen + flecha animada"
