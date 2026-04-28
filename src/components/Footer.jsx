import { Github, Linkedin, Mail, Terminal, ArrowUp } from 'lucide-react'
import { Link } from 'react-scroll'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1e2130] bg-[#0a0b10] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="hero" smooth duration={500} className="flex items-center gap-2 cursor-pointer group">
            <div className="w-7 h-7 rounded border border-[#00d4ff44] flex items-center justify-center group-hover:border-[#00d4ff] transition-colors">
              <Terminal size={13} className="text-[#00d4ff]" />
            </div>
            <span className="font-mono text-sm font-semibold text-white">
              <span className="text-[#00d4ff]">debasis</span>.dev
            </span>
          </Link>

          {/* Center — copyright */}
          <div className="font-mono text-xs text-[#4a5568] text-center">
            <span>© {year} Debasis Panda.</span>
            <span className="mx-2 text-[#1e2130]">|</span>
            <span>Built with React + Vite + Tailwind</span>
            <span className="mx-2 text-[#1e2130]">|</span>
            <span className="text-[#39d353]">Open to work</span>
          </div>

          {/* Socials + Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/guddu-debasis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a5568] hover:text-[#00d4ff] transition-colors"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/debasis-panda-07b2912a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a5568] hover:text-[#00d4ff] transition-colors"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:debasis2122004@gmail.com"
              className="text-[#4a5568] hover:text-[#00d4ff] transition-colors"
            >
              <Mail size={17} />
            </a>
            <div className="w-px h-4 bg-[#1e2130]" />
            <Link
              to="hero"
              smooth
              duration={500}
              className="cursor-pointer w-8 h-8 rounded border border-[#1e2130] flex items-center justify-center text-[#4a5568] hover:text-[#00d4ff] hover:border-[#00d4ff44] transition-all"
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
