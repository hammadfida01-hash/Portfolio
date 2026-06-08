const skills = [
  { name: "React.js", icon: "⚛️", color: "#06b6d4" },
  { name: "JavaScript", icon: "🟨", color: "#eab308" },
  { name: "HTML & CSS", icon: "🌐", color: "#f97316" },
  { name: "Tailwind CSS", icon: "💨", color: "#14b8a6" },
  { name: "Django", icon: "🐍", color: "#22c55e" },
  { name: "REST API", icon: "🔌", color: "#8b5cf6" },
  { name: "MySQL", icon: "🗄️", color: "#3b82f6" },
  { name: "Python", icon: "🐍", color: "#10b981" },
  { name: "C & C++", icon: "🔧", color: "#ef4444" },
  { name: "PHP", icon: "🔧", color: "#ef4444" },
  { name: "Git & GitHub", icon: "🔧", color: "#ef4444" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: 'var(--bg-primary)', padding: '96px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 900, color: 'var(--text-primary)', margin: 0, whiteSpace: 'nowrap' }}>Skills</h2>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {skills.map((skill) => (
            <div key={skill.name}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '12px 20px', borderRadius: '12px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                transition: 'all 0.2s', cursor: 'default'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = skill.color
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = `0 6px 20px ${skill.color}25`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                backgroundColor: skill.color, flexShrink: 0
              }} />
              <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600 }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
