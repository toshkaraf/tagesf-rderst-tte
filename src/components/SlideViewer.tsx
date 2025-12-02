import { Slide } from '../types/session'
import './SlideViewer.css'

interface SlideViewerProps {
  slide: Slide
}

function SlideViewer({ slide }: SlideViewerProps) {
  const paragraphs = slide.content ? slide.content.split('\n').filter(p => p.trim()) : []
  const displayContent = paragraphs.length > 0 ? paragraphs : [slide.content || '']
  
  return (
    <div className="slide-viewer">
      <div className="slide-content">
        <h2>{slide.title}</h2>
        {slide.content && (
          <div className="slide-text">
            {displayContent.map((paragraph, idx) => (
              <p key={idx}>{paragraph.trim()}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SlideViewer

