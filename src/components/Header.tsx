import { useEffect, useState } from 'react'

function Header() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }

  }, [])

  return (
    <header
      className={`minecraft-header ${
        scrolled ? 'scrolled' : ''
      }`}
    >

      <div className="header-content">

        <h1>
          🎮 Minecraft World
        </h1>

        <nav>

          <a href="#inicio">
            Início
          </a>

          <a href="#mundo">
            Mundo
          </a>

          <a href="#exploracao">
            Exploração
          </a>

          <a href="#mineracao">
            Mineração
          </a>

          <a href="#sobrevivencia">
            Sobrevivência
          </a>

          <a href="#quiz">
            Quiz
          </a>

        </nav>

      </div>

    </header>
  )
}

export default Header