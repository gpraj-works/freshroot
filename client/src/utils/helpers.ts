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

export function getDiscountPercentage(originalPrice: number, offerPrice: number) {
  if (originalPrice === 0) return 0
  const discount = ((originalPrice - offerPrice) / originalPrice) * 100
  return Math.round(discount).toFixed(0)
}

export function thousandSeparator(price: number, decimalPlaces: number = 2, locale: string = 'en-IN') {
  return price.toLocaleString(locale, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  })
}