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
    <section id="contact" className="py-24 px-6 bg-[#0d0e16]">
      <div className="max-w-6xl mx-auto fade-section" ref={sectionRef}>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-[#00d4ff]">06.</span>
          <h2 className="font-mono text-3xl font-bold text-white">Contact</h2>
          <div className="flex-1 h-px bg-[#1e2130] max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — text */}
          <div>
            <h3 className="font-mono text-2xl font-bold text-white mb-4">
              Let's work together<span className="text-[#00d4ff]">.</span>
            </h3>
            <p className="font-body text-[#8892a4] leading-relaxed mb-6">
              I'm currently open to backend engineering internships, AI/LLM project collaborations,
              and freelance backend development. If you have an interesting project or opportunity —
              drop me a message.
            </p>

            {/* Terminal block */}
            <div className="neon-border rounded-lg bg-[#0f1018] p-4 font-mono text-sm">
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28ca41]" />
              </div>
              <div className="text-[#4a5568]">$ cat availability.json</div>
              <div className="text-[#8892a4] mt-2 space-y-1">
                <div><span className="text-[#00d4ff]">"status"</span>: <span className="text-[#39d353]">"open"</span>,</div>
                <div><span className="text-[#00d4ff]">"looking_for"</span>: [</div>
                <div className="ml-4"><span className="text-[#39d353]">"Backend Internship"</span>,</div>
                <div className="ml-4"><span className="text-[#39d353]">"AI/LLM Projects"</span>,</div>
                <div className="ml-4"><span className="text-[#39d353]">"Freelance APIs"</span></div>
                <div>],</div>
                <div><span className="text-[#00d4ff]">"response_time"</span>: <span className="text-[#39d353]">"&lt; 24 hours"</span></div>
              </div>
            </div>
          </div>

          {/* Right — contact links */}
          <div className="space-y-4">
            {contactLinks.map(({ icon: Icon, label, value, href, color, copyable }) => (
              <div
                key={label}
                className="neon-border rounded-xl bg-[#0f1018] p-5 flex items-center gap-4 hover:border-[#00d4ff33] transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-xs text-[#4a5568]">{label}</p>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-white hover:underline truncate block"
                    style={{ color }}
                  >
                    {value}
                  </a>
                </div>
                {copyable && (
                  <button
                    onClick={() => handleCopy(value)}
                    className="text-[#4a5568] hover:text-[#00d4ff] transition-colors flex-shrink-0"
                    title="Copy email"
                  >
                    {copied ? <Check size={16} className="text-[#39d353]" /> : <Copy size={16} />}
                  </button>
                )}
              </div>
            ))}

            {/* CTA button */}
            <a
              href="mailto:debasis2122004@gmail.com"
              className="flex items-center justify-center gap-2 w-full bg-[#00d4ff] text-[#0a0b10] font-mono text-sm font-semibold py-3 rounded-xl hover:bg-[#00bbdd] transition-colors mt-4"
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
