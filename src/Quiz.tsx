import { useState } from 'react'

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    question: "Quem criou o Minecraft?",
    options: [
      "Markus 'Notch' Persson",
      "Hideo Kojima",
      "Shigeru Miyamoto",
      "Gabe Newell"
    ],
    correctAnswer: 0
  },

  {
    question: "Qual mob é conhecido por explodir perto do jogador?",
    options: [
      "Zombie",
      "Skeleton",
      "Creeper",
      "Spider"
    ],
    correctAnswer: 2
  },

  {
    question: "Qual destes materiais é usado para criar uma mesa de crafting?",
    options: [
      "Pedra",
      "Tábuas de madeira",
      "Ferro",
      "Diamante"
    ],
    correctAnswer: 1
  },

  {
    question: "Qual é o material mais resistente entre estas opções?",
    options: [
      "Ferro",
      "Ouro",
      "Diamante",
      "Netherite"
    ],
    correctAnswer: 3
  },

  {
    question: "Qual dimensão possui grandes quantidades de lava e é conhecida por seus biomas perigosos?",
    options: [
      "Overworld",
      "Nether",
      "The End",
      "Deep Dark"
    ],
    correctAnswer: 1
  },

  {
    question: "O que acontece quando um jogador olha diretamente para os olhos de um Enderman?",
    options: [
      "Ele começa a atacar",
      "Ele desaparece",
      "Ele entrega um item",
      "Nada acontece"
    ],
    correctAnswer: 0
  },

  {
    question: "Qual minério é necessário para criar uma picareta de diamante?",
    options: [
      "Ferro",
      "Diamante",
      "Ouro",
      "Redstone"
    ],
    correctAnswer: 1
  },

  {
    question: "Qual destes mobs é um chefe do jogo?",
    options: [
      "Zombie",
      "Creeper",
      "Ender Dragon",
      "Spider"
    ],
    correctAnswer: 2
  },

  {
    question: "Para que serve uma cama no Minecraft?",
    options: [
      "Aumentar a vida",
      "Criar ferramentas",
      "Definir o ponto de renascimento",
      "Encontrar minérios"
    ],
    correctAnswer: 2
  },

  {
    question: "Qual bloco é encontrado nas regiões mais profundas do Overworld e é extremamente resistente?",
    options: [
      "Dirt",
      "Stone",
      "Sand",
      "Bedrock"
    ],
    correctAnswer: 3
  }
]

function Quiz() {
  const [currentQuestion, setCurrentQuestion] =
    useState(0)

  const [selectedAnswer, setSelectedAnswer] =
    useState<number | null>(null)

  const [showFeedback, setShowFeedback] =
    useState(false)

  const [score, setScore] = useState(0)

  const [quizCompleted, setQuizCompleted] =
    useState(false)

  const handleAnswerClick = (
    answerIndex: number,
  ) => {
    setSelectedAnswer(answerIndex)
    setShowFeedback(true)

    const isCorrect =
      answerIndex ===
      questions[currentQuestion].correctAnswer

    if (isCorrect) {
      setScore((previousScore) =>
        previousScore + 1,
      )
    }

    setTimeout(() => {
      if (
        currentQuestion + 1 <
        questions.length
      ) {
        setCurrentQuestion(
          (previousQuestion) =>
            previousQuestion + 1,
        )

        setSelectedAnswer(null)
        setShowFeedback(false)
      } else {
        setQuizCompleted(true)
      }
    }, 1500)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setQuizCompleted(false)
  }

  if (quizCompleted) {
    return (
      <div className="quiz-result">
        <h3>Quiz Concluído!</h3>

        <p className="final-score">
          Sua pontuação:{' '}
          <strong>
            {score}/{questions.length}
          </strong>
        </p>

        <p className="result-message">
          {score === questions.length
            ? '🎉 Perfeito! Você é um verdadeiro especialista em Minecraft!'
            : score >= 7
              ? '👍 Muito bem! Você conhece bastante o mundo de Minecraft!'
              : score >= 5
                ? '😊 Nada mal! Continue explorando e aprendendo!'
                : '📚 Continue explorando o Minecraft e tente novamente!'}
        </p>

        <button
          className="restart-button"
          onClick={restartQuiz}
        >
          🔄 Jogar Novamente
        </button>
      </div>
    )
  }

  const current =
    questions[currentQuestion]

  return (
    <div className="quiz-content">
      <div className="quiz-progress">
        Pergunta {currentQuestion + 1} de{' '}
        {questions.length}
      </div>

      <h3 className="quiz-question">
        {current.question}
      </h3>

      <div className="quiz-options">
        {current.options.map(
          (option, index) => {
            let buttonClass = 'quiz-option'

            if (showFeedback) {
              if (
                index ===
                current.correctAnswer
              ) {
                buttonClass += ' correct'
              } else if (
                index === selectedAnswer
              ) {
                buttonClass += ' incorrect'
              }
            }

            return (
              <button
                key={index}
                className={buttonClass}
                onClick={() =>
                  !showFeedback &&
                  handleAnswerClick(index)
                }
                disabled={showFeedback}
              >
                {option}
              </button>
            )
          },
        )}
      </div>

      <div className="quiz-score">
        Pontuação atual:{' '}
        {score}/{questions.length}
      </div>
    </div>
  )
}

export default Quiz