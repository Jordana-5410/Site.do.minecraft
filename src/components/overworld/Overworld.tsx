import BlockLayer from '../BlockLayer'

function Overworld() {
  return (
    <main
      id="mundo"
      className="world-story"
    >

        {/* ================= CAMADAS DO OVERWORLD ================= */}

        <div className="overworld-layers">

          {/* SUPERFÍCIE */}

          <BlockLayer
            texture="/blocks/dirt.png"
            topTexture="/blocks/grass_block.png"
            rows={3}
            columns={16}
            className="surface-layer"
          />

          {/* STONE */}

          <BlockLayer
            texture="/blocks/stone.png"
            rows={7}
            columns={16}
            ores={[
              "/blocks/coal_ore.png",
              "/blocks/iron_ore.png",
              "/blocks/copper_ore.png",
              "/blocks/gold_ore.png",
            ]}
            className="stone-layer"
          />

          {/* DEEPSLATE */}

          <BlockLayer
            texture="/blocks/deepslate.png"
            rows={8}
            columns={16}
            ores={[
              "/blocks/deepslate_coal_ore.png",
              "/blocks/deepslate_iron_ore.png",
              "/blocks/deepslate_copper_ore.png",
              "/blocks/deepslate_gold_ore.png",
              "/blocks/deepslate_diamond_ore.png",
            ]}
            className="deep-layer"
          />

          {/* BEDROCK */}

          <BlockLayer
            texture="/blocks/bedrock.png"
            rows={2}
            columns={16}
            className="bedrock-layer"
          />

        </div>


        {/* ================= CONTEÚDO ÚNICO ================= */}

        <div className="overworld-content">


          {/* ================= MUNDO ================= */}

          <section className="world-content-section">

            <h2>
              🌱 Um mundo feito de blocos
            </h2>

            <p className="world-subtitle">
              Tudo começa no Overworld.
            </p>

            <p>
              Minecraft é um jogo sandbox em que praticamente tudo ao seu
              redor é formado por blocos. Terra, pedra, madeira, água,
              areia e inúmeros outros materiais formam um mundo que pode
              ser explorado e transformado pelo jogador.
            </p>

            <p>
              Existem diferentes biomas espalhados pelo Overworld,
              como florestas, desertos, montanhas, planícies, oceanos
              e muitos outros ambientes.
            </p>

          </section>


          {/* ================= EXPLORAÇÃO ================= */}

          <section
            id="exploracao"
            className="world-content-section"
          >

            <h2>
              🌎 Explore o Overworld
            </h2>

            <p className="world-subtitle">
              Cada lugar pode esconder algo diferente.
            </p>

            <p>
              O Overworld é a dimensão principal de Minecraft e possui
              uma enorme variedade de paisagens. Durante a exploração,
              você pode encontrar animais, vilas, estruturas, rios,
              montanhas e diferentes tipos de vegetação.
            </p>

            <p>
              A exploração também é importante para encontrar recursos
              necessários para construir ferramentas, equipamentos,
              construções e outros itens.
            </p>

            <div className="minecraft-facts">

              <div>
                <strong>
                  🌳 Biomas
                </strong>

                <span>
                  Florestas, desertos, montanhas e muito mais.
                </span>
              </div>

              <div>
                <strong>
                  🏠 Estruturas
                </strong>

                <span>
                  Vilas, templos, fortalezas e outras construções.
                </span>
              </div>

              <div>
                <strong>
                  🐑 Animais
                </strong>

                <span>
                  Ovelhas, vacas, porcos, galinhas e muitos outros.
                </span>
              </div>

            </div>

          </section>


          {/* ================= MINERAÇÃO ================= */}

          <section
            id="mineracao"
            className="world-content-section"
          >

            <h2>
              ⛏️ Hora de minerar
            </h2>

            <p className="world-subtitle">
              Abaixo da superfície, a pedra domina o mundo.
            </p>

            <p>
              A mineração é uma das atividades mais importantes de
              Minecraft. Ao quebrar blocos, você pode encontrar
              diferentes recursos que serão utilizados para criar
              ferramentas, armaduras, máquinas e diversos outros itens.
            </p>

            <p>
              Entre os minérios encontrados nessa região estão carvão,
              ferro e cobre. Cada recurso possui diferentes utilidades
              e pode ser importante em diferentes momentos do jogo.
            </p>

            <h3>
              ⚒️ Ferramentas
            </h3>

            <p>
              Para minerar blocos mais resistentes, é necessário utilizar
              ferramentas adequadas. Uma picareta pode ser criada com
              madeira, pedra, ferro, diamante ou outros materiais.
            </p>

          </section>


          {/* ================= PROFUNDEZAS ================= */}

          <section className="world-content-section">

            <h2>
              💎 As grandes profundezas
            </h2>

            <p className="world-subtitle">
              Quanto mais fundo, mais resistente fica o terreno.
            </p>

            <p>
              Nas regiões mais profundas do Overworld, a pedra comum
              dá lugar à deepslate. Esse bloco é mais resistente e possui
              uma aparência mais escura.
            </p>

            <p>
              Os minérios encontrados aqui também aparecem em sua
              versão deepslate. Entre eles estão ferro, ouro, cobre,
              carvão e até mesmo o extremamente valioso diamante.
            </p>

            <div className="highlight-text">
              💎 O diamante é um dos recursos mais valiosos encontrados
              nas profundezas do Overworld.
            </div>

          </section>


          {/* ================= SOBREVIVÊNCIA ================= */}

          <section
            id="sobrevivencia"
            className="world-content-section"
          >

            <h2>
              🛡️ Sobreviver é mais do que minerar
            </h2>

            <p className="world-subtitle">
              Recursos são apenas uma parte da aventura.
            </p>

            <p>
              Sobreviver em Minecraft envolve muito mais do que
              simplesmente quebrar blocos. É necessário encontrar
              comida, criar equipamentos, construir abrigos e aprender
              a lidar com os diferentes perigos do mundo.
            </p>

            <p>
              Durante a noite, mobs hostis podem aparecer. Zumbis,
              esqueletos, creepers e outros inimigos fazem parte dos
              desafios encontrados durante a sobrevivência.
            </p>

            <h3>
              🧰 Alguns itens importantes
            </h3>

            <ul className="minecraft-list">

              <li>
                🪵 Madeira para os primeiros recursos.
              </li>

              <li>
                ⛏️ Picareta para mineração.
              </li>

              <li>
                🔥 Fornalha para cozinhar e fundir materiais.
              </li>

              <li>
                🛏️ Cama para definir o ponto de renascimento.
              </li>

              <li>
                🛡️ Equipamentos para proteção.
              </li>

            </ul>

          </section>


        </div>

      </main>

    )
}

export default Overworld