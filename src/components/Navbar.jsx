import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = theme === 'dark';

  const navBg = isDark ? '#0d1424' : '#ffffff';
  const navBorder = isDark ? '#1e2d40' : '#e2e8f0';

  const handleScroll = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
      backgroundColor: navBg,
      borderBottom: `1px solid ${navBorder}`,
      boxShadow: '0 1px 8px rgba(0,0,0,0.08)',
    }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScroll(e, "#home")} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, color: 'white', fontSize: '12px'
          }}>
            HR
          </div>
          <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '15px' }}>Hammad</span>
        </a>

        {/* Desktop Links */}
        <ul style={{ display: 'none', listStyle: 'none', margin: 0, padding: 0, gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Toggle + Hire Me */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Dark/Light Toggle */}
          <button onClick={toggleTheme}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              width: '40px', height: '22px', borderRadius: '11px',
              border: `1px solid ${navBorder}`,
              backgroundColor: isDark ? '#1e3a5f' : '#e2e8f0',
              cursor: 'pointer', position: 'relative',
              transition: 'all 0.3s ease', flexShrink: 0,
              display: 'flex', alignItems: 'center', padding: '2px'
            }}>
            <div style={{
              width: '16px', height: '16px', borderRadius: '50%',
              backgroundColor: isDark ? '#38bdf8' : '#fbbf24',
              transform: isDark ? 'translateX(18px)' : 'translateX(0)',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '8px'
            }}>
              {isDark ? '🌙' : '☀️'}
            </div>
          </button>

          {/* Hire Me */}
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}
            style={{
              display: 'none', padding: '8px 18px', borderRadius: '8px',
              backgroundColor: 'var(--accent)', color: 'white',
              fontSize: '13px', fontWeight: 600, textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(14,165,233,0.3)', transition: 'opacity 0.2s'
            }}
            className="hire-btn"
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button className="mobile-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', padding: '4px' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div style={{ width: '20px', height: '2px', backgroundColor: 'var(--text-primary)', borderRadius: '2px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <div style={{ width: '20px', height: '2px', backgroundColor: 'var(--text-primary)', borderRadius: '2px', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
              <div style={{ width: '20px', height: '2px', backgroundColor: 'var(--text-primary)', borderRadius: '2px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: navBg,
          borderTop: `1px solid ${navBorder}`,
          padding: '16px 24px 20px',
          display: 'flex', flexDirection: 'column', gap: '4px'
        }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              style={{
                color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500,
                textDecoration: 'none', padding: '10px 0',
                borderBottom: `1px solid ${navBorder}`, transition: 'color 0.2s'
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}
            style={{
              marginTop: '12px', padding: '10px 0', textAlign: 'center',
              backgroundColor: 'var(--accent)', color: 'white',
              borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none'
            }}>
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .hire-btn { display: block !important; }
          .mobile-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
