import { useState, useEffect } from 'react'
import { QuizBlock } from '../types/session'
import { useLanguage } from '../i18n/LanguageContext'
import LargeButton from './LargeButton'
import './QuizViewer.css'

interface QuizViewerProps {
  quiz: QuizBlock
  onComplete: (score?: number, total?: number) => void
  isFinalQuiz?: boolean
}

function QuizViewer({ quiz, onComplete, isFinalQuiz = false }: QuizViewerProps) {
  const { t } = useLanguage()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = quiz.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1

  // Play quiz.mp3 when quiz starts
  useEffect(() => {
    const audio = new Audio('/media/sounds/quiz.mp3')
    audio.play().catch(() => {})
  }, [])

  const handleAnswer = (answer: number | string) => {
    if (answered) return
    
    setSelectedAnswer(answer)
    setAnswered(true)
    setShowExplanation(true)
    
    const isCorrect = answer === currentQuestion.correctAnswer
    
    // Play correct or incorrect sound
    const soundFile = isCorrect ? '/media/sounds/correct.mp3' : '/media/sounds/incorrect.mp3'
    const audio = new Audio(soundFile)
    audio.play().catch(() => {})
    
    if (isCorrect) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (isLastQuestion) {
      if (isFinalQuiz) {
        setShowResults(true)
        // Play victory sound
        const audio = new Audio('/media/sounds/victory.mp3')
        audio.play().catch(() => {})
      } else {
        onComplete(score, quiz.questions.length)
      }
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setAnswered(false)
    }
  }

  const handleFinish = () => {
    onComplete(score, quiz.questions.length)
  }

  // Show results screen for final quiz
  if (showResults) {
    const percentage = Math.round((score / quiz.questions.length) * 100)
    const getResultColor = () => {
      if (percentage >= 80) return 'var(--success-color)'
      if (percentage >= 60) return 'var(--warning-color)'
      return 'var(--error-color)'
    }
    
    const { language } = useLanguage()
    const getResultMessage = () => {
      if (language === 'de') {
        if (percentage >= 80) return '🎉 Ausgezeichnet! Sie haben den Stoff hervorragend verstanden!'
        if (percentage >= 60) return '👍 Gut! Aber es gibt noch Verbesserungspotenzial.'
        return '📚 Es lohnt sich, das Material noch einmal zu wiederholen.'
      } else {
        if (percentage >= 80) return '🎉 Отлично! Вы отлично усвоили материал!'
        if (percentage >= 60) return '👍 Хорошо! Но есть над чем поработать.'
        return '📚 Стоит повторить материал еще раз.'
      }
    }
    
    return (
      <div className="quiz-viewer">
        <div className="quiz-results">
          <h2>{t.quiz.results}</h2>
          <div className="results-circle" style={{ borderColor: getResultColor() }}>
            <div className="results-score" style={{ color: getResultColor() }}>
              {score}/{quiz.questions.length}
            </div>
            <div className="results-percentage">{percentage}%</div>
          </div>
          <div className="results-message">
            <p>{getResultMessage()}</p>
          </div>
          <LargeButton onClick={handleFinish} className="btn-primary">
            {t.common.back}
          </LargeButton>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-viewer">
      <div className="quiz-header">
        <h2>{quiz.title}</h2>
        <div className="quiz-progress">
          {t.quiz.question} {currentQuestionIndex + 1} {t.quiz.questionOf} {quiz.questions.length}
          {score > 0 && <span className="quiz-score"> | {t.session.correctAnswers}: {score}</span>}
        </div>
      </div>

      <div className="quiz-question">
        <h3>{currentQuestion.text}</h3>

        {currentQuestion.type === 'yes-no' && (
          <div className="quiz-answers yes-no">
            {(() => {
              const correctAnswer = currentQuestion.correctAnswer
              const yesIsCorrect = correctAnswer === 'yes'
              const noIsCorrect = correctAnswer === 'no'
              const yesSelected = selectedAnswer === 'yes'
              const noSelected = selectedAnswer === 'no'
              
              let yesClass = 'btn-outline'
              let noClass = 'btn-outline'
              
              if (answered) {
                // После ответа показываем правильный/неправильный
                yesClass = yesIsCorrect ? 'btn-success' : (yesSelected ? 'btn-error' : 'btn-outline')
                noClass = noIsCorrect ? 'btn-success' : (noSelected ? 'btn-error' : 'btn-outline')
              } else {
                // До ответа показываем выбранный вариант
                yesClass = yesSelected ? 'btn-primary' : 'btn-outline'
                noClass = noSelected ? 'btn-primary' : 'btn-outline'
              }
              
              return (
                <>
                  <LargeButton
                    className={yesClass}
                    onClick={() => handleAnswer('yes')}
                    disabled={answered}
                  >
                    {t.session.yes}
                  </LargeButton>
                  <LargeButton
                    className={noClass}
                    onClick={() => handleAnswer('no')}
                    disabled={answered}
                  >
                    {t.session.no}
                  </LargeButton>
                </>
              )
            })()}
          </div>
        )}

        {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
          <div className="quiz-answers multiple-choice">
            {currentQuestion.options.map((option, idx) => {
              const isCorrect = idx === currentQuestion.correctAnswer
              const isSelected = selectedAnswer === idx
              let buttonClass = 'btn-outline'
              
              if (answered) {
                if (isCorrect) buttonClass = 'btn-success'
                else if (isSelected && !isCorrect) buttonClass = 'btn-error'
              } else if (isSelected) {
                buttonClass = 'btn-primary'
              }

              return (
                <LargeButton
                  key={idx}
                  className={buttonClass}
                  onClick={() => handleAnswer(idx)}
                  disabled={answered}
                >
                  {option}
                </LargeButton>
              )
            })}
          </div>
        )}

        {showExplanation && currentQuestion.explanation && (
          <div className="quiz-explanation">
            <p>{currentQuestion.explanation}</p>
          </div>
        )}

        {answered && (
          <div className="quiz-actions">
            <LargeButton onClick={handleNext} className="btn-primary">
              {isLastQuestion ? t.quiz.finishQuiz : t.quiz.nextQuestion}
            </LargeButton>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuizViewer

