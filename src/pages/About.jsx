export default function About() {
  const stack = {
    Frontend: ["React.js", "Vite", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    Backend: ["Django", "REST API", "MySQL", "Python"],
    Tools: ["Git", "GitHub", "VS Code", "XAMPP"],
  };

  const badgeColors = {
    Frontend: { bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.2)', header: '#0ea5e9' },
    Backend: { bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.2)', header: '#6366f1' },
    Tools: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', header: '#f59e0b' },
  };

  return (
    <section id="about" style={{ backgroundColor: 'var(--bg-secondary)', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 900, color: 'var(--text-primary)', margin: 0, whiteSpace: 'nowrap' }}>About Me</h2>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          {/* Bio — full width, no image */}
          <div style={{ maxWidth: '720px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '5px 12px', borderRadius: '100px',
              border: '1px solid var(--accent-border)', backgroundColor: 'var(--accent-bg)',
              color: 'var(--accent)', fontSize: '11px', fontWeight: 600, marginBottom: '20px'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent)' }} />
              Open to Work · Fresher
            </span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.8, margin: '0 0 16px' }}>
              Hi! I'm <strong style={{ color: 'var(--text-primary)' }}>Hammad</strong>, a self-taught Fullstack Developer passionate about building real-world web applications. I enjoy turning ideas into clean, functional products — from pixel-perfect frontends to robust Django backends.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.8, margin: '0 0 28px' }}>
              My goal is to continuously grow as a developer, contribute to meaningful projects, and land my first professional role where I can make a real impact.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                { icon: "📍", text: "Pakistan" },
                { icon: "💡", text: "Self-taught Developer" },
                { icon: "💼", text: "Open to Work" },
                { icon: "✉️", text: "hammadfida01@gmail.com" },
              ].map((b) => (
                <span key={b.text} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '8px 14px', borderRadius: '10px',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)', fontSize: '13px'
                }}>
                  {b.icon} {b.text}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '24px' }}>My Tech Stack</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
              {Object.entries(stack).map(([category, items]) => {
                const colors = badgeColors[category];
                return (
                  <div key={category} style={{
                    borderRadius: '14px', padding: '20px',
                    backgroundColor: colors.bg,
                    border: `1px solid ${colors.border}`
                  }}>
                    <h4 style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.header, margin: '0 0 16px' }}>
                      {category}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {items.map((item) => (
                        <span key={item} style={{
                          padding: '4px 10px', borderRadius: '6px',
                          backgroundColor: 'var(--bg-card)',
                          border: `1px solid ${colors.border}`,
                          color: 'var(--text-secondary)', fontSize: '12px', fontWeight: 500
                        }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Journey */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '24px' }}>Journey</h3>
            <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--border)' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-26px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--accent)', boxShadow: '0 0 0 3px var(--accent-bg)' }} />
                <span style={{ color: 'var(--accent)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>2026</span>
                <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '15px', margin: '4px 0' }}>Open to Work</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0 }}>Actively looking for my first professional role as a Fullstack Developer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
