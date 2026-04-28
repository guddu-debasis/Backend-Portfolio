import { useEffect, useRef, useState } from 'react'
import { Mail, Github, Linkedin, Send, Copy, Check } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'debasis2122004@gmail.com',
    href: 'mailto:debasis2122004@gmail.com',
    color: '#00d4ff',
    copyable: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/guddu-debasis',
    href: 'https://github.com/guddu-debasis',
    color: '#39d353',
    copyable: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'debasis-panda-07b2912a5',
    href: 'https://www.linkedin.com/in/debasis-panda-07b2912a5/',
    color: '#a78bfa',
    copyable: false,
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto fade-section" ref={sectionRef}>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>06.</span>
          <h2 className="font-mono text-3xl font-bold" style={{ color: 'var(--text)' }}>Contact</h2>
          <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: 'var(--border)' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — text */}
          <div>
            <h3 className="font-mono text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>
              Let's work together<span style={{ color: 'var(--accent)' }}>.</span>
            </h3>
            <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--dim)' }}>
              I'm currently open to backend engineering internships, AI/LLM project collaborations,
              and freelance backend development. If you have an interesting project or opportunity —
              drop me a message.
            </p>

            {/* Terminal block */}
            <div className="neon-border rounded-lg p-4 font-mono text-sm" style={{ backgroundColor: 'var(--card)' }}>
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28ca41]" />
              </div>
              <div style={{ color: 'var(--muted)' }}>$ cat availability.json</div>
              <div className="mt-2 space-y-1" style={{ color: 'var(--dim)' }}>
                <div><span style={{ color: 'var(--accent)' }}>"status"</span>: <span style={{ color: 'var(--green)' }}>"open"</span>,</div>
                <div><span style={{ color: 'var(--accent)' }}>"looking_for"</span>: [</div>
                <div className="ml-4"><span style={{ color: 'var(--green)' }}>"Backend Internship"</span>,</div>
                <div className="ml-4"><span style={{ color: 'var(--green)' }}>"AI/LLM Projects"</span>,</div>
                <div className="ml-4"><span style={{ color: 'var(--green)' }}>"Freelance APIs"</span></div>
                <div>],</div>
                <div><span style={{ color: 'var(--accent)' }}>"response_time"</span>: <span style={{ color: 'var(--green)' }}>"&lt; 24 hours"</span></div>
              </div>
            </div>
          </div>

          {/* Right — contact links */}
          <div className="space-y-4">
            {contactLinks.map(({ icon: Icon, label, value, href, color, copyable }) => (
              <div
                key={label}
                className="neon-border rounded-xl p-5 flex items-center gap-4 transition-all"
                style={{ backgroundColor: 'var(--card)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-xs" style={{ color: 'var(--muted)' }}>{label}</p>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="font-mono text-sm hover:underline truncate block"
                    style={{ color }}
                  >
                    {value}
                  </a>
                </div>
                {copyable && (
                  <button
                    onClick={() => handleCopy(value)}
                    className="transition-colors flex-shrink-0"
                    style={{ color: 'var(--muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                    title="Copy email"
                  >
                    {copied ? <Check size={16} style={{ color: 'var(--green)' }} /> : <Copy size={16} />}
                  </button>
                )}
              </div>
            ))}

            {/* CTA button */}
            <a
              href="mailto:debasis2122004@gmail.com"
              className="flex items-center justify-center gap-2 w-full font-mono text-sm font-semibold py-3 rounded-xl transition-colors mt-4"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
            >
              <Send size={15} />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
