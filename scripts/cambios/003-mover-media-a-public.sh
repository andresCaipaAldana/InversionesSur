#!/bin/bash
# ============================================================
# Cambio 003: Mover src/Media → public/Media
# Fecha: $(date +%Y-%m-%d)
# ============================================================

set -e

cd "$(dirname "$0")/../.."
echo "🔄 Moviendo Media a public/..."
echo ""

mkdir -p public
mv src/Media public/Media

echo "✅ Media movida a public/Media"
echo ""
echo "📁 Nueva estructura:"
find public/Media -type f -not -name ".DS_Store" | sort

echo ""
echo "⚠️  IMPORTANTE: Actualizar getMediaUrl en src/data/propiedades.js"
echo "   Cambiar: \${base}src/Media/\${rutaRelativa}"
echo "   Por:     \${base}Media/\${rutaRelativa}"
