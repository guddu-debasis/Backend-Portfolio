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
  const [avatarSrc, setAvatarSrc] = useState('/avatar.jpg')

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
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'var(--accent)', opacity: 0.04 }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'var(--green)', opacity: 0.04 }} />

      <div className="max-w-6xl mx-auto w-full pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT: Content */}
          <div className="flex-1">
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
              Currently studying at <span style={{ color: 'var(--text)', fontWeight: 600 }}>OUTR</span>, Odisha.
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
            <div className="flex flex-wrap gap-4 mb-10">
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
              {[
                { href: 'https://github.com/guddu-debasis', icon: <Github size={20} /> },
                { href: 'https://www.linkedin.com/in/debasis-panda-07b2912a5/', icon: <Linkedin size={20} /> },
                { href: 'mailto:debasis2122004@gmail.com', icon: <Mail size={20} /> },
                {
                  href: 'https://leetcode.com/u/DEBASIS_PANDA123-/',
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                    </svg>
                  )
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: 'var(--muted)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                >
                  {social.icon}
                </a>
              ))}
              <div className="h-px flex-1 max-w-24" style={{ backgroundColor: 'var(--border)' }} />
              <span className="font-mono text-xs hidden sm:block" style={{ color: 'var(--muted)' }}>debasis2122004@gmail.com</span>
            </div>
          </div>

          {/* RIGHT: Circular Avatar */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative">
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{ backgroundColor: 'var(--accent)', opacity: 0.2, transform: 'scale(1.2)' }}
              />
              {/* Spinning dashed ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: '2px dashed var(--neon-border)',
                  transform: 'scale(1.1)',
                  animation: 'avatarSpin 14s linear infinite',
                }}
              />
              {/* Solid accent ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: '3px solid var(--accent)',
                  opacity: 0.6,
                }}
              />
              {/* Avatar image */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden"
                style={{ boxShadow: '0 0 50px var(--shadow-card)' }}
              >
                <img
                  src={avatarSrc}
                  alt="Debasis Panda"
                  className="w-full h-full object-cover object-top"
                  onError={() => setAvatarSrc('')}
                />
                {!avatarSrc && (
                  <div
                    className="w-full h-full flex items-center justify-center font-mono text-6xl font-bold"
                    style={{ backgroundColor: 'var(--card)', color: 'var(--accent)' }}
                  >
                    D
                  </div>
                )}
              </div>

              {/* Status badge */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--neon-border)',
                  color: 'var(--green)',
                  boxShadow: '0 4px 12px var(--shadow-card)',
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--green)' }} />
                Open to Work
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'var(--muted)' }}>
        <span className="font-mono text-xs">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>

      <style>{`
        @keyframes avatarSpin {
          from { transform: scale(1.1) rotate(0deg); }
          to { transform: scale(1.1) rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
