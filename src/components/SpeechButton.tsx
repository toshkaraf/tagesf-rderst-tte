import { useState, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import './SpeechButton.css'

interface SpeechButtonProps {
  text: string
  title?: string
}

export default function SpeechButton({ text, title }: SpeechButtonProps) {
  const { language } = useLanguage()
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isSupported, setIsSupported] = useState(true)

  useEffect(() => {
    // Prüfen, ob die Speech Synthesis API unterstützt wird
    if (!('speechSynthesis' in window)) {
      setIsSupported(false)
    }
  }, [])

  useEffect(() => {
    // Spracherkennung stoppen, wenn Sprache gewechselt wird
    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }, [language])

  const speak = () => {
    if (!isSupported) {
      alert('Ihr Browser unterstützt keine Sprachsynthese.')
      return
    }

    // Wenn bereits gesprochen wird, stoppen
    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    // Text aus HTML-Tags entfernen und trimmen
    const cleanText = text.replace(/<[^>]*>/g, '').trim()
    
    if (!cleanText) {
      return
    }

    // Utterance erstellen
    const utterance = new SpeechSynthesisUtterance(cleanText)
    
    // Sprache basierend auf aktueller UI-Sprache setzen
    utterance.lang = language === 'de' ? 'de-DE' : 'ru-RU'
    utterance.rate = 0.9 // Etwas langsamer für bessere Verständlichkeit
    utterance.pitch = 1.0
    utterance.volume = 1.0

    // Event-Handler
    utterance.onstart = () => {
      setIsSpeaking(true)
    }

    utterance.onend = () => {
      setIsSpeaking(false)
    }

    utterance.onerror = () => {
      setIsSpeaking(false)
      console.error('Fehler bei der Sprachausgabe')
    }

    // Sprachausgabe starten
    window.speechSynthesis.speak(utterance)
  }

  if (!isSupported) {
    return null
  }

  return (
    <button 
      className={`speech-button ${isSpeaking ? 'speaking' : ''}`}
      onClick={speak}
      title={title || (isSpeaking ? 'Stoppen' : 'Text vorlesen')}
      aria-label={isSpeaking ? 'Sprachausgabe stoppen' : 'Text vorlesen'}
    >
      {isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
      <span className="speech-button-text">
        {isSpeaking ? (language === 'de' ? 'Stop' : 'Стоп') : (language === 'de' ? 'Vorlesen' : 'Читать')}
      </span>
    </button>
  )
}

