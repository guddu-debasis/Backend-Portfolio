import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    category: 'Languages',
    color: '#00d4ff',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'C++', level: 70 },
    ],
  },
  {
    category: 'Backend',
    color: '#39d353',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'FastAPI', level: 78 },
      { name: 'REST APIs', level: 92 },
      { name: 'JWT / Auth', level: 85 },
      { name: 'Socket.IO', level: 82 },
    ],
  },
  {
    category: 'Databases',
    color: '#a78bfa',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MySQL', level: 78 },
      { name: 'Redis', level: 72 },
      { name: 'Vector Databases', level: 70 },
    ],
  },
  {
    category: 'AI / LLM',
    color: '#fb923c',
    skills: [
      { name: 'LangChain', level: 88 },
      { name: 'Google Gemini API', level: 85 },
      { name: 'OpenAI API', level: 82 },
      { name: 'Pydantic AI', level: 72 },
      { name: 'RAG Pipelines', level: 80 },
    ],
  },
  {
    category: 'Frontend',
    color: '#f472b6',
    skills: [
      { name: 'React', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML / CSS / JS', level: 88 },
    ],
  },
  {
    category: 'Engineering',
    color: '#34d399',
    skills: [
      { name: 'System Design', level: 78 },
      { name: 'Testing & Debugging', level: 82 },
      { name: 'Documentation', level: 85 },
      { name: 'Deployment', level: 75 },
    ],
  },
]

const techTags = [
  'Node.js', 'Express.js', 'FastAPI', 'Python', 'JavaScript',
  'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'LangChain',
  'LLM APIs', 'RAG', 'Socket.IO', 'JWT', 'React',
  'Tailwind CSS', 'Git', 'REST APIs', 'Vector DBs', 'Pydantic AI',
  'Gemini API', 'OpenAI API', 'System Design', 'Docker',
]

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-xs" style={{ color: 'var(--dim)' }}>{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}88, ${color})`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 px-6" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto fade-section" ref={sectionRef}>
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>02.</span>
          <h2 className="font-mono text-3xl font-bold" style={{ color: 'var(--text)' }}>Skills</h2>
          <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: 'var(--border)' }} />
        </div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group) => (
            <div key={group.category} className="neon-border rounded-xl p-5" style={{ backgroundColor: 'var(--card)' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: group.color }} />
                <h3 className="font-mono text-sm font-semibold" style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  animate={visible}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div className="neon-border rounded-xl p-6" style={{ backgroundColor: 'var(--card)' }}>
          <p className="font-mono text-xs mb-4" style={{ color: 'var(--muted)' }}>// tech stack &amp; tools</p>
          <div className="flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
