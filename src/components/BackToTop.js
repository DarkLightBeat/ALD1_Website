import '../styles/layout.css';

function BackToTop({ show }) {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`back-to-top${show ? ' show' : ''}`}
      onClick={handleClick}
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      ↑
    </button>
  );
}

export default BackToTop;
