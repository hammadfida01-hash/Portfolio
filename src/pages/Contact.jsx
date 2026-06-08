import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // EmailJS initialization
  emailjs.init("jGXmxWRUppqLFsa6T");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send("service_z6yhs19", "template_zscr0ce", {
        name: form.name,
        email: form.email,
        message: form.message,
      });

      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Message failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: '10px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg-tertiary)',
    color: 'var(--text-primary)', fontSize: '14px',
    outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box', fontFamily: 'inherit'
  };

  return (
    <section id="contact" style={{ backgroundColor: 'var(--bg-secondary)', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 900, color: 'var(--text-primary)', margin: 0, whiteSpace: 'nowrap' }}>Contact Me</h2>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '40px' }}>
          Have a project in mind? Let's build something great together.
        </p>

        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '20px', padding: '32px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { label: 'Name', name: 'name', type: 'text', placeholder: 'Your Name' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'Your Email' },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>{label}</label>
                <input type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange}
                placeholder="Your Message" rows={5}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <button onClick={handleSubmit} disabled={loading} style={{
              alignSelf: 'flex-start', padding: '11px 28px',
              borderRadius: '10px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: 700, fontSize: '14px', transition: 'all 0.2s',
              backgroundColor: sent ? '#22c55e' : 'var(--accent)',
              color: 'white', fontFamily: 'inherit',
              boxShadow: sent ? '0 4px 14px rgba(34,197,94,0.3)' : '0 4px 14px rgba(14,165,233,0.3)',
              opacity: loading ? 0.7 : 1
            }}
              onMouseEnter={e => !loading && (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={e => !loading && (e.currentTarget.style.opacity = '1')}
            >
              {loading ? "Sending..." : sent ? "Message Sent! ✓" : "Send Message →"}
            </button>
          </div>
        </div>

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
          <a href="mailto:hammadfida01@gmail.com" style={{
            color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            ✉️ hammadfida01@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
