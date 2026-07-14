import '../styles/hero.css';

function Hero({ onEnterPaddock }) {
  return (
    <header id="home" className="hero-section">
      <div className="hero-content">
        <h2 className="sub-title">THE ENGINE IS RUNNING</h2>
        <h1 className="main-title">
          READY TO <span className="neon-text">DRIVE?</span>
        </h1>
        <p className="hero-text">
          Welcome to the official database of the 5th generation racing powerhouse.
        </p>
        <button className="cta-btn" onClick={onEnterPaddock}>
          ENTER PADDOCK
        </button>
      </div>
    </header>
  );
}

export default Hero;
