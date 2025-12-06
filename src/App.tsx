import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import HomePage from './pages/HomePage'
import SessionPage from './pages/SessionPage'
import LanguageSwitcher from './components/LanguageSwitcher'
import './App.css'

function AppContent() {
  const location = useLocation()
  const isSessionPage = location.pathname.startsWith('/session/')
  
  return (
    <>
      {!isSessionPage && <LanguageSwitcher />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/session/:sessionId" element={<SessionPage />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  )
}

export default App

