import '../styles/layout.css';

function Formula() {
  return (
    <section id="music" className="formula-section">
      <h2 className="section-header">
        FORMULA <span className="red-slash">{'//'}</span>
      </h2>

      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/aLBo0oJqBXI?si=SmVXFQpL-M75Y62D"
            title="Alpha Drive One — FORMULA MV"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default Formula;
