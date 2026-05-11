import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import ActivitySelectPage from './pages/ActivitySelectPage'
import HomePage from './pages/HomePage'
import SessionPage from './pages/SessionPage'
import ConnectFourSetupPage from './pages/ConnectFourSetupPage'
import ConnectFourGamePage from './pages/ConnectFourGamePage'
import LanguageSwitcher from './components/LanguageSwitcher'
import KiPage from './pages/KiPage'
import HistoricalQuizPage from './pages/HistoricalQuizPage'
import './App.css'

function AppContent() {
  const location = useLocation()
  const isSessionPage = location.pathname.startsWith('/session/')
  const isConnectFourPage = location.pathname.startsWith('/connect-four')
  const isKiPage = location.pathname.startsWith('/ki')
  const isHistoricalQuizPage = location.pathname.startsWith('/historical-quiz')

  return (
    <>
      {!isSessionPage && !isConnectFourPage && !isKiPage && !isHistoricalQuizPage && <LanguageSwitcher />}
      <Routes>
        <Route path="/" element={<ActivitySelectPage />} />
        <Route path="/topics" element={<HomePage />} />
        <Route path="/session/:sessionId" element={<SessionPage />} />
        <Route path="/connect-four" element={<ConnectFourSetupPage />} />
        <Route path="/connect-four/play" element={<ConnectFourGamePage />} />
        <Route path="/ki" element={<KiPage />} />
        <Route path="/historical-quiz" element={<HistoricalQuizPage />} />
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

