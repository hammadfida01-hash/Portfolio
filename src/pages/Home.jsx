export default function Home() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const techBadges = ["React.js", "Vite", "Django", "MySQL", "REST API", "Git"];

  // ============================================================
  // APNI IMAGE AUR PROJECTS KA PATH YAHAN LIKHO
  // ============================================================

  const myPhoto = "./myimg.jpg"; // <-- apni photo ka naam likho (src folder mein rakho)

  const projects = [
    {
      title: "Tic Tac Toe",
      image: "./tic_tac_toe.jpg",  // <-- project image ka naam (src folder mein rakho)
      desc: "Two-player game with win detection and score tracking. Built with HTML, CSS & JavaScript.",
      tags: ["HTML", "CSS", "JS"],
      accent: "#8b5cf6",
      github: "https://github.com/hammadfida01-hash/Tic-Tac-Toe",
      demo: "https://hammadfida01-hash.github.io/Tic-Tac-Toe"
    },
    {
      title: "BMI Calculator",
      image: "./bmi_calculator.jpg",
      desc: "Calculate Body Mass Index instantly with real-time health category feedback.",
      tags: ["JavaScript"],
      accent: "#f59e0b",
      github: "https://github.com/hammadfida01-hash/BMI-Calculator",
      demo: "https://hammadfida01-hash.github.io/BMI-Calculator"
    },
    {
      title: "Currency Converter",
      image: "./currency_conv.jpg",
      desc: "Real-time currency conversion using live exchange rate API. Built with React.js.",
      tags: ["React", "API"],
      accent: "#10b981",
      github: "https://github.com/hammadfida01-hash/Currency-Convertor",
      demo: "https://hammadfida01-hash.github.io/Currency-Convertor"
    },
    {
      title: "Password Generator",
      image: "./password_gen.jpg",
      desc: "Secure password generator with custom length, numbers & special characters.",
      tags: ["React.js"],
      accent: "#0ea5e9",
      github: "https://github.com/hammadfida01-hash/Password-Generator",
      demo: "https://hammadfida01-hash.github.io/Password-Generator"
    },
    {
      title: "HR Performance Tracker",
      image: "./empt.jpg",
      desc: "Web-based HR system for employee attendance, task management, and performance feedback.",
      tags: ["Django", "MySQL", "REST API"],
      accent: "#ef4444",
      github: "https://github.com/hammadfida01-hash/FYP-Hammad",
      demo: "https://hr-performance-tracker.onrender.com/"
    
    },
  ];

  // ============================================================

  return (
    <section id="home" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', paddingTop: '88px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
        backgroundSize: '48px 48px', opacity: 0.5,
        maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)'
      }} />
      <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(14,165,233,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>

        {/* Hero */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '48px', minHeight: '80vh', flexWrap: 'wrap' }}>

          {/* LEFT */}
          <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', borderRadius: '100px',
              border: '1px solid var(--accent-border)', backgroundColor: 'var(--accent-bg)',
              color: 'var(--accent)', fontSize: '12px', fontWeight: 600, width: 'fit-content'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
              Open to Work · Fresher
            </span>

            <div>
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 68px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-2px', color: 'var(--text-primary)', margin: 0 }}>
                Hi, I'm{" "}
                <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Hammad
                </span>
              </h1>
              <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 44px)', fontWeight: 800, color: 'var(--text-muted)', margin: '8px 0 0', letterSpacing: '-1px', lineHeight: 1.2 }}>
                Fullstack Developer
              </h2>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, maxWidth: '480px', margin: 0 }}>
              Self-taught & ready to build. I craft real-world web apps from frontend to backend — React, Django, REST APIs & more.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {techBadges.map((t) => (
                <span key={t} style={{
                  padding: '5px 12px', borderRadius: '6px',
                  backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border)',
                  color: 'var(--text-secondary)', fontSize: '12px', fontWeight: 500
                }}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/cv.pdf" download style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '10px',
                backgroundColor: 'var(--accent)', color: 'white',
                fontWeight: 700, fontSize: '14px', textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(14,165,233,0.35)', transition: 'all 0.2s'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                Download CV ↓
              </a>
              <button onClick={() => handleScroll("#projects")} style={{
                padding: '12px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', backgroundColor: 'transparent',
                color: 'var(--text-primary)', fontWeight: 600, fontSize: '14px',
                cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)' }}
              >
                View Projects
              </button>
            </div>
          </div>

          {/* RIGHT — Apni Photo */}
          <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <div style={{
              width: '320px', height: '380px', borderRadius: '800px',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-lg)', position: 'relative'
            }}>
              <img
                src="./myimg.jpg"
                alt="Hammad"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '800px' }}
              />
              <div style={{
                position: 'absolute', bottom: '16px', right: '16px',
                padding: '6px 12px', borderRadius: '8px',
                backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                fontSize: '11px', color: 'white', fontWeight: 600
              }}>
                Full-Stack Developer
              </div>
            </div>
          </div>

        </div>

        {/* Projects */}
        <div id="projects" style={{ marginTop: '120px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 900, color: 'var(--text-primary)', margin: 0, whiteSpace: 'nowrap' }}>Featured Projects</h2>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {projects.map((p) => (
              <div key={p.title} style={{
                backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '16px', overflow: 'hidden', transition: 'all 0.25s'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = p.accent; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${p.accent}20` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {/* Project Image */}
                <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
                    {p.tags.map((t) => (
                      <span key={t} style={{
                        padding: '3px 8px', borderRadius: '4px',
                        backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border)',
                        color: 'var(--text-muted)', fontSize: '11px', fontWeight: 500
                      }}>{t}</span>
                    ))}
                  </div>
                  <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '15px', margin: '0 0 8px' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.6, margin: '0 0 16px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                    <a href={p.github} target="_blank" rel="noreferrer"
                      style={{ color: p.accent, fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      View on GitHub →
                    </a>
                    <a href={p.demo} target="_blank" rel="noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '4px',
                        padding: '4px 10px', borderRadius: '6px',
                        backgroundColor: p.accent + '18',
                        border: `1px solid ${p.accent}55`,
                        color: p.accent, fontSize: '12px', fontWeight: 600,
                        textDecoration: 'none', transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = p.accent; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = p.accent }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = p.accent + '18'; e.currentTarget.style.color = p.accent; e.currentTarget.style.borderColor = p.accent + '55' }}
                    >
                      ▶ Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
