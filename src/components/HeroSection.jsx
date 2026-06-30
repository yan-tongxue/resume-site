import { useState, useEffect } from 'react';
import data from '../data/resumeData';
import './HeroSection.css';

const { personal, hero } = data;
const FULL_TEXT = hero.typingText;

export default function HeroSection() {
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 35 : 70;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < FULL_TEXT.length) {
          setText(FULL_TEXT.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 2500);
        }
      } else {
        if (text.length > 0) {
          setText(FULL_TEXT.slice(0, text.length - 1));
        } else {
          setTimeout(() => setDeleting(false), 600);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-stars">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="hero-bg-gradient" />
        <div className="hero-bg-orb" />
      </div>
      <div className="section-container hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            {personal.title}
          </div>
          <h1 className="hero-name">
            <span className="hero-first">{personal.firstName}</span>
            <span className="hero-last">{personal.lastName}</span>
          </h1>
          <p className="hero-sub">
            <span className="typing-text">
              {text}
              <span className="typing-cursor" />
            </span>
          </p>
          <div className="hero-tags">
            {hero.tags.map((tag) => (
              <span key={tag} className="hero-tag">{tag}</span>
            ))}
          </div>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo(hero.primaryBtn.target)}>
              {hero.primaryBtn.text}
            </button>
            <button className="btn-secondary" onClick={() => scrollTo(hero.secondaryBtn.target)}>
              {hero.secondaryBtn.text}
            </button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-stat-block">
            {hero.stats.flatMap((s, i) => {
              const items = [
                <div className="hero-stat" key={s.label}>
                  <span className="hero-stat-num">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>,
              ];
              if (i < hero.stats.length - 1) {
                items.push(<div key={`d-${i}`} className="hero-stat-divider" />);
              }
              return items;
            })}
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="scroll-bar" />
      </div>
    </section>
  );
}
