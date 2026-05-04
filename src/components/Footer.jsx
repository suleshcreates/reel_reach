import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col-main">
          <p className="footer-brand">REEL REACH</p>
          <p className="footer-copy" style={{ fontFamily: 'var(--font-marathi)', fontWeight: 500 }}>
            वीरू वज्रवाड यांचा प्रॅक्टिकल Instagram कोर्स. A course for creators who want better clarity,
            stronger reels, and a more structured content system.
          </p>
        </div>

        <div className="footer-col-links">
          <span className="footer-title">लिंक्स • Navigation</span>
          <nav>
            <a href="#pricing">Details</a>
            <a href="#modules">Curriculum</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>

        <div className="footer-col-contact">
          <span className="footer-title">मदत • Support</span>
          <div className="footer-contact-info">
            <p style={{ fontFamily: 'var(--font-marathi)' }}>एनरोलमेंटमध्ये काही अडचण येत आहे का?</p>
            <a href="tel:+917720099002" className="footer-phone">
              +91 7720099002
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Veeru Vajrawad. सर्व हक्क राखीव • All rights reserved. | 
          <span className="dev-credit"> Designed & Developed by Sulesh Waghmare</span>
        </p>
      </div>
    </footer>
  );
}
