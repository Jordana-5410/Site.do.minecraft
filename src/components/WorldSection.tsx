import type { ReactNode } from 'react'
import BlockLayer from './BlockLayer'

interface WorldSectionProps {
  title: string
  subtitle?: string
  texture: string
  topTexture?: string
  ores?: string[]
  rows?: number
  columns?: number
  className?: string
  children: ReactNode
}

function WorldSection({
  title,
  subtitle,
  texture,
  topTexture,
  ores,
  rows = 4,
  columns = 16,
  children,
  className = '',
}: WorldSectionProps) {

  return (
    <section
      className={`world-section ${className}`}
    >

      {/* ================= FUNDO DE BLOCOS ================= */}

      <BlockLayer
        texture={texture}
        topTexture={topTexture}
        ores={ores}
        rows={rows}
        columns={columns}
      />

      {/* ================= CONTEÚDO ================= */}

      <div className="world-content">

        <h2>
          {title}
        </h2>

        {subtitle && (
          <p className="world-subtitle">
            {subtitle}
          </p>
        )}

        <div className="world-panel">
          {children}
        </div>

      </div>

    </section>
  )
}

export default WorldSection