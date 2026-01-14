param(
  [Parameter(Mandatory = $false)]
  [string]$InputPath = "public\logo.png",

  [Parameter(Mandatory = $false)]
  [string]$OutputDir = "public"
)

$ErrorActionPreference = "Stop"

function Ensure-Dir([string]$Path) {
  if (-not (Test-Path -LiteralPath $Path)) {
    New-Item -ItemType Directory -Path $Path | Out-Null
  }
}

function Save-ResizedPngSquare {
  param(
    [Parameter(Mandatory = $true)][System.Drawing.Image]$Source,
    [Parameter(Mandatory = $true)][int]$Size,
    [Parameter(Mandatory = $true)][string]$OutFile,
    [Parameter(Mandatory = $false)][double]$PaddingRatio = 0.12
  )

  $canvas = New-Object System.Drawing.Bitmap($Size, $Size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($canvas)
  try {
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $pad = [math]::Round($Size * $PaddingRatio)
    $maxW = $Size - (2 * $pad)
    $maxH = $Size - (2 * $pad)

    $scale = [math]::Min($maxW / $Source.Width, $maxH / $Source.Height)
    $dstW = [math]::Max(1, [int][math]::Round($Source.Width * $scale))
    $dstH = [math]::Max(1, [int][math]::Round($Source.Height * $scale))
    $dstX = [int][math]::Round(($Size - $dstW) / 2)
    $dstY = [int][math]::Round(($Size - $dstH) / 2)

    $destRect = New-Object System.Drawing.Rectangle($dstX, $dstY, $dstW, $dstH)
    $g.DrawImage($Source, $destRect)

    $canvas.Save($OutFile, [System.Drawing.Imaging.ImageFormat]::Png)
  } finally {
    $g.Dispose()
    $canvas.Dispose()
  }
}

function Save-OgImage {
  param(
    [Parameter(Mandatory = $true)][System.Drawing.Image]$Source,
    [Parameter(Mandatory = $true)][string]$OutFile
  )

  $w = 1200
  $h = 630
  $bg = [System.Drawing.ColorTranslator]::FromHtml("#FFF7F0")

  $canvas = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($canvas)
  try {
    $g.Clear($bg)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    # Margen amplio para que no se recorte en previews
    $padX = 120
    $padY = 80
    $maxW = $w - (2 * $padX)
    $maxH = $h - (2 * $padY)

    $scale = [math]::Min($maxW / $Source.Width, $maxH / $Source.Height)
    $dstW = [math]::Max(1, [int][math]::Round($Source.Width * $scale))
    $dstH = [math]::Max(1, [int][math]::Round($Source.Height * $scale))
    $dstX = [int][math]::Round(($w - $dstW) / 2)
    $dstY = [int][math]::Round(($h - $dstH) / 2)

    $destRect = New-Object System.Drawing.Rectangle($dstX, $dstY, $dstW, $dstH)
    $g.DrawImage($Source, $destRect)

    $canvas.Save($OutFile, [System.Drawing.Imaging.ImageFormat]::Png)
  } finally {
    $g.Dispose()
    $canvas.Dispose()
  }
}

if (-not (Test-Path -LiteralPath $InputPath)) {
  Write-Host "❌ No se encontró el logo en: $InputPath" -ForegroundColor Red
  Write-Host "👉 Coloca tu logo en '$InputPath' (por ejemplo, arrastra tu PNG a la carpeta public/ y nómbralo logo.png) y vuelve a ejecutar." -ForegroundColor Yellow
  exit 1
}

Add-Type -AssemblyName System.Drawing

Ensure-Dir $OutputDir

$sizes = @(
  @{ Name = "favicon-16x16.png"; Size = 16 },
  @{ Name = "favicon-32x32.png"; Size = 32 },
  @{ Name = "apple-touch-icon.png"; Size = 180 },
  @{ Name = "android-chrome-192x192.png"; Size = 192 },
  @{ Name = "android-chrome-512x512.png"; Size = 512 }
)

$img = [System.Drawing.Image]::FromFile((Resolve-Path -LiteralPath $InputPath))
try {
  foreach ($s in $sizes) {
    $outFile = Join-Path $OutputDir $s.Name
    Save-ResizedPngSquare -Source $img -Size $s.Size -OutFile $outFile
    Write-Host "✅ Generado: $outFile"
  }

  $ogOut = Join-Path $OutputDir "og-image.png"
  Save-OgImage -Source $img -OutFile $ogOut
  Write-Host "✅ Generado: $ogOut"
} finally {
  $img.Dispose()
}

Write-Host "`n🎉 Listo. Ya puedes desplegar y (opcional) pedir reindexación en Google Search Console." -ForegroundColor Green


