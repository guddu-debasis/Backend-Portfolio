import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const roles = [
  'Backend Engineer',
  'AI Systems Developer',
  'Full-Stack Developer',
  'LLM Agent Architect',
  'API & Systems Designer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (typing) {
      if (charIndex < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 35)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, typing, roleIndex])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30"
        style={{ backgroundColor: 'var(--accent)', opacity: 0.04 }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'var(--green)', opacity: 0.04 }} />

      <div className="max-w-6xl mx-auto w-full pt-24">
        {/* Terminal path */}
        <div className="font-mono text-sm mb-6 flex items-center gap-2" style={{ color: 'var(--muted)' }}>
          <span style={{ color: 'var(--green)' }}>~/portfolio</span>
          <span style={{ color: 'var(--muted)' }}>$</span>
          <span style={{ color: 'var(--dim)' }}>whoami</span>
        </div>

        {/* Name */}
        <h1 className="font-mono text-5xl md:text-7xl font-bold leading-tight mb-2">
          <span style={{ color: 'var(--text)' }}>Debasis</span>
          <br />
          <span className="glow-cyan" style={{ color: 'var(--accent)' }}>Panda</span>
          <span style={{ color: 'var(--green)' }}>.</span>
        </h1>

        {/* Role typewriter */}
        <div className="font-mono text-xl md:text-2xl mt-6 mb-4 typewriter-container" style={{ color: 'var(--dim)' }}>
          <span style={{ color: 'var(--muted)' }}>// </span>
          <span style={{ color: 'var(--text)' }}>{displayed}</span>
          <span className="animate-pulse" style={{ color: 'var(--accent)' }}>█</span>
        </div>

        {/* Summary */}
        <p className="font-body text-lg max-w-xl mt-4 mb-10 leading-relaxed" style={{ color: 'var(--dim)' }}>
          CS undergraduate building{' '}
          <span style={{ color: 'var(--accent)' }}>production-ready APIs</span>,{' '}
          <span style={{ color: 'var(--green)' }}>AI agent pipelines</span>, and scalable systems.
          Currently studying at <span style={{ color: 'var(--text)' }}>OUTR</span>, Odisha.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 mb-10">
          {[
            { value: '9.16', label: 'CGPA' },
            { value: '3+', label: 'Backend Projects' },
            { value: '6+', label: 'Total Projects' },
            { value: '1', label: 'IBM Certificate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-2xl font-bold" style={{ color: 'var(--accent)' }}>{stat.value}</div>
              <div className="font-mono text-xs mt-1" style={{ color: 'var(--muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer font-mono text-sm px-6 py-3 rounded font-semibold transition-colors"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
          >
            View Projects →
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer font-mono text-sm px-6 py-3 rounded transition-all"
            style={{ border: '1px solid var(--border)', color: 'var(--dim)' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--dim)'
            }}
          >
            Contact Me
          </Link>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/guddu-debasis"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/debasis-panda-07b2912a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:debasis2122004@gmail.com"
            className="transition-colors"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <Mail size={20} />
          </a>
          <div className="h-px flex-1 max-w-24" style={{ backgroundColor: 'var(--border)' }} />
          <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>debasis2122004@gmail.com</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'var(--muted)' }}>
        <span className="font-mono text-xs">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
