import { apartamentos, zonasComunes, PRECIO_M2, PRECIO_PARQUEADERO, TORRE } from './torre-manolo'

export const propiedades = [
  {
    id: 'torre-manolo',
    tipo: 'proyecto', // 'proyecto' | 'finca' | 'lote' | 'casa' | 'apartamento'
    nombre: `Torre ${TORRE}`,
    subtitulo: 'Un espacio perfecto para invertir en tu bienestar',
    descripcion:
      'Proyecto de 8 pisos con 15 apartamentos de 39.8 m², 50.7 m² y 90.0 m². Incluye zonas comunes, parqueaderos bajo techo y acabados de alta calidad.',
    ubicacion: {
      direccion: 'Cl. 21 #4-35, Fusagasugá, Cundinamarca',
      ciudad: 'Fusagasugá',
      lat: 4.3439,
      lng: -74.3675,
    },
    precioBase: PRECIO_M2,
    precioTexto: 'Desde $5.500.000 / m²',
    moneda: 'COP',
    imagenPrincipal: null, // Cuando haya imagen real, poner la ruta
    galeria: [],
    caracteristicas: [
      'Zonas comunes',
      'Parqueaderos bajo techo',
      'Ascensor con rompe eléctrica',
      'Lobby tipo hotel',
      'Acabados de calidad',
    ],
    unidades: apartamentos,
    zonasComunes: zonasComunes,
    parqueaderos: {
      disponibles: 15,
      precio: PRECIO_PARQUEADERO,
      descripcion: 'Parqueaderos bajo techo en pisos 1 y 2',
    },
    brochure: null,
    estado: 'disponible',
    destacada: true,
  },

  // 🔽 Plantillas para futuras propiedades (descomentar y llenar cuando tengas la info)

  // {
  //   id: 'finca-la-esperanza',
  //   tipo: 'finca',
  //   nombre: 'Finca La Esperanza',
  //   subtitulo: '...',
  //   descripcion: '...',
  //   ubicacion: { direccion: '...', ciudad: '...', lat: 0, lng: 0 },
  //   precioBase: 0,
  //   precioTexto: '...',
  //   moneda: 'COP',
  //   imagenPrincipal: null,
  //   galeria: [],
  //   caracteristicas: [],
  //   estado: 'disponible',
  //   destacada: false,
  // },

  // {
  //   id: 'lote-campestre-1',
  //   tipo: 'lote',
  //   nombre: 'Lote Campestre',
  //   subtitulo: '...',
  //   descripcion: '...',
  //   ubicacion: { direccion: '...', ciudad: '...', lat: 0, lng: 0 },
  //   precioBase: 0,
  //   precioTexto: '...',
  //   moneda: 'COP',
  //   imagenPrincipal: null,
  //   galeria: [],
  //   caracteristicas: [],
  //   estado: 'disponible',
  //   destacada: false,
  // },
]

export const getPropiedadPorId = (id) => {
  return propiedades.find((p) => p.id === id)
}

export const getPropiedadesDestacadas = () => {
  return propiedades.filter((p) => p.destacada && p.estado !== 'vendido')
}

export const getPropiedadesPorTipo = (tipo) => {
  if (tipo === 'todas') return propiedades.filter((p) => p.estado !== 'vendido')
  return propiedades.filter((p) => p.tipo === tipo && p.estado !== 'vendido')
}

export const formatearPrecio = (valor) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(valor)
}
