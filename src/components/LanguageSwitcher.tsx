import { useLanguage } from '../i18n/LanguageContext'
import { Languages } from 'lucide-react'
import './LanguageSwitcher.css'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'ru' : 'de')
  }

  return (
    <button 
      className="language-switcher"
      onClick={toggleLanguage}
      title={language === 'de' ? 'Auf Russisch wechseln' : 'Switch to German'}
      aria-label="Switch language"
    >
      <Languages size={20} />
      <span>{language === 'de' ? 'RU' : 'DE'}</span>
    </button>
  )
}



