import MemberCard  from './MemberCard';
import { MEMBERS } from '../data/members';
import '../styles/members.css';

function Members({ onCardClick }) {
  return (
    <section id="members" className="members-section">
      <h2 className="section-header">
        STARTING LINEUP <span className="red-slash">{'//'}</span>
      </h2>

      <div className="members-grid">
        {MEMBERS.map((member) => (
          <MemberCard key={member.id} member={member} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}

export default Members;
