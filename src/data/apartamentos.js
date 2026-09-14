export const PRECIO_M2 = 5500000
export const PRECIO_PARQUEADERO = 45000000
export const TORRE = 'Manolo'

export const apartamentos = [
  {
    id: 1,
    tipo: 'Apartamento 90.0 m²',
    area: 90.0,
    areaTerraza: 0,
    habitaciones: 3,
    banos: 2,
    disponibles: 5,
    descripcion:
      'Amplio apartamento con 3 habitaciones, 2 baños, sala-comedor, cocina integral y balcón.',
    etiqueta: null,
  },
  {
    id: 2,
    tipo: 'Apartamento 50.7 m²',
    area: 50.7,
    areaTerraza: 0,
    habitaciones: 2,
    banos: 2,
    disponibles: 4,
    descripcion:
      'Acogedor apartamento con 2 habitaciones, 2 baños, sala-comedor y cocina.',
    etiqueta: null,
  },
  {
    id: 3,
    tipo: 'Apartamento 50.7 m² con Terraza',
    area: 50.7,
    areaTerraza: 15,
    habitaciones: 2,
    banos: 2,
    disponibles: 1,
    descripcion:
      'Apartamento de 2 habitaciones con terraza privada de 15 m². ¡Único en el proyecto!',
    etiqueta: '¡Único con terraza!',
  },
  {
    id: 4,
    tipo: 'Apartamento 39.8 m²',
    area: 39.8,
    areaTerraza: 0,
    habitaciones: 1,
    banos: 1,
    disponibles: 3,
    descripcion:
      'Apartaestudio ideal para invertir o para primer hogar, con 1 habitación y 1 baño.',
    etiqueta: null,
  },
  {
    id: 5,
    tipo: 'Apartamento 39.8 m² con Terraza 15 m²',
    area: 39.8,
    areaTerraza: 15,
    habitaciones: 1,
    banos: 1,
    disponibles: 1,
    descripcion:
      'Apartaestudio con terraza privada de 15 m². Perfecto para disfrutar al aire libre.',
    etiqueta: '¡Con terraza!',
  },
  {
    id: 6,
    tipo: 'Apartamento 39.8 m² con Terraza 20 m²',
    area: 39.8,
    areaTerraza: 20,
    habitaciones: 1,
    banos: 1,
    disponibles: 1,
    descripcion:
      'Apartaestudio con la terraza más amplia del proyecto: 20 m² privados.',
    etiqueta: '¡Terraza más grande!',
  },
]

export const formatearPrecio = (valor) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(valor)
}

export const calcularPrecio = (area, areaTerraza = 0) => {
  return (area + areaTerraza) * PRECIO_M2
}

export const calcularAreaTotal = (area, areaTerraza = 0) => {
  return parseFloat((area + areaTerraza).toFixed(1))
}
