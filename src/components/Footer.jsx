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
              {
                href: 'https://leetcode.com/u/DEBASIS_PANDA123-/',
                icon: (
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
