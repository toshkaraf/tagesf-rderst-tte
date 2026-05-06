import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import HomePage from './pages/HomePage'
import SessionPage from './pages/SessionPage'
import ConnectFourSetupPage from './pages/ConnectFourSetupPage'
import ConnectFourGamePage from './pages/ConnectFourGamePage'
import LanguageSwitcher from './components/LanguageSwitcher'
import './App.css'

function AppContent() {
  const location = useLocation()
  const isSessionPage = location.pathname.startsWith('/session/')
  const isConnectFourPage = location.pathname.startsWith('/connect-four')

  return (
    <>
      {!isSessionPage && !isConnectFourPage && <LanguageSwitcher />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/session/:sessionId" element={<SessionPage />} />
        <Route path="/connect-four" element={<ConnectFourSetupPage />} />
        <Route path="/connect-four/play" element={<ConnectFourGamePage />} />
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

