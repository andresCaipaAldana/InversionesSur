#!/bin/bash
# ============================================================
# Cambio 002: Renombrar archivos de Media con nombres legibles
# Fecha: $(date +%Y-%m-%d)
# ============================================================

set -e

cd "$(dirname "$0")/../.."
echo "🔄 Renombrando archivos de Media..."
echo ""

# --- Casa Silvania (11 fotos + 1 video) ---
echo "1️⃣ Casa Silvania..."
cd src/Media/casa-silvania

# Renombrar fotos secuencialmente
i=1
for foto in PHOTO-*.jpg; do
  if [ -f "$foto" ]; then
    nuevo=$(printf "foto-%02d.jpg" $i)
    mv "$foto" "$nuevo"
    echo "   $foto → $nuevo"
    i=$((i+1))
  fi
done

# Renombrar video
for video in VIDEO-*.mp4; do
  if [ -f "$video" ]; then
    mv "$video" "video-principal.mp4"
    echo "   $video → video-principal.mp4"
  fi
done
cd ../../..
echo "   ✅ Casa Silvania renombrada"
echo ""

# --- Casa Fusagasugá (1 video) ---
echo "2️⃣ Casa Fusagasugá..."
cd src/Media/casa-fusagasuga
for video in VIDEO-*.mp4; do
  if [ -f "$video" ]; then
    mv "$video" "video-principal.mp4"
    echo "   $video → video-principal.mp4"
  fi
done
cd ../../..
echo "   ✅ Casa Fusagasugá renombrada"
echo ""

# --- Lote Silvania (2 videos) ---
echo "3️⃣ Lote Silvania..."
cd src/Media/lote-silvania
i=1
for video in VIDEO-*.mp4; do
  if [ -f "$video" ]; then
    nuevo=$(printf "video-%02d.mp4" $i)
    mv "$video" "$nuevo"
    echo "   $video → $nuevo"
    i=$((i+1))
  fi
done
cd ../../..
echo "   ✅ Lote Silvania renombrado"
echo ""

# --- Renombrar carpeta casa-fusagasuga a casa-fusagasuga (mantener) ---
echo "4️⃣ Verificando estructura final..."
echo ""
find src/Media -type f -not -name ".DS_Store" | sort

echo ""
echo "✅ Cambio 002 completado"
