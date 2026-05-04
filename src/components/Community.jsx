import './Community.css';

export default function Community() {
  return (
    <section className="community" id="community">
      {/* Animated Background Elements */}
      <div className="comm-orb orb-1"></div>
      <div className="comm-orb orb-2"></div>

      <div className="container comm-inner">
        <div className="comm-visual-side reveal">
          <div className="message-wall">
            {/* Scattered Glass Messages */}
            <div className="glass-msg msg-1">
              <div className="msg-header">
                <span className="msg-author">Rajesh K.</span>
                <span className="msg-tag">Student</span>
              </div>
              <p className="msg-text">रील १ लाख व्ह्यूज क्रॉस झाले! सर तुमचे एडिटिंग हॅक्स अप्रतिम आहेत. 🔥</p>
            </div>

            <div className="glass-msg msg-2">
              <div className="msg-header">
                <span className="msg-author">Priya S.</span>
                <span className="msg-tag">Creator</span>
              </div>
              <p className="msg-text">आज पहिली स्पॉन्सरशिप मिळाली! थँक्स वीरु सर. 🙏</p>
            </div>

            <div className="glass-msg msg-3">
              <div className="msg-header">
                <span className="msg-author">Veeru Vajrawad</span>
                <span className="msg-tag admin">Academy</span>
              </div>
              <p className="msg-text">नवीन अल्गोरिदम अपडेट ग्रुपवर शेअर केला आहे, चेक करा! 🚀</p>
            </div>

            <div className="glass-msg msg-4">
              <div className="msg-header">
                <span className="msg-author">Amit M.</span>
                <span className="msg-tag">Student</span>
              </div>
              <p className="msg-text">सिनेमॅटिक शॉट्स कसे घ्यायचे हे आता नीट समजले. खुप सोपे आहे. ✨</p>
            </div>

            {/* Central Badge */}
            <div className="comm-badge-center">
              <div className="comm-icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="comm-badge-text">
                <p>Veeru Academy</p>
                <span>1,443 Members</span>
              </div>
            </div>
          </div>
        </div>

        <div className="comm-info-side reveal">
          <p className="comm-pre-title">COMMUNITY ACCESS</p>
          <h2 className="comm-main-title">
            Join the <span className="highlight">Creator Circle</span>
          </h2>
          <p className="comm-description">
            आमच्या WhatsApp चॅनेलवर सामील व्हा आणि मिळवा रोज नवीन रील टिप्स, अल्गोरिदम अपडेट्स आणि खूप काही.
          </p>
          
          <ul className="comm-benefits">
            <li>
              <div className="benefit-dot"></div>
              <span>Daily Editing Tutorials</span>
            </li>
            <li>
              <div className="benefit-dot"></div>
              <span>Direct Support & Q&A</span>
            </li>
            <li>
              <div className="benefit-dot"></div>
              <span>Exclusive Bonuses</span>
            </li>
          </ul>

          <a 
            href="https://whatsapp.com/channel/0029VaAGqCWCsU9R4IX1VZ3M" 
            className="comm-join-btn"
            target="_blank"
            rel="noreferrer"
          >
            <span>सामील व्हा • Join for Free</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
