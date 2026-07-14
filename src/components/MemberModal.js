import { useState, useEffect } from 'react';
import '../styles/modal.css';

const FALLBACK_SVG = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="100%" height="100%" fill="#141414"/><text x="50%" y="50%" fill="#777" font-family="Arial,Helvetica,sans-serif" font-size="30" dominant-baseline="middle" text-anchor="middle">No Image</text></svg>';

const PROFILE_FIELDS = [
  { label: 'BIRTH DATE',  key: 'dob'  },
  { label: 'NATIONALITY', key: 'nat'  },
  { label: 'HEIGHT',      key: 'hgt'  },
  { label: 'MBTI TYPE',   key: 'type' },
];

function MemberModal({ member, onClose }) {
  const [barsReady, setBarsReady] = useState(false);

  // Delay stat bar animation so CSS transition fires after mount
  useEffect(() => {
    const timer = setTimeout(() => setBarsReady(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay active" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="modal-body">
          {/* Header: image + basic info */}
          <div className="modal-member-header">
            <div className="modal-member-image">
              <img
                src={member.img}
                alt={member.name}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK_SVG; }}
              />
            </div>

            <div className="modal-member-info">
              <div className="modal-card-num">#{member.id}</div>
              <h2>{member.name}</h2>
              <p className="modal-role">{member.role}</p>
              <p className="modal-bio">{member.bio}</p>
            </div>
          </div>

          {/* Profile data */}
          <div className="modal-details-section">
            <h3>PROFILE DATA</h3>
            <div className="details-grid">
              {PROFILE_FIELDS.map(({ label, key }) => (
                <div className="detail-item" key={key}>
                  <div className="detail-label">{label}</div>
                  <div className="detail-value">{member[key]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance stats */}
          <div className="modal-details-section">
            <h3>PERFORMANCE STATS</h3>
            <div className="modal-stats-grid">
              {Object.entries(member.stats).map(([stat, value]) => (
                <div className="stat-item" key={stat}>
                  <div className="stat-label">{stat}</div>
                  <div className="stat-bar">
                    <div
                      className="stat-fill"
                      style={{ width: barsReady ? `${value}%` : '0%' }}
                    />
                  </div>
                  <div className="stat-value">{value}/100</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberModal;
