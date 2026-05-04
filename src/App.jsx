import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Details from './components/Details';
import Faq from './components/Faq';
import Community from './components/Community';
import StickyFooter from './components/StickyFooter';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    let lastScrollY = window.scrollY;
    const topbar = document.querySelector('.topbar');
    const scrollProgress = document.getElementById('scroll-progress');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update Topbar Visibility
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        topbar?.classList.add('topbar-hidden');
      } else {
        topbar?.classList.remove('topbar-hidden');
      }
      lastScrollY = currentScrollY;

      // Update Scroll Progress Bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (scrollProgress) {
        scrollProgress.style.width = scrolled + "%";
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const revealTargets = document.querySelectorAll('.reveal, .mod-card, .details-card');
    revealTargets.forEach((target) => revealObserver.observe(target));

    let heroObserver;
    const hero = document.getElementById('hero');
    if (hero) {
      heroObserver = new IntersectionObserver(
        ([entry]) => setShowFooter(!entry.isIntersecting),
        { threshold: 0.08 }
      );
      heroObserver.observe(hero);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
      if (heroObserver) {
        heroObserver.disconnect();
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-shell">
      <div id="scroll-progress" className="scroll-progress-bar"></div>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-mark">
            <span className="brand-title">VEERU VAJRAWAD</span>
            <span className="brand-subtitle">Instagram Course</span>
          </div>

          <nav className="topbar-nav">
            <a href="#pricing">Details</a>
            <a href="#modules">Curriculum</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a
            className="topbar-cta"
            href="https://superprofile.bio/course/VeeruVajrawadInstagram"
            target="_blank"
            rel="noreferrer"
          >
            Buy Now
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Details />
        <Modules />
        <Community />
        <Faq />
        <Footer />
      </main>

      <StickyFooter visible={showFooter} />
    </div>
  );
}
