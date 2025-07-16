function hexToRgba(hex: string, alpha = 1) {
  const normalizedHex = hex.replace('#', '')
  const bigint = parseInt(normalizedHex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function generateGradient(hexColor: string) {
  const rgbaTransparent = hexToRgba(hexColor, 0.45)
  return `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, ${rgbaTransparent} 100%)`
}