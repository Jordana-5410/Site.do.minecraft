interface BlockLayerProps {
  texture: string
  topTexture?: string
  ores?: string[]
  rows?: number
  columns?: number
  className?: string
}

function BlockLayer({
  texture,
  topTexture,
  ores = [],
  rows = 4,
  columns = 16,
  className = '',
}: BlockLayerProps) {
  const orePositions = [
    { row: 1, column: 2, ore: 0 },
    { row: 2, column: 7, ore: 1 },
    { row: 2, column: 13, ore: 2 },
    { row: 3, column: 4, ore: 3 },
    { row: 4, column: 10, ore: 0 },
    { row: 5, column: 6, ore: 1 },
    { row: 5, column: 14, ore: 2 },
    { row: 6, column: 3, ore: 3 },
    { row: 7, column: 11, ore: 4 },
  ]

  const blocks = Array.from(
    { length: rows * columns },
    (_, index) => {
      const row = Math.floor(index / columns)
      const column = index % columns

      const isTopRow = row === 0

      const orePosition = orePositions.find(
        (position) =>
          position.row === row &&
          position.column === column
      )

      let blockTexture = texture

      // A textura de topo aparece somente na primeira linha.
      if (isTopRow && topTexture) {
        blockTexture = topTexture
      }

      // O minério substitui o bloco daquela posição.
      if (orePosition && ores.length > 0) {
        blockTexture =
          ores[orePosition.ore % ores.length]
      }

      return {
        texture: blockTexture,
      }
    }
  )

  return (
    <div
      className={`block-layer ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {blocks.map((block, index) => (
        <div
          key={index}
          className="minecraft-block"
          style={{
            backgroundImage: `url(${block.texture})`,
          }}
        />
      ))}
    </div>
  )
}

export default BlockLayer