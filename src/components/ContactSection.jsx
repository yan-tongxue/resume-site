import { Phone, Mail, Globe, MessageCircle } from 'lucide-react';
import data from '../data/resumeData';
import './ContactSection.css';

const { contact, personal, site } = data;

const ICONS = { Phone, Mail, Globe, MessageCircle };

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="contact-bg" />
      <div className="section-container contact-content">
        <div className="contact-left">
          <span className="section-label">{contact.label}</span>
          <h2 className="section-title contact-title">{contact.title}</h2>
          <div className="glow-line" />
          <p className="contact-desc">{contact.desc}</p>
          <div className="contact-channels">
            {contact.channels.map((ch) => {
              const Icon = ICONS[ch.icon];
              const inner = (
                <>
                  <Icon size={18} />
                  <span>{ch.text}</span>
                </>
              );
              if (ch.href) {
                return (
                  <a
                    key={ch.type}
                    href={ch.href}
                    className="channel-item"
                    {...(ch.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <div key={ch.type} className="channel-item">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-quote">
            <span className="quote-mark">&ldquo;</span>
            <blockquote>{contact.quote.text}</blockquote>
            <p className="quote-author">—— {contact.quote.author}</p>
          </div>
        </div>
      </div>
      <footer className="contact-footer">
        <div className="section-container contact-footer-inner">
          <span>&copy; {new Date().getFullYear()} {contact.footer}. All rights reserved.</span>
          <span>{site.footerBuilt}</span>
        </div>
      </footer>
    </section>
  );
}
