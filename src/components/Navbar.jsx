import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' },
  { label: 'LeetCode', to: 'leetcode' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur"
      style={{
        background: scrolled
          ? 'color-mix(in srgb, var(--bg) 80%, transparent)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={500} className="flex items-center gap-2 cursor-pointer group">
          <div
            className="w-8 h-8 rounded flex items-center justify-center transition-colors"
            style={{ border: '1px solid var(--neon-border)' }}
          >
            <Terminal size={16} style={{ color: 'var(--accent)' }} />
          </div>
          <span className="font-mono font-semibold" style={{ color: 'var(--text)' }}>
            <span style={{ color: 'var(--accent)' }}>debasis</span>.dev
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className="font-mono text-sm cursor-pointer relative group transition-colors"
                style={{ color: 'var(--dim)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--dim)'}
              >
                <span style={{ color: 'var(--muted)' }}>./</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + GitHub */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggle}
            className="w-9 h-9 rounded flex items-center justify-center transition-all"
            style={{
              border: '1px solid var(--neon-border)',
              color: 'var(--dim)',
              background: 'var(--tag-bg)',
            }}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark
              ? <Sun size={15} style={{ color: '#fbbf24' }} />
              : <Moon size={15} style={{ color: 'var(--accent)' }} />
            }
          </button>

          <a
            href="https://github.com/guddu-debasis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm px-4 py-2 rounded transition-all"
            style={{
              border: '1px solid var(--neon-border)',
              color: 'var(--accent)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--tag-bg)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            GitHub →
          </a>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded flex items-center justify-center"
            style={{ border: '1px solid var(--border)', background: 'var(--tag-bg)' }}
          >
            {dark
              ? <Sun size={15} style={{ color: '#fbbf24' }} />
              : <Moon size={15} style={{ color: 'var(--accent)' }} />
            }
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: 'var(--dim)' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 space-y-4"
          style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="block font-mono text-sm transition-colors cursor-pointer"
              style={{ color: 'var(--dim)' }}
            >
              <span style={{ color: 'var(--muted)' }}>./</span>{link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
