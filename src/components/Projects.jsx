import { useEffect, useRef } from 'react'
import { Github, ExternalLink, Server, Layers, Users } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'SatyaJit Project',
    subtitle: 'Exam Registration System',
    description:
      'A full-stack exam registration platform with a Node.js/Express backend, handling student registration flows, exam scheduling, and secure data management with REST API design.',
    tags: ['Node.js', 'Express', 'MySQL', 'REST API', 'JavaScript'],
    github: 'https://github.com/guddu-debasis/SatyaJit-Project',
    live: null,
    icon: Layers,
    color: '#00d4ff',
    highlight: true,
  },
  {
    number: '02',
    title: 'Attendance Project',
    subtitle: 'Attendance Management System',
    description:
      'A backend system for tracking and managing student/employee attendance. Includes REST APIs for marking, fetching, and reporting attendance records with authentication.',
    tags: ['Python', 'FastAPI', 'MySQL', 'JWT', 'REST API'],
    github: 'https://github.com/guddu-debasis/Attendence-Project',
    live: null,
    icon: Users,
    color: '#39d353',
    highlight: false,
  },
  {
    number: '03',
    title: 'Hiring Portal',
    subtitle: 'Job Recruitment Platform Backend',
    description:
      'A complete hiring portal backend with APIs for job posting, candidate applications, recruiter dashboards, and multi-role authentication using JWT.',
    tags: ['Python', 'FastAPI', 'MySQL', 'JWT', 'REST API', 'Authentication'],
    github: 'https://github.com/guddu-debasis/Hiring_portal',
    live: null,
    icon: Server,
    color: '#a78bfa',
    highlight: false,
  },
  {
    number: '04',
    title: 'CineMind-AI',
    subtitle: 'LLM-Powered Movie Recommendation',
    description:
      'An AI-driven movie recommendation engine using semantic search, vector embeddings, and RAG pipelines to provide contextual suggestions based on user intent.',
    tags: ['LangChain', 'Python', 'Vector DBs', 'RAG', 'LLM APIs'],
    github: 'https://github.com/guddu-debasis/CineMind-AI',
    live: null,
    icon: Layers,
    color: '#fb923c',
    highlight: false,
  },
  {
    number: '05',
    title: 'CIAO Chat App',
    subtitle: 'Real-Time Chat Application',
    description:
      'A real-time chat application with JWT auth, WebSocket messaging via Socket.IO, REST APIs, and MongoDB for persistent data — designed for low-latency communication.',
    tags: ['Node.js', 'Express', 'Socket.IO', 'MongoDB', 'JWT', 'React'],
    github: 'https://github.com/guddu-debasis/CIAO',
    live: null,
    icon: Server,
    color: '#f472b6',
    highlight: false,
  },
  {
    number: '06',
    title: 'MindSpark AI',
    subtitle: 'AI Quiz & Flashcard Generator',
    description:
      'An AI-powered learning platform that converts raw input into structured quizzes and flashcards. Supports 500+ concurrent users with a responsive Streamlit UI.',
    tags: ['Python', 'Streamlit', 'AI Models', 'Prompt Engineering', 'JavaScript'],
    github: 'https://github.com/guddu-debasis/Mindspark-Ai',
    live: null,
    icon: Layers,
    color: '#34d399',
    highlight: false,
  },
]

function ProjectCard({ project }) {
  const { number, title, subtitle, description, tags, github, live, icon: Icon, color, highlight } = project

  return (
    <div
      className={`project-card neon-border rounded-xl p-6 flex flex-col gap-4
        ${highlight ? 'md:col-span-2' : ''}`}
      style={{ backgroundColor: 'var(--card)' }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon size={18} style={{ color }} />
          </div>
          <div>
            <span className="font-mono text-xs" style={{ color }}>{number}</span>
            <h3 className="font-mono text-base font-bold leading-tight" style={{ color: 'var(--text)' }}>{title}</h3>
            <p className="font-body text-xs" style={{ color: 'var(--muted)' }}>{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--dim)' }}>{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
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
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto fade-section" ref={sectionRef}>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>03.</span>
          <h2 className="font-mono text-3xl font-bold" style={{ color: 'var(--text)' }}>Projects</h2>
          <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: 'var(--border)' }} />
        </div>

        {/* Terminal comment */}
        <p className="font-mono text-xs mb-8" style={{ color: 'var(--muted)' }}>
          // backend-first projects — APIs, real-time systems & AI pipelines
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/guddu-debasis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm transition-colors group"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <Github size={16} />
            <span>View all repositories on GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
