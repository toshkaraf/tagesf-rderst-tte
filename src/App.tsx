import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import HomePage from './pages/HomePage'
import SessionPage from './pages/SessionPage'
import LanguageSwitcher from './components/LanguageSwitcher'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/session/:sessionId" element={<SessionPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App

