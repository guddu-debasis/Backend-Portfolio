import { useEffect, useRef } from 'react'
import { Server, Cpu, GitBranch, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Server,
    title: 'Backend Architecture',
    desc: 'Designing RESTful APIs, microservices, and scalable server-side systems with Node.js, Express, and FastAPI.',
  },
  {
    icon: Cpu,
    title: 'AI & LLM Systems',
    desc: 'Building AI agent pipelines with LangChain, RAG workflows, and integrations with Gemini, OpenAI, and Groq APIs.',
  },
  {
    icon: GitBranch,
    title: 'Real-Time Systems',
    desc: 'Low-latency applications using WebSockets (Socket.IO), event-driven design, and efficient data pipelines.',
  },
  {
    icon: Zap,
    title: 'Production Focus',
    desc: 'JWT auth, Redis caching, MongoDB & PostgreSQL optimization, Docker deployment, and clean system design.',
  },
]

export default function About() {
  const sectionRef = useRef(null)

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

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto fade-section" ref={sectionRef}>
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>01.</span>
          <h2 className="font-mono text-3xl font-bold" style={{ color: 'var(--text)' }}>About Me</h2>
          <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: 'var(--border)' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="space-y-5 font-body leading-relaxed" style={{ color: 'var(--dim)' }}>
            <p>
              Hey — I'm <span className="font-semibold" style={{ color: 'var(--text)' }}>Debasis Panda</span>, a Computer Science undergraduate at{' '}
              <span style={{ color: 'var(--accent)' }}>Odisha University of Technology and Research</span>,
              maintaining a CGPA of <span className="font-mono" style={{ color: 'var(--green)' }}>9.16</span>.
            </p>
            <p>
              I specialize in building <span style={{ color: 'var(--text)' }}>backend systems</span> that are clean, scalable, and production-ready —
              from REST APIs and authentication layers to real-time data pipelines and AI agent workflows.
            </p>
            <p>
              My recent work at <span style={{ color: 'var(--text)' }}>IBM</span> as an AI Agent Architect gave me hands-on experience
              designing modular LLM pipelines using LangChain with Gemini, Groq, and OpenAI — improving
              task completion accuracy by <span className="font-mono" style={{ color: 'var(--accent)' }}>~40%</span>.
            </p>
            <p>
              Outside of work I enjoy exploring new backend patterns, contributing to projects,
              and building tools that actually solve problems.
            </p>

            {/* Terminal block */}
            <div className="neon-border rounded-lg p-4 font-mono text-sm mt-6" style={{ backgroundColor: 'var(--surface)' }}>
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28ca41]" />
              </div>
              <div style={{ color: 'var(--muted)' }}>$ cat profile.json</div>
              <div className="mt-2 space-y-1" style={{ color: 'var(--dim)' }}>
                <div><span style={{ color: 'var(--accent)' }}>"location"</span>: <span style={{ color: 'var(--green)' }}>"Odisha, India"</span>,</div>
                <div><span style={{ color: 'var(--accent)' }}>"focus"</span>: <span style={{ color: 'var(--green)' }}>"Backend + AI Systems"</span>,</div>
                <div><span style={{ color: 'var(--accent)' }}>"available"</span>: <span style={{ color: 'var(--accent)' }}>true</span>,</div>
                <div><span style={{ color: 'var(--accent)' }}>"coffee"</span>: <span style={{ color: 'var(--green)' }}>"always"</span></div>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="neon-border rounded-xl p-5 transition-all group"
                style={{ backgroundColor: 'var(--card)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors"
                  style={{ backgroundColor: 'var(--tag-bg)' }}
                >
                  <Icon size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="font-mono text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>{title}</h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
