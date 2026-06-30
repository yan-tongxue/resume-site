import data from '../data/resumeData';
import './ContactSection.css';

const { contact, personal, site } = data;

const SvgIcon = ({ d }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const ICONS = {
  Phone:         () => <SvgIcon d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  Mail:          () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  ),
  Globe:         () => <SvgIcon d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />,
  MessageCircle: () => <SvgIcon d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />,
};

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
                  <Icon />
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
