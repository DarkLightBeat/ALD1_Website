import AboutBox from './AboutBox';
import '../styles/about.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-header">
          ABOUT ALPHA DRIVE ONE <span className="red-slash">{'//'}</span>
        </h2>

        <div className="about-content">
          <AboutBox>
            <h3>GROUP MEANING</h3>
            <p>
              ALPHA DRIVE ONE means an official team with the goal and passion to
              definitely become the best, with driving force.
            </p>
          </AboutBox>

          <AboutBox>
            <h3>OFFICIAL GREETING</h3>
            <p className="greeting">
              "One Destiny, Drive to The Top! Hello, we are ALPHA DRIVE ONE!"
            </p>
          </AboutBox>

          <AboutBox>
            <h3>FANDOM NAME</h3>
            <p>
              <span className="fandom-name">ALLYZ</span>
              <span className="fandom-korean"> (앨리즈)</span>
            </p>
            <p className="small-text">
              ALLYZ symbolizes ALD1's unbreakable team spirit to always stay with the fans.
            </p>
          </AboutBox>
        </div>
      </div>
    </section>
  );
}

export default About;
