import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSessionById } from '../data/sessions'
import { useLanguage } from '../i18n/LanguageContext'
import SlideViewer from '../components/SlideViewer'
import QuizViewer from '../components/QuizViewer'
import MediaViewer from '../components/MediaViewer'
import LargeButton from '../components/LargeButton'
import { ArrowLeft, Play, SkipForward, SkipBack } from 'lucide-react'
import './SessionPage.css'

function SessionPage() {
  const { sessionId } = useParams<{ sessionId: string }>()
  const navigate = useNavigate()
  const { t, language } = useLanguage()
  const session = sessionId ? getSessionById(sessionId, language) : undefined

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  // Сбрасываем индекс слайда при изменении sessionId
  useEffect(() => {
    setCurrentSlideIndex(0)
    setShowQuiz(false)
    setExpandedImage(null)
  }, [sessionId])

  if (!session) {
    return (
      <div className="session-page error">
        <h2>{t.session.notFound}</h2>
        <LargeButton onClick={() => navigate('/')}>
          {t.session.backToHome}
        </LargeButton>
      </div>
    )
  }

  // Если есть слайды, сразу показываем первый слайд
  // Структуру показываем только если слайдов нет
  const hasSlides = session.slides && session.slides.length > 0
  
  // Убеждаемся, что индекс в допустимых пределах при изменении слайдов
  useEffect(() => {
    if (hasSlides && session.slides) {
      const maxIndex = session.slides.length - 1
      if (currentSlideIndex < 0 || currentSlideIndex > maxIndex) {
        setCurrentSlideIndex(0)
      }
    }
  }, [hasSlides, session.slides?.length, currentSlideIndex])
  
  // Вычисляем безопасный индекс для отображения
  const safeSlideIndex = hasSlides && session.slides 
    ? Math.max(0, Math.min(currentSlideIndex, session.slides.length - 1))
    : 0
  
  const currentSlide = hasSlides && session.slides ? session.slides[safeSlideIndex] : undefined
  const hasNextSlide = session.slides && safeSlideIndex < session.slides.length - 1
  const hasPrevSlide = safeSlideIndex > 0

  const handleNext = () => {
    if (hasNextSlide) {
      setCurrentSlideIndex(prev => prev + 1)
    } else if (session.quiz && !showQuiz) {
      setShowQuiz(true)
    }
  }

  const handlePrev = () => {
    if (showQuiz) {
      setShowQuiz(false)
    } else if (hasPrevSlide) {
      setCurrentSlideIndex(prev => prev - 1)
    }
  }

  return (
    <div className="session-page">
      <header className="session-header">
        <div className="header-top-buttons">
          <button 
            onClick={() => navigate('/')} 
            className="header-button btn-outline"
            title={t.common.back}
          >
            <ArrowLeft size={20} />
            <span className="header-button-text">{t.common.back}</span>
          </button>
          {session.quiz && !showQuiz && (
            <button 
              onClick={() => setShowQuiz(true)}
              className="header-button btn-secondary"
              title={t.session.test}
            >
              <span className="header-button-text">{t.session.test}</span>
            </button>
          )}
        </div>
        <div className="session-title-section">
          <div className="session-title">
            <h1>{session.title}</h1>
          </div>
          <div className="session-progress">
            {session.slides && (
              <span>
                {t.session.slideProgress} {safeSlideIndex + 1} {t.session.slideOf} {session.slides.length}
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="session-main">
        {showQuiz && session.quiz ? (
          <QuizViewer quiz={session.quiz} onComplete={() => setShowQuiz(false)} />
        ) : !hasSlides ? (
          <div className="session-structure">
            <h2>{t.session.structure}</h2>
            {session.structure.greeting && (
              <div className="structure-block">
                <h3>{t.session.greeting}</h3>
                <p>{session.structure.greeting}</p>
              </div>
            )}
            {session.structure.mainContent && (
              <div className="structure-block">
                <h3>{t.session.mainContent}</h3>
                <p>{session.structure.mainContent}</p>
              </div>
            )}
            {session.structure.interactive && (
              <div className="structure-block">
                <h3>{t.session.interactive}</h3>
                <p>{session.structure.interactive}</p>
              </div>
            )}
            {session.structure.closing && (
              <div className="structure-block">
                <h3>{t.session.closing}</h3>
                <p>{session.structure.closing}</p>
              </div>
            )}
          </div>
        ) : currentSlide ? (
          <div className="slide-container">
            <SlideViewer slide={currentSlide} />
            
            {currentSlide.media && currentSlide.media.length > 0 && (
              <div className="media-section">
                {currentSlide.media.map((item, idx) => (
                  <MediaViewer 
                    key={idx} 
                    media={item} 
                    onImageClick={item.type === 'image' ? () => setExpandedImage(item.url) : undefined}
                  />
                ))}
              </div>
            )}
            
            {expandedImage && (
              <div 
                className="image-modal" 
                onClick={() => setExpandedImage(null)}
              >
                <img 
                  src={expandedImage} 
                  alt={t.session.enlargedImage}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}

            {currentSlide.questions && currentSlide.questions.length > 0 && (
              <div className="questions-section">
                {currentSlide.questions.map(q => (
                  <div key={q.id} className="question-card">
                    <p className="question-text">{q.text}</p>
                    {q.type === 'yes-no' && (
                      <div className="yes-no-buttons">
                        <button 
                          className="btn-success question-btn"
                          onClick={() => alert(t.session.correct + ' ' + (q.explanation || ''))}
                        >
                          {t.session.yes}
                        </button>
                        <button 
                          className="btn-outline question-btn"
                          onClick={() => alert(t.session.thinkMore + ' ' + (q.explanation || ''))}
                        >
                          {t.session.no}
                        </button>
                      </div>
                    )}
                    {q.type === 'multiple-choice' && q.options && (
                      <div className="multiple-choice-buttons">
                        {q.options.map((option, idx) => {
                          const isCorrect = idx === q.correctAnswer
                          return (
                            <LargeButton
                              key={idx}
                              className={isCorrect ? 'btn-success' : 'btn-outline'}
                              onClick={() => alert(
                                isCorrect 
                                  ? t.session.correct + ' ' + (q.explanation || '')
                                  : t.session.incorrect + '. ' + (q.explanation || '')
                              )}
                            >
                              {option}
                            </LargeButton>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="session-structure">
            <h2>Структура занятия</h2>
            {session.structure.greeting && (
              <div className="structure-block">
                <h3>Приветствие</h3>
                <p>{session.structure.greeting}</p>
              </div>
            )}
            {session.structure.mainContent && (
              <div className="structure-block">
                <h3>Основная часть</h3>
                <p>{session.structure.mainContent}</p>
              </div>
            )}
            {session.structure.interactive && (
              <div className="structure-block">
                <h3>Интерактивная часть</h3>
                <p>{session.structure.interactive}</p>
              </div>
            )}
            {session.structure.closing && (
              <div className="structure-block">
                <h3>Завершение</h3>
                <p>{session.structure.closing}</p>
              </div>
            )}
            {hasSlides && (
              <LargeButton 
                onClick={() => {
                  setCurrentSlideIndex(0)
                }} 
                className="btn-primary"
              >
                <Play size={24} /> {t.session.startSession}
              </LargeButton>
            )}
          </div>
        )}
      </main>

      <footer className="session-footer">
        <LargeButton 
          onClick={handlePrev} 
          disabled={!hasPrevSlide && !showQuiz}
          className="btn-outline"
        >
          <SkipBack size={24} /> {t.common.previous}
        </LargeButton>
        <LargeButton 
          onClick={handleNext} 
          disabled={!hasNextSlide && !session.quiz}
          className="btn-primary"
        >
          {t.common.next} <SkipForward size={24} />
        </LargeButton>
      </footer>
    </div>
  )
}

export default SessionPage

