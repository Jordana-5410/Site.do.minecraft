import { useEffect, useState } from 'react'
import './MojangIntro.css'

function MojangIntro() {
  const [gone, setGone] = useState(false)

  // Trava o scroll SÓ enquanto a intro está visível
  useEffect(() => {
    document.body.style.overflow = gone ? '' : 'hidden'
  }, [gone])

  useEffect(() => {
    const timer = setTimeout(() => setGone(true), 5200)
    return () => clearTimeout(timer)
  }, [])

  if (gone) return null

  return (
    <div className="mojang-intro">
      <div className="mojang-word">
        {'MOJANG'.split('').map((letter, i) => (
          <span
            key={i}
            className="mojang-letter"
            style={{ animationDelay: `${0.3 + i * 0.15}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="mojang-studios">STUDIOS</div>

      <button className="intro-skip" onClick={() => setGone(true)}>
        Pular ▶▶
      </button>
    </div>
  )
}

export default MojangIntro