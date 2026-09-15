export const PRECIO_M2 = 5500000
export const PRECIO_PARQUEADERO = 45000000
export const TORRE = 'Manolo'

export const apartamentos = [
  {
    id: 1,
    tipo: 'Apartamento Tipo E',
    areaPrivada: 81.0,
    areaConstruida: 90.0,
    habitaciones: 3,
    banos: 2,
    disponibles: 5,
    descripcion:
      '3 habitaciones con baño privado, 2 baños auxiliares, balcón, cocina abierta, sala-comedor y zona de ropas.',
    etiqueta: 'Más amplio',
  },
  {
    id: 2,
    tipo: 'Apartamento Tipo B',
    areaPrivada: 44.8,
    areaConstruida: 50.7,
    habitaciones: 2,
    banos: 2,
    disponibles: 5,
    descripcion:
      '2 habitaciones, 2 baños, sala-comedor, cocina y balcón. Ideal para parejas o familias pequeñas.',
    etiqueta: null,
  },
  {
    id: 3,
    tipo: 'Apartaestudio',
    areaPrivada: 35.0,
    areaConstruida: 39.8,
    habitaciones: 1,
    banos: 1,
    disponibles: 4,
    descripcion:
      'Apartaestudio con habitación principal, baño privado, cocina, zona de ropas, sala-comedor y balcón.',
    etiqueta: null,
  },
  {
    id: 4,
    tipo: 'Apartaestudio con Terraza',
    areaPrivada: 35.1,
    areaConstruida: 53.0,
    habitaciones: 1,
    banos: 1,
    disponibles: 1,
    descripcion:
      'Apartaestudio con habitación principal, baño privado, cocina, zona de ropas y terraza privada. ¡Único en el proyecto!',
    etiqueta: '¡Único con terraza!',
  },
]

export const zonasComunes = [
  { icono: '🔥', nombre: 'Zona BBQ' },
  { icono: '💪', nombre: 'Gimnasio' },
  { icono: '🧒', nombre: 'Parque infantil' },
  { icono: '🌳', nombre: 'Zona verde' },
  { icono: '🪵', nombre: 'Olla de fuego' },
  { icono: '🛎️', nombre: 'Lobby tipo hotel' },
  { icono: '🛗', nombre: 'Ascensor con rompe eléctrica' },
  { icono: '🅿️', nombre: 'Parqueadero con ascensor vehicular' },
  { icono: '♿', nombre: 'Parqueaderos para discapacitados' },
]

export const formatearPrecio = (valor) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(valor)
}

export const calcularPrecio = (areaConstruida) => {
  return areaConstruida * PRECIO_M2
}
