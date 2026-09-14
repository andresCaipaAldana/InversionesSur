export const PRECIO_M2 = 5500000

export const apartamentos = [
  {
    id: 1,
    tipo: 'Apartamento 90m²',
    area: 90,
    habitaciones: 3,
    banos: 2,
    descripcion: 'Amplio apartamento con 3 habitaciones, 2 baños, sala-comedor, cocina integral y balcón.',
    destacado: true,
  },
  {
    id: 2,
    tipo: 'Apartamento 60m²',
    area: 60,
    habitaciones: 2,
    banos: 2,
    descripcion: 'Acogedor apartamento con 2 habitaciones, 2 baños, sala-comedor, cocina y balcón.',
    destacado: false,
  },
  {
    id: 3,
    tipo: 'Apartamento 40m²',
    area: 40,
    habitaciones: 1,
    banos: 1,
    descripcion: 'Apartaestudio ideal para invertir o para primer hogar, con 1 habitación y 1 baño.',
    destacado: false,
  },
]

export const formatearPrecio = (valor) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(valor)
}

export const calcularPrecio = (area) => area * PRECIO_M2
