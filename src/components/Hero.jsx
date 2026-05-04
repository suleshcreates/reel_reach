import heroPoster from '../assets/veeru.png';
import mobileHero from '../assets/mobile-hero.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Bokeh Effects for Mobile */}
      <div className="hero-bokeh mobile-only" aria-hidden="true">
        <div className="bokeh-orb bokeh-1"></div>
        <div className="bokeh-orb bokeh-2"></div>
        <div className="bokeh-orb bokeh-3"></div>
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-badge-wrap reveal">
            <span className="hero-badge">
              <span className="pulse-dot"></span>
              NEW: Course is Live
            </span>
          </div>

          <h1 className="hero-headline reveal">
            Instagram Course <br />
            <span className="center-word">आता</span> <br />
            मराठी मध्ये
          </h1>

          <p className="hero-sub reveal">
            तुमच्या इन्स्टाग्राम ग्रोथला सिस्टिमॅटिक बनवण्यासाठी लागणारे सर्व प्रॅक्टिकल
            फ्रेमवर्क्स आता एकाच ठिकाणी. Start your journey today.
          </p>

          {/* New Mobile Floating Card */}
          <div className="hero-mobile-visual mobile-only reveal">
            <div className="mobile-card-container">
              <img src={mobileHero} alt="Reel Reach Course Mobile" className="mobile-hero-img" />
              <div className="card-shine"></div>
            </div>
          </div>

          <div className="hero-visual reveal desktop-only">
            <div className="hero-poster-frame">
              <img src={heroPoster} alt="Reel Reach Course Poster" className="hero-poster-img" />
            </div>

            <div className="floating-metric metric-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              Viral Strategy
            </div>
            <div className="floating-metric metric-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20v-6M6 20V10M18 20V4" /></svg>
              1M+ Impressions
            </div>
            <div className="hero-blob"></div>
          </div>

          <div className="hero-actions reveal">
            <a
              href="https://superprofile.bio/course/VeeruVajrawadInstagram"
              className="cta-btn"
              target="_blank"
              rel="noreferrer"
            >
             Buy Now
            </a>
            <a href="#modules" className="cta-btn secondary">
              अभ्यासक्रम • Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
