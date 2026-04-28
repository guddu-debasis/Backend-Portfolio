import { useEffect, useRef } from 'react'
import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    degree: "Bachelor's in Computer Science and Engineering",
    institution: 'Odisha University of Technology and Research',
    short: 'OUTR',
    period: 'Aug 2023 – Jun 2027',
    grade: 'CGPA: 9.17',
    gradeColor: '#00d4ff',
    location: 'Odisha, India',
    highlights: [
      'Specializing in Full-Stack Development and LLM-based AI Systems',
      'Active in backend engineering and open-source projects',
      'Built production-ready AI agent and real-time web applications',
    ],
    type: 'University',
  },
  {
    degree: '12th — +2 Science',
    institution: 'Tokyo Advance Higher Secondary School, Remuna, Balasore',
    short: 'TAHSS',
    period: 'Aug 2020 – Jun 2022',
    grade: 'Percentage: 92.33%',
    gradeColor: '#39d353',
    location: 'Balasore, Odisha',
    highlights: [
      'Science stream with Physics, Chemistry, Mathematics',
      'Strong foundation in analytical and quantitative subjects',
    ],
    type: 'Higher Secondary',
  },
  {
    degree: '10th — Matriculation',
    institution: 'Saraswati Sishu Vidya Mandir, Balia, Balasore',
    short: 'SSVM',
    period: '2020',
    grade: 'Percentage: 93.67%',
    gradeColor: '#a78bfa',
    location: 'Balasore, Odisha',
    highlights: [
      'Consistently top performer in science and mathematics',
    ],
    type: 'Secondary',
  },
]

const certificates = [
  {
    name: 'AI Agent Architect',
    issuer: 'IBM',
    topics: 'LLM, RAG, Agents, Real-World Projects',
    color: '#00d4ff',
    credentialUrl: 'https://www.credly.com',
  },
]

export default function Education() {
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
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto fade-section" ref={sectionRef}>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>05.</span>
          <h2 className="font-mono text-3xl font-bold" style={{ color: 'var(--text)' }}>Education</h2>
          <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: 'var(--border)' }} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education cards */}
          <div className="lg:col-span-2 space-y-5">
            {education.map((edu, i) => (
              <div
                key={i}
                className="neon-border rounded-xl p-6 transition-all group"
                style={{ backgroundColor: 'var(--card)' }}
              >
                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-colors"
                    style={{ backgroundColor: 'var(--tag-bg)' }}
                  >
                    <GraduationCap size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded"
                        style={{ color: 'var(--muted)', border: '1px solid var(--border)' }}
                      >
                        {edu.type}
                      </span>
                      <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>{edu.period}</span>
                    </div>
                    <h3 className="font-mono text-sm font-bold mt-1" style={{ color: 'var(--text)' }}>{edu.degree}</h3>
                    <p className="font-body text-xs mt-0.5" style={{ color: 'var(--dim)' }}>{edu.institution}</p>
                    <span
                      className="font-mono text-sm font-semibold mt-2 inline-block"
                      style={{ color: edu.gradeColor }}
                    >
                      {edu.grade}
                    </span>

                    {edu.highlights.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {edu.highlights.map((h, j) => (
                          <li key={j} className="flex gap-2 text-xs font-body" style={{ color: 'var(--muted)' }}>
                            <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificates sidebar */}
          <div className="space-y-5">
            <div className="neon-border rounded-xl p-5" style={{ backgroundColor: 'var(--card)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Award size={16} style={{ color: 'var(--accent)' }} />
                <h3 className="font-mono text-sm font-semibold" style={{ color: 'var(--text)' }}>Certificates</h3>
              </div>
              {certificates.map((cert, i) => (
                <div key={i} className="border-t pt-4 mt-4 first:border-0 first:pt-0 first:mt-0"
                  style={{ borderColor: 'var(--border)' }}>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 font-mono text-xs font-bold"
                    style={{ backgroundColor: cert.color, color: '#0a0b10' }}
                  >
                    {cert.issuer.slice(0, 2)}
                  </div>
                  <h4 className="font-mono text-sm font-semibold" style={{ color: 'var(--text)' }}>{cert.name}</h4>
                  <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--accent)' }}>{cert.issuer}</p>
                  <p className="font-body text-xs mt-2" style={{ color: 'var(--muted)' }}>{cert.topics}</p>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs hover:underline mt-3 inline-block"
                    style={{ color: 'var(--green)' }}
                  >
                    View Credential →
                  </a>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="neon-border rounded-xl p-5" style={{ backgroundColor: 'var(--card)' }}>
              <p className="font-mono text-xs mb-4" style={{ color: 'var(--muted)' }}>// quick stats</p>
              {[
                { label: 'Current CGPA', value: '9.17', color: '#00d4ff' },
                { label: '12th Score', value: '92.33%', color: '#39d353' },
                { label: '10th Score', value: '93.67%', color: '#a78bfa' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between items-center py-2 border-b last:border-0"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>{stat.label}</span>
                  <span className="font-mono text-sm font-bold" style={{ color: stat.color }}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
