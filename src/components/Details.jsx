import './Details.css';

const features = [
  '१० प्रॅक्टिकल धडे • 10 Focused Lessons',
  'लाईफटाईम ॲक्सेस • Lifetime Access',
  'मोबाईलवर पाहता येईल • Mobile-friendly',
  'मराठीतून सोप्या भाषेत • Marathi Explanation',
  'कष्टाळू क्रिएटर्ससाठी • For Serious Creators',
  'एकवेळ पेमेंट • One-time Payment',
];

export default function Details() {
  return (
    <section className="details" id="pricing">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <p className="section-tag reveal">कोणासाठी आहे? • Who is this for?</p>
          <h2 className="section-title reveal">
            प्रोफेशनल क्रिएटर्ससाठी
          </h2>
          <p className="section-copy reveal">
            हा कोर्स अशा लोकांसाठी आहे ज्यांना फालतू बडबड नाही, तर प्रॅक्टिकल फ्रेमवर्क्स हवे आहेत. Stop guessing what the algorithm wants and start creating with a proven structure.
          </p>
        </div>

        <div className="details-card reveal">
          <div className="details-left">
            <h3 style={{ fontFamily: 'var(--font-marathi)', fontWeight: 600 }}>एकाच कोर्समध्ये सर्व काही समाविष्ट.</h3>
            <div className="details-features">
              {features.map((feature) => (
                <div className="feat" key={feature}>
                  <svg className="feat-mark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span style={{ fontFamily: 'var(--font-marathi)' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="details-price">
            <span className="price-label">किंमत • Price</span>
            <div className="price-row">
              <span className="old-price">₹899</span>
              <span className="new-price">₹599</span>
            </div>
            <p className="scarcity" style={{ fontFamily: 'var(--font-marathi)' }}>एकवेळ पेमेंट. पूर्ण ॲक्सेस. कधीही शिका.</p>
            <a
              href="https://superprofile.bio/course/VeeruVajrawadInstagram"
              className="cta-btn"
              target="_blank"
              rel="noreferrer"
            >
              Buy Now
            </a>
            <p className="details-note" style={{ fontFamily: 'var(--font-marathi)' }}>तुमच्या Instagram ग्रोथला सिस्टिमॅटिक बनवण्यासाठी हा कोर्स डिझाइन केला आहे.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
