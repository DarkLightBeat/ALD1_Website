import '../styles/loader.css';

function Loader({ done }) {
  return (
    <div className={`page-loader${done ? ' fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">
          <span className="loader-alpha">ALPHA</span>
          <span className="loader-drive">DRIVE</span>
          <span className="loader-one">1</span>
        </div>
        <div className="loader-text">INITIALIZING SYSTEM...</div>
        <div className="loader-progress">
          <div className="progress-bar" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
