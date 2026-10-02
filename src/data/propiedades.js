import { apartamentos, zonasComunes, PRECIO_M2, PRECIO_PARQUEADERO, TORRE } from './torre-manolo'

export const propiedades = [
  // ============================================================
  // TORRE MANOLO
  // ============================================================
  {
    id: 'torre-manolo',
    tipo: 'proyecto',
    tiposSecundarios: ['apartamento'],
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
    media: {
      fotos: [],
      videos: [],
      videoDestacado: null,
    },
    caracteristicas: [
      'Zonas comunes',
      'Parqueaderos bajo techo',
      'Ascensor con rompe eléctrica',
      'Lobby tipo hotel',
      'Acabados de calidad',
    ],
    entorno: {
      titulo: 'Todo lo que necesitas, cerca de ti',
      intro:
        'La Torre Manolo está rodeada de importantes sitios de educación, salud y comercio.',
      grupos: [
        {
          icono: '🎓',
          titulo: 'Educación',
          items: [
            'Institución Educativa Nuestra Señora de Belén (a pocos pasos)',
            'Universidad de Cundinamarca (770 m)',
            'Colegio Campestre Himalaya (a 2 cuadras)',
          ],
        },
        {
          icono: '🏥',
          titulo: 'Salud',
          items: [
            'Hospital San Rafael de Fusagasugá',
            'Clínicas y centros médicos cercanos',
            'Farmacias a pocas cuadras',
          ],
        },
        {
          icono: '🛒',
          titulo: 'Comercio',
          items: [
            'Supermercado El Rendidor (a 1 cuadra)',
            'Centro Comercial Avenida (1 km)',
            'Plaza de Mercado Municipal (1.5 km)',
          ],
        },
        {
          icono: '🌳',
          titulo: 'Entretenimiento',
          items: [
            'Parque Municipal Coburgo (a 5 min caminando)',
            'Concha Acústica de Fusagasugá (1 km)',
            'Estadio Municipal Fernando Mazuera (1.2 km)',
          ],
        },
      ],
    },
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

  // ============================================================
  // CASA SILVANIA
  // ============================================================
  {
    id: 'casa-silvania',
    tipo: 'casa',
    nombre: 'Casa Nueva en Silvania',
    subtitulo: 'Confort y naturaleza en conjunto cerrado',
    descripcion:
      'Casa nueva de 170 m² con 3 habitaciones, 4 baños y sala comedor tipo isla. Ubicada en el Condominio Camerún, frente al Club del Bosque.',
    ubicacion: {
      direccion: 'Condominio Camerún, frente al Club del Bosque',
      ciudad: 'Silvania, Cundinamarca',
      lat: 4.4033,
      lng: -74.3869,
    },
    precioBase: null,
    precioTexto: 'Precio: $XXX.000.000',
    moneda: 'COP',
    imagenPrincipal: null,
    media: {
      fotos: [
        'casa-silvania/foto-01.jpg',
        'casa-silvania/foto-02.jpg',
        'casa-silvania/foto-03.jpg',
        'casa-silvania/foto-04.jpg',
        'casa-silvania/foto-05.jpg',
        'casa-silvania/foto-06.jpg',
        'casa-silvania/foto-07.jpg',
        'casa-silvania/foto-08.jpg',
        'casa-silvania/foto-09.jpg',
        'casa-silvania/foto-10.jpg',
        'casa-silvania/foto-11.jpg',
      ],
      videos: ['casa-silvania/video-principal.mp4'],
      videoDestacado: 'casa-silvania/video-principal.mp4',
    },
    caracteristicas: [
      '170 m² construidos',
      '3 habitaciones',
      '4 baños',
      'Sala comedor tipo isla',
      'Conjunto cerrado',
      'Frente al Club del Bosque',
      'A 7 minutos del pueblo (vía pavimentada)',
      'Administración: $180.000/mes',
    ],
    entorno: {
      titulo: 'Vive rodeado de naturaleza',
      intro:
        'El Condominio Camerún está ubicado en un entorno natural privilegiado, a minutos del pueblo de Silvania.',
      grupos: [
        {
          icono: '🌳',
          titulo: 'Naturaleza',
          items: [
            'Frente al Club del Bosque',
            'Zonas verdes del condominio',
            'Clima templado de Silvania',
          ],
        },
        {
          icono: '🏘️',
          titulo: 'Conjunto Cerrado',
          items: [
            'Vigilancia 24/7',
            'Vías internas pavimentadas',
            'Administración: $180.000/mes',
          ],
        },
        {
          icono: '🚗',
          titulo: 'Accesos',
          items: [
            'A 7 minutos del pueblo (vía pavimentada)',
            'A 40 min de Fusagasugá',
            'A 1h 30min de Bogotá',
          ],
        },
        {
          icono: '🛒',
          titulo: 'Servicios cercanos',
          items: [
            'Supermercados en Silvania',
            'Restaurantes campestres',
            'Clínica y farmacias en el pueblo',
          ],
        },
      ],
    },
    estado: 'disponible',
    destacada: true,
  },

  // ============================================================
  // LOTE SILVANIA
  // ============================================================
  {
    id: 'lote-silvania',
    tipo: 'lote',
    nombre: 'Lote Esquinero en Silvania',
    subtitulo: 'Con permiso de construcción',
    descripcion:
      'Lote esquinero de 1.700 m² con permiso de construcción en el Condominio Camerún, a 7 minutos del pueblo.',
    ubicacion: {
      direccion: 'Condominio Camerún',
      ciudad: 'Silvania, Cundinamarca',
      lat: 4.4033,
      lng: -74.3869,
    },
    precioBase: 650000000,
    precioTexto: '$650.000.000',
    moneda: 'COP',
    imagenPrincipal: null,
    media: {
      fotos: [],
      videos: ['lote-silvania/video-01.mp4', 'lote-silvania/video-02.mp4'],
      videoDestacado: 'lote-silvania/video-01.mp4',
    },
    caracteristicas: [
      '1.700 m²',
      'Esquinero',
      'Con permiso de construcción',
      'En conjunto cerrado',
      'Vía pavimentada',
    ],
    entorno: {
      titulo: 'El entorno perfecto para construir',
      intro:
        'Lote en el Condominio Camerún, a minutos del pueblo de Silvania, con todos los servicios.',
      grupos: [
        {
          icono: '🌳',
          titulo: 'Naturaleza',
          items: [
            'Zonas verdes del condominio',
            'Clima templado todo el año',
            'Vistas panorámicas',
          ],
        },
        {
          icono: '🏘️',
          titulo: 'Conjunto Cerrado',
          items: [
            'Vigilancia 24/7',
            'Vías internas pavimentadas',
            'Administración mensual',
          ],
        },
        {
          icono: '🔧',
          titulo: 'Servicios',
          items: [
            'Agua, luz y gas disponibles',
            'Permiso de construcción aprobado',
            'Vía pavimentada al pueblo',
          ],
        },
        {
          icono: '🚗',
          titulo: 'Accesos',
          items: [
            'A 7 minutos del pueblo',
            'A 40 min de Fusagasugá',
            'A 1h 30min de Bogotá',
          ],
        },
      ],
    },
    estado: 'disponible',
    destacada: true,
  },

  // ============================================================
  // CASA FUSAGASUGÁ
  // ============================================================
  {
    id: 'casa-fusagasuga',
    tipo: 'casa',
    nombre: 'Casa en Conjunto San Felipe',
    subtitulo: 'Frente a la piscina y zona social',
    descripcion:
      'Casa nueva de 130 m² con 4 habitaciones, 4 baños, sala comedor, cocina y zona de lavandería. Ubicada frente a la piscina y el salón social.',
    ubicacion: {
      direccion: 'Conjunto San Felipe',
      ciudad: 'Fusagasugá, Cundinamarca',
      lat: 4.3439,
      lng: -74.3675,
    },
    precioBase: 550000000,
    precioTexto: '$550.000.000',
    moneda: 'COP',
    imagenPrincipal: null,
    media: {
      fotos: [],
      videos: ['casa-fusagasuga/video-principal.mp4'],
      videoDestacado: 'casa-fusagasuga/video-principal.mp4',
    },
    caracteristicas: [
      '130 m² construidos',
      '4 habitaciones',
      '4 baños',
      'Sala comedor, cocina, zona de lavandería',
      'Piscina y salón social en el conjunto',
      'Frente a la piscina',
    ],
    entorno: {
      titulo: 'Todo lo que necesitas, cerca de ti',
      intro:
        'El Conjunto San Felipe está en Fusagasugá, con acceso a todos los servicios de la ciudad.',
      grupos: [
        {
          icono: '🏊',
          titulo: 'Zonas Comunes',
          items: [
            'Piscina para adultos y niños',
            'Salón social',
            'Zonas verdes',
          ],
        },
        {
          icono: '🎓',
          titulo: 'Educación',
          items: [
            'Colegios cercanos',
            'Universidad de Cundinamarca',
            'Jardines infantiles',
          ],
        },
        {
          icono: '🛒',
          titulo: 'Comercio',
          items: [
            'Centros comerciales cercanos',
            'Supermercados',
            'Plaza de mercado',
          ],
        },
        {
          icono: '🏥',
          titulo: 'Salud',
          items: [
            'Hospital San Rafael',
            'Clínicas y farmacias',
            'Centros médicos',
          ],
        },
      ],
    },
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
  if (!valor) return 'Consultar precio'
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(valor)
}

export const getMediaUrl = (rutaRelativa) => {
  if (!rutaRelativa) return null
  const base = import.meta.env.BASE_URL || '/'
  return `${base}Media/${rutaRelativa}`
}
