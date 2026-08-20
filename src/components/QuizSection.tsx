import Quiz from '../Quiz'

function QuizSection() {
  return (
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

        <Quiz />

      </div>

    </section>
  )
}

export default QuizSection