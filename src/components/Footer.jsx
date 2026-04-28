import { Github, Linkedin, Mail, Terminal, ArrowUp } from 'lucide-react'
import { Link } from 'react-scroll'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="px-6 py-10"
      style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="hero" smooth duration={500} className="flex items-center gap-2 cursor-pointer group">
            <div
              className="w-7 h-7 rounded flex items-center justify-center transition-colors"
              style={{ border: '1px solid var(--neon-border)' }}
            >
              <Terminal size={13} style={{ color: 'var(--accent)' }} />
            </div>
            <span className="font-mono text-sm font-semibold" style={{ color: 'var(--text)' }}>
              <span style={{ color: 'var(--accent)' }}>debasis</span>.dev
            </span>
          </Link>

          {/* Center — copyright */}
          <div className="font-mono text-xs text-center" style={{ color: 'var(--muted)' }}>
            <span>© {year} Debasis Panda.</span>
            <span className="mx-2" style={{ color: 'var(--border)' }}>|</span>
            <span>Built with React + Vite + Tailwind</span>
            <span className="mx-2" style={{ color: 'var(--border)' }}>|</span>
            <span style={{ color: 'var(--green)' }}>Open to work</span>
          </div>

          {/* Socials + Back to top */}
          <div className="flex items-center gap-4">
            {[
              { href: 'https://github.com/guddu-debasis', icon: <Github size={17} /> },
              { href: 'https://www.linkedin.com/in/debasis-panda-07b2912a5/', icon: <Linkedin size={17} /> },
              { href: 'mailto:debasis2122004@gmail.com', icon: <Mail size={17} /> },
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
            <div className="w-px h-4" style={{ backgroundColor: 'var(--border)' }} />
            <Link
              to="hero"
              smooth
              duration={500}
              className="cursor-pointer w-8 h-8 rounded flex items-center justify-center transition-all"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--muted)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.borderColor = 'var(--neon-border)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--muted)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
              title="Back to top"
            >
              <ArrowUp size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
