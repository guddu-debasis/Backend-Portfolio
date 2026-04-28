import { useEffect, useRef } from 'react'
import { Briefcase, ExternalLink } from 'lucide-react'

const experiences = [
  {
    role: 'AI Agent Architect',
    company: 'IBM',
    type: 'Internship',
    period: 'July 2025 – August 2025',
    credentialUrl: 'https://www.credly.com',
    highlights: [
      'Designed and implemented modular AI agent pipelines using LangChain with Gemini, Groq, and OpenAI APIs.',
      'Built tool-augmented agents enabling multi-step reasoning and dynamic API calling.',
      'Improved agent task completion accuracy and tool usage efficiency by ~40%.',
      'Worked with RAG pipelines, vector search, and prompt optimization for real-world use cases.',
    ],
    tags: ['LangChain', 'LLM APIs', 'RAG', 'Gemini', 'OpenAI', 'Groq', 'Prompt Engineering'],
  },
]

export default function Experience() {
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
    <section id="experience" className="py-24 px-6" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto fade-section" ref={sectionRef}>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>04.</span>
          <h2 className="font-mono text-3xl font-bold" style={{ color: 'var(--text)' }}>Experience</h2>
          <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: 'var(--border)' }} />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-10 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, var(--neon-border), transparent)' }} />

          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-8 mb-10">
              {/* Dot */}
              <div className="hidden md:flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mt-1 flex-shrink-0 z-10"
                  style={{ backgroundColor: 'var(--card)', border: '1px solid var(--neon-border)' }}
                >
                  <Briefcase size={16} style={{ color: 'var(--accent)' }} />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 neon-border rounded-xl p-6 transition-all" style={{ backgroundColor: 'var(--card)' }}>
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-mono text-lg font-bold" style={{ color: 'var(--text)' }}>{exp.role}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>{exp.company}</span>
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded"
                        style={{ color: 'var(--muted)', border: '1px solid var(--border)' }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>{exp.period}</span>
                    {exp.credentialUrl && (
                      <div className="mt-1">
                        <a
                          href={exp.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs hover:underline flex items-center gap-1 justify-end"
                          style={{ color: 'var(--accent)' }}
                        >
                          View Credential <ExternalLink size={10} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm font-body" style={{ color: 'var(--dim)' }}>
                      <span className="font-mono mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }}>▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Currently available banner */}
          <div className="ml-0 md:ml-18 mt-4 neon-border rounded-xl p-5 flex items-center gap-4"
            style={{ backgroundColor: 'var(--card)' }}>
            <div className="w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: 'var(--green)' }} />
            <div>
              <p className="font-mono text-sm" style={{ color: 'var(--text)' }}>Currently Open to Opportunities</p>
              <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
                Internships, collaborations, freelance backend &amp; AI projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
