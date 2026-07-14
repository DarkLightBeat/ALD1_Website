import '../styles/layout.css';
import '../styles/music.css';
import { useState, useEffect } from 'react';
import { TRACKS } from '../data/music';

function Music() {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setPlayerOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const openPlayer = (track) => {
    setCurrent(track);
    setPlayerOpen(true);
  };

  const closePlayer = () => {
    setPlayerOpen(false);
    setCurrent(null);
  };

  const singles = TRACKS.filter((track) => track.type === 'single');
  const bsides = TRACKS.filter((track) => track.type === 'bside');

  const showSingles = filter === 'all' || filter === 'single';
  const showBsides = filter === 'all' || filter === 'bside';

  return (
    <section id="music" className="formula-section">
      <h2 className="section-header">
        MUSIC <span className="red-slash">{'//'}</span>
      </h2>

      <div className="music-controls">
        <div className="filter-tabs" role="tablist">
          <button className={`filter-tab ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-tab ${filter === 'single' ? 'active' : ''}`} onClick={() => setFilter('single')}>Singles</button>
          <button className={`filter-tab ${filter === 'bside' ? 'active' : ''}`} onClick={() => setFilter('bside')}>B-sides</button>
        </div>
      </div>

      {showSingles && (
        <div className="music-section-group">
          <h3 className="music-group-title">Singles</h3>
          <div className="music-video-list">
            {singles.map((track) => (
              <article key={track.id} className="music-video-card">
                <div className="cover-title">{track.title}</div>
                <div className="single-iframe">
                  <iframe
                    src={`https://www.youtube.com/embed/${track.youtubeId}?rel=0&modestbranding=1`}
                    title={track.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {showBsides && (
        <div className="music-section-group">
          <h3 className="music-group-title">B-sides</h3>
          <div className="music-grid">
            {bsides.map((track) => (
              <article key={track.id} className="music-card" role="article">
                <div className="music-cover">
                  <div className="cover-title">{track.title}</div>
                </div>
                <div className="music-meta">
                  <div className="music-type">B-side</div>
                  <button className="play-btn" onClick={() => openPlayer(track)} aria-haspopup="dialog">
                    Play
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {playerOpen && current && (
        <div className="music-modal" role="dialog" aria-modal="true" aria-label={`Playing ${current.title}`}>
          <div className="modal-backdrop" onClick={closePlayer} />
          <div className="modal-content">
            <button className="modal-close" onClick={closePlayer} aria-label="Close">×</button>
            <h3 className="modal-title">{current.title}</h3>
            <div className="modal-player">
              {current.type === 'single' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={current.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <iframe
                  className="audio-fallback"
                  src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                  title={`${current.title} (audio)`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Music;
