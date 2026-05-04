import { useState } from 'react';
import './Faq.css';

const faqs = [
  {
    q: 'हा कोर्स कोणासाठी आहे? • Who is this for?',
    a: 'हा कोर्स क्रिएटर्स, विद्यार्थी आणि व्यावसायिकांसाठी आहे ज्यांना इन्स्टाग्रामवर प्रॅक्टिकल ग्रोथ हवी आहे.',
  },
  {
    q: 'कोर्स मराठीमध्ये असेल का? • Will it be in Marathi?',
    a: 'हो, हा कोर्स संपूर्णपणे सोप्या मराठी भाषेत आहे, जेणेकरून तुम्हाला सर्व काही नीट समजेल.',
  },
  {
    q: 'पेमेंट कसे करायचे? • How to pay?',
    a: 'तुम्ही UPI, कार्ड किंवा इतर कोणत्याही डिजिटल पद्धतीने पेमेंट करू शकता. Checkout पेजवर सर्व ऑप्शन्स उपलब्ध आहेत.',
  },
  {
    q: 'लाईफटाईम ॲक्सेस म्हणजे काय? • Lifetime Access?',
    a: 'एकदा एनरोल केल्यानंतर तुम्ही हा कोर्स कधीही आणि कितीही वेळा पाहू शकता. कोणतीही मर्यादा नाही.',
  },
  {
    q: 'किती धडे आहेत? • How many lessons?',
    a: 'कोर्समध्ये १० प्रॅक्टिकल धडे आहेत जे थेट मुद्द्याला धरून आहेत. कोणतीही फालतू बडबड नाही.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <p className="section-tag reveal">नेहमी विचारले जाणारे प्रश्न • FAQ</p>
        <h2 className="section-title reveal">
          तुमच्या शंका, आमची उत्तरे
        </h2>
        <p className="section-copy reveal" style={{ fontFamily: 'var(--font-marathi)', fontWeight: 500 }}>
          कोर्सबद्दल काही प्रश्न आहेत का? येथे काही सामान्य शंकांची उत्तरे दिली आहेत.
        </p>

        <div className="faq-list reveal">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${open === index ? 'active' : ''}`}
              key={faq.q}
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="faq-q">
                <span style={{ fontFamily: 'var(--font-marathi)', fontWeight: 600 }}>{faq.q}</span>
                <span className="faq-icon">{open === index ? '−' : '+'}</span>
              </div>
              <div className="faq-a">
                <p style={{ fontFamily: 'var(--font-marathi)' }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
