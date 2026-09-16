import { apartamentos, zonasComunes, PRECIO_M2, PRECIO_PARQUEADERO, TORRE } from './torre-manolo'

export const propiedades = [
  {
    id: 'torre-manolo',
    tipo: 'proyecto',
    tiposSecundarios: ['apartamento'], // Aparece también al filtrar por Apartamentos
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
    imagenPrincipal: null,
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
]

export const getPropiedadPorId = (id) => {
  return propiedades.find((p) => p.id === id)
}

export const getPropiedadesDestacadas = () => {
  return propiedades.filter((p) => p.destacada && p.estado !== 'vendido')
}

export const getPropiedadesPorTipo = (tipo) => {
  const activas = propiedades.filter((p) => p.estado !== 'vendido')
  if (tipo === 'todas') return activas
  return activas.filter(
    (p) => p.tipo === tipo || (p.tiposSecundarios && p.tiposSecundarios.includes(tipo))
  )
}

export const formatearPrecio = (valor) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(valor)
}
