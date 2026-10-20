import { Slide } from '../types/session'
import './SlideViewer.css'

interface SlideViewerProps {
  slide: Slide
  fontScale?: number
}

// Ссылки в тексте слайда: [подпись](https://...) или просто https://...
const LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<>"']+)/g

function renderWithLinks(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(LINK_PATTERN)) {
    const start = match.index ?? 0
    if (start > last) nodes.push(text.slice(last, start))
    const href = match[2] ?? match[3]
    nodes.push(
      <a key={start} href={href} target="_blank" rel="noopener noreferrer" className="slide-link">
        {match[1] ?? href}
      </a>
    )
    last = start + match[0].length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

function SlideViewer({ slide, fontScale = 1 }: SlideViewerProps) {
  const paragraphs = slide.content ? slide.content.split('\n').filter(p => p.trim()) : []
  const displayContent = paragraphs.length > 0 ? paragraphs : [slide.content || '']
  
  return (
    <div className="slide-viewer">
      <div className="slide-content" style={{ '--font-scale': fontScale } as React.CSSProperties}>
        <h2>{slide.title}</h2>
        {slide.content && (
          <div className="slide-text">
            {displayContent.map((paragraph, idx) => (
              <p key={idx}>{renderWithLinks(paragraph.trim())}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SlideViewer

