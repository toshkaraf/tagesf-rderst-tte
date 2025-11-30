import { useState } from 'react'
import { MediaItem } from '../types/session'
import './MediaViewer.css'

interface MediaViewerProps {
  media: MediaItem
}

// Helper function to check if URL is YouTube
function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/.test(url)
}

// Helper function to convert YouTube URL to embed format
function getYouTubeEmbedUrl(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  const videoId = (match && match[2].length === 11) ? match[2] : null
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url
}

function MediaViewer({ media }: MediaViewerProps) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  if (error) {
    return (
      <div className="media-viewer error">
        <p>Медиа файл не найден: {media.url}</p>
        {media.title && <p className="media-title">{media.title}</p>}
      </div>
    )
  }

  // Check if video URL is YouTube
  const isYouTube = media.type === 'video' && isYouTubeUrl(media.url)

  return (
    <div className="media-viewer">
      {media.type === 'image' && (
        <div className="media-image">
          {loading && <div className="media-loading">Загрузка изображения...</div>}
          <img
            src={media.url}
            alt={media.title || media.description || 'Изображение'}
            onError={() => setError(true)}
            onLoad={() => setLoading(false)}
            style={{ display: loading ? 'none' : 'block' }}
          />
          {media.title && <p className="media-title">{media.title}</p>}
          {media.description && <p className="media-description">{media.description}</p>}
        </div>
      )}
      
      {media.type === 'video' && (
        <div className="media-video">
          {isYouTube ? (
            <div className="media-youtube">
              <iframe
                src={getYouTubeEmbedUrl(media.url)}
                title={media.title || 'Видео'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-iframe"
              />
            </div>
          ) : (
            <video
              src={media.url}
              controls
              controlsList="nodownload"
              onError={() => setError(true)}
              className="video-player"
            >
              Ваш браузер не поддерживает видео.
            </video>
          )}
          {media.title && <p className="media-title">{media.title}</p>}
          {media.description && <p className="media-description">{media.description}</p>}
        </div>
      )}
      
      {media.type === 'audio' && (
        <div className="media-audio">
          {media.title && <p className="media-title">{media.title}</p>}
          <audio
            src={media.url}
            controls
            controlsList="nodownload"
            onError={() => setError(true)}
            className="audio-player"
          >
            Ваш браузер не поддерживает аудио.
          </audio>
          {media.description && <p className="media-description">{media.description}</p>}
        </div>
      )}
    </div>
  )
}

export default MediaViewer

