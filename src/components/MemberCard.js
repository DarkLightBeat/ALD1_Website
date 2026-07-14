import { useVisible } from '../hooks/useVisible';
import '../styles/members.css';

const FALLBACK_SVG = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="#141414"/><text x="50%" y="50%" fill="#777" font-family="Arial,Helvetica,sans-serif" font-size="24" dominant-baseline="middle" text-anchor="middle">No Image</text></svg>';

function MemberCard({ member, onClick }) {
  const [ref, visible] = useVisible();

  return (
    <div
      ref={ref}
      className={`member-card${visible ? ' show' : ''}`}
      onClick={() => onClick(member.id)}
    >
      <div className="card-number">{member.id}</div>

      <div className="card-image">
        <img
          src={member.img}
          alt={member.name}
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK_SVG; }}
        />
      </div>

      <div className="card-info">
        <h3>{member.name}</h3>
        <p className="card-role">{member.role}</p>
        <p className="member-details">
          <span className="data-label">DOB:</span> {member.dob}{' '}
          <span className="separator">|</span>{' '}
          <span className="data-label">NAT:</span> {member.nat}
          <br />
          <span className="data-label">HGT:</span> {member.hgt}{' '}
          <span className="separator">|</span>{' '}
          <span className="data-label">TYPE:</span> {member.type}
        </p>
        <div className="card-stats">
          {Object.entries(member.stats).slice(0, 2).map(([key, val]) => (
            <span key={key}>{key}: {val}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
