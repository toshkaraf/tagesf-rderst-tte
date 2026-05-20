import { useCallback } from 'react'
import type { NavigateFunction } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

/** React Router (BrowserRouter) history index, if available. */
function historyIndex(): number {
  const state = window.history.state
  if (state && typeof state === 'object' && 'idx' in state) {
    const idx = (state as { idx?: unknown }).idx
    if (typeof idx === 'number') return idx
  }
  return 0
}

export function canGoBackInApp(): boolean {
  return historyIndex() > 0
}

/** Go to the previous in-app route; use fallback only when there is no history entry. */
export function goBack(navigate: NavigateFunction, fallbackPath = '/'): void {
  if (canGoBackInApp()) {
    navigate(-1)
  } else {
    navigate(fallbackPath)
  }
}

export function useGoBack(fallbackPath = '/') {
  const navigate = useNavigate()
  return useCallback(() => goBack(navigate, fallbackPath), [navigate, fallbackPath])
}
