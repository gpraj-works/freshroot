import { Paper, Image, Flex } from '@mantine/core'
import { useRef, type FC, useState, type MouseEvent } from 'react'

interface ProductPreviewProps {
  source: string
}

const ProductPreview: FC<ProductPreviewProps> = ({ source }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [transformOrigin, setTransformOrigin] = useState<string>('center center')
  const [isHovering, setIsHovering] = useState<boolean>(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setTransformOrigin(`${x}% ${y}%`)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setTransformOrigin('center center')
  }

  return (
    <Paper
      ref={containerRef}
      withBorder
      h={423}
      w={423}
      onMouseMove={(e) => {
        handleMouseMove(e)
        setIsHovering(true)
      }}
      onMouseLeave={handleMouseLeave}
      style={{ overflow: 'hidden', cursor: 'zoom-in' }}
    >
      <Flex align="center" justify="center" h="100%" w="100%">
        <Image
          src={source}
          w={320}
          style={{
            transition: 'transform 0.2s ease',
            transform: isHovering ? 'scale(1.6)' : 'scale(1)',
            transformOrigin,
          }}
        />
      </Flex>
    </Paper>
  )
}

export default ProductPreview
