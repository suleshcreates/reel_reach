import './StickyFooter.css';

export default function StickyFooter({ visible }) {
  return (
    <div className={`sticky-bar ${visible ? 'show' : ''}`}>
      <div className="sticky-prices">
        <span className="sticky-label">किंमत • Price</span>
        <div>
          <span className="sticky-old">₹899</span>
          <span className="sticky-new">₹599</span>
        </div>
      </div>
      <a
        href="https://superprofile.bio/course/VeeruVajrawadInstagram"
        className="sticky-cta"
        target="_blank"
        rel="noreferrer"
        style={{ fontFamily: 'var(--font-marathi)', fontWeight: 600 }}
      >
        आता खरेदी करा
      </a>
    </div>
  );
}
