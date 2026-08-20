function Sky() {
  return (
    <section
      id="inicio"
      className="sky-section"
    >

      <div className="pixel-sun" />

      <div className="pixel-cloud cloud-one" />
      <div className="pixel-cloud cloud-two" />
      <div className="pixel-cloud cloud-three" />

      <div className="sky-content">

        <p className="eyebrow">
          MINECRAFT WORLD
        </p>

        <h2>
          Bem-vindo ao<br />
          mundo do Minecraft
        </h2>

        <p>
          Um mundo feito de blocos, possibilidades e aventuras.
          Explore seus biomas, descubra seus recursos e conheça
          tudo o que faz Minecraft ser tão especial.
        </p>

        <a
          href="#mundo"
          className="minecraft-button"
        >
          Explorar o mundo
        </a>

      </div>

    </section>
  )
}

export default Sky