import { useState, useRef } from 'react';
import './Modules.css';

const modules = [
  {
    number: '01',
    title: 'Instagram Fundamentals: अल्गोरिदम आणि रिच • Algorithm & Reach',
    intro: 'इन्स्टाग्राम अल्गोरिदम नक्की कसा काम करतो आणि तुमची पोस्ट लोकांपर्यंत कशी पोहोचते, याची सविस्तर माहिती.',
    topics: [
      'अल्गोरिदम काम करण्याची खरी पद्धत',
      'Feed, Story, आणि Reels चे महत्त्व',
      'टार्गेट ऑडियन्स कसा ओळखावा'
    ],
  },
  {
    number: '02',
    title: 'Reels Workflow: सिस्टिमॅटिक काम • Systematic Workflow',
    intro: 'कमी वेळेत जास्त आणि दर्जेदार Reels बनवण्यासाठी एक प्रोफेशनल सिस्टिम.',
    topics: [
      'Reel प्लॅनिंगची सोपी स्टेप्स',
      'व्हिडीओ क्वालिटी सुधारण्यासाठी टिप्स',
      'आयडिया ते पोस्ट पर्यंतचा प्रवास'
    ],
  },
  {
    number: '03',
    title: 'आयफोन कॅमेरा सेटिंग्स (The Foundation)',
    intro: 'तुमच्या आयफोनच्या कॅमेरा सेटिंग्स कशा असाव्यात जेणेकरण प्रोफेशनल लूक मिळेल.',
    topics: [
      'Manual Settings: FPS (24, 30, 60) आणि Resolution (1080p vs 4K) चा योग्य वापर.',
      'Cinematic Mode: आयफोनच्या सिनेमॅटिक मोडचा प्रोफेशनल वापर कसा करायचा.',
      'Exposure & Focus Lock: व्हिडिओमध्ये उजेड आणि फोकस स्थिर कसा ठेवायचा.',
      'Lenses: वाईड, अल्ट्रा-वाईड आणि टेलिफोटो लेन्स कधी वापरायच्या.'
    ],
  },
  {
    number: '04',
    title: 'shooting तंत्र (Cinematography Skills)',
    intro: 'व्हिडीओ शूट करताना लागणारी सिनेमॅटोग्राफी स्किल्स आणि नियोजन.',
    topics: [
      'Lighting: नैसर्गिक उजेड आणि आर्टिफिशिअल लाईट्सचे नियोजन.',
      'Composition: Rule of Thirds आणि फ्रेमिंगचे नियम.',
      'Camera Movements: गिंबलशिवाय स्थिर (Stable) शॉट्स कसे घ्यायचे.',
      'Audio Magic: आयफोनमध्ये क्रिस्टल क्लियर आवाज कसा रेकॉर्ड करायचा.'
    ],
  },
  {
    number: '05',
    title: 'एडिटिंग मास्टरक्लास (Editing on the Go)',
    intro: 'मोबाईलवर प्रोफेशनल पद्धतीने व्हिडीओ एडिटिंग कसे करावे याची सविस्तर माहिती.',
    topics: [
      'Software Intro: VN Editor, CapCut किंवा LumaFusion चा परिचय.',
      'Cutting & Trimming: व्हिडिओमधील अनावश्यक भाग काढून अचूक जोडणी करणे.',
      'Transitions: दोन क्लिप्समध्ये स्मूथ ट्रान्झिशन्स कसे वापरायचे.',
      'Sound Design: बॅकग्राउंड म्युझिक आणि साऊंड इफेक्ट्स (SFX) चा वापर.'
    ],
  },
  {
    number: '06',
    title: 'कलर ग्रेडिंग आणि इफेक्ट्स (The Professional Look)',
    intro: 'तुमच्या व्हिडीओला प्रोफेशनल आणि सिनेमॅटिक लूक देण्यासाठी कलर ग्रेडिंग तंत्र.',
    topics: [
      'Color Correction: व्हिडिओचे रंग उजळवणे आणि सिनेमॅटिक लूक देणे.',
      'Text & Captions: व्हिडिओवर आकर्षक मराठी/इंग्रजी टेक्स्ट आणि सबटायटल्स टाकणे.',
      'Speed Ramp: स्लो मोशन आणि फास्ट मोशनचा क्रिएटिव्ह वापर.'
    ],
  },
  {
    number: '07',
    title: 'सोशल मीडिया स्ट्रॅटेजी (Bonus)',
    intro: 'तुमचा व्हिडीओ व्हायरल करण्यासाठी आणि योग्य प्रेक्षकांपर्यंत पोहोचवण्यासाठी स्ट्रॅटेजी.',
    topics: [
      'Export Settings: Instagram Reels आणि YouTube साठी योग्य सेटिंग्समध्ये व्हिडिओ सेव्ह करणे.',
      'Thumbnail & Hooks: व्हिडिओ व्हायरल होण्यासाठी सुरुवातीचे ३ सेकंद कसे असावेत.'
    ],
  },
];

export default function Modules() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <section className="modules" id="modules">
      <div className="container">
        <div className="modules-header">
          <p className="section-tag reveal">अभ्यासक्रम • Curriculum</p>
          <h2 className="section-title reveal">
            कोर्स मॉड्युल्स (Course Modules)
          </h2>
          <p className="section-copy reveal">
            एकूण ७ मॉड्यूल्समध्ये इन्स्टाग्रामची संपूर्ण प्रॅक्टिकल माहिती. From fundamentals to advanced cinematography.
          </p>
        </div>

        <div className="modules-slider-container">
          <div 
            className={`modules-grid ${isExpanded ? 'is-expanded' : ''}`}
            ref={scrollRef} 
            onScroll={handleScroll}
          >
            {modules.map((module, index) => (
              <article
                className="mod-card reveal"
                key={module.number}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="mod-card-content">
                  <div className="mod-badge-wrapper">
                    <span className="mod-badge">{module.number}</span>
                    <span className="mod-label-inline">MODULE • {module.number}</span>
                  </div>
                  <h3 className="mod-title">{module.title}</h3>
                  <p className="mod-intro">{module.intro}</p>
                  
                  {module.topics && module.topics.length > 0 && (
                    <>
                      <div className="mod-divider"></div>
                      <ul className="mod-topics">
                        {module.topics.map((topic) => (
                          <li key={topic}>
                            <svg className="mod-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>

          {!isExpanded && (
            <div className="view-more-container desktop-only">
              <button 
                className="view-more-btn"
                onClick={() => setIsExpanded(true)}
              >
                सर्व मॉड्यूल्स पहा • View All Modules
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
          )}
          <div className="slider-nav-hint mobile-only">
            <span>Swipe to Explore</span>
            <div className="scroll-indicator">
              <div 
                className="scroll-progress" 
                style={{ width: `${Math.max(10, scrollProgress)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
