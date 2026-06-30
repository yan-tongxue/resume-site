import { useState, useEffect } from 'react';
import data from '../data/resumeData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = data.nav.map((item) =>
        document.getElementById(item.id)
      ).filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= 200) {
          setActive(data.nav[i].id);
          return;
        }
      }
      setActive('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="section-container navbar-inner">
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          {data.site.logo}
        </a>
        <div className="navbar-links">
          {data.nav.map((item) => (
            <button
              key={item.id}
              className={`nav-link${active === item.id ? ' active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => scrollTo('contact')}>
          联系我
        </button>
      </div>
    </nav>
  );
}
