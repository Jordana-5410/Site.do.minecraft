import { useEffect, useState } from 'react'
import './App.css'
import MojangIntro from './MojangIntro'
import Header from './components/Header'
import Sky from './components/Sky'
import Overworld from './components/overworld/Overworld'
import BedrockSection from './components/overworld/BedrockSection'

function App() {

  // ================= COORDENADAS =================

  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 64,
    z: 0,
  })

  // ================= MOUSE + SCROLL =================

  useEffect(() => {

    const handleMouseMove = (event: MouseEvent) => {

      // X acompanha a posição horizontal do mouse

      const x =
        Math.floor(
          (event.clientX / window.innerWidth - 0.5) * 200
        )

      // Z acompanha a posição vertical do mouse

      const z =
        Math.floor(
          (event.clientY / window.innerHeight - 0.5) * 200
        )

      // Y acompanha a descida pela página

      const scrollProgress =
        window.scrollY /
        Math.max(
          document.documentElement.scrollHeight -
            window.innerHeight,
          1
        )

      const y =
        Math.round(
          64 - scrollProgress * 128
        )

      setCoordinates({
        x,
        y,
        z,
      })
    }

    window.addEventListener(
      'mousemove',
      handleMouseMove
    )

    return () => {

      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )

    }

  }, [])


  return (
    <>

      <MojangIntro />

      <Header />

      {/* ================= COORDENADAS ================= */}

      <div className="coordinates-hud">

        <span>
          XYZ
        </span>

        <strong>
          {coordinates.x} / {coordinates.y} / {coordinates.z}
        </strong>

      </div>


      {/* ================= CÉU ================= */}

      <Sky />


      {/* ================= OVERWORLD ================= */}

      <Overworld />


      {/* ================= BEDROCK ================= */}

      <BedrockSection />
      

      {/* ================= VOID ================= */}

      <section className="void-section">
      </section>


      {/* ================= QUIZ ================= */}

      <section
        id="quiz"
        className="quiz-section"
      >

        <div className="quiz-container">

          <h2>
            🎯 Quiz de Minecraft
          </h2>

          <p className="quiz-intro">
            Teste seus conhecimentos sobre o jogo!
          </p>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="minecraft-footer">

        <p>
          © 2026 Minecraft World.
          Criado com ❤️ para fãs do jogo.
        </p>

        <p>
          Minecraft é marca registrada da Mojang Studios.
        </p>

      </footer>

    </>
  )
}

export default App