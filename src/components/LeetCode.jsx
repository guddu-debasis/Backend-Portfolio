export default function LeetCode() {
  const stats = [
    { label: 'Problems Solved', value: '100+', color: 'var(--accent)' },
    { label: 'Easy', value: '40+', color: 'var(--green)' },
    { label: 'Medium', value: '50+', color: '#f59e0b' },
    { label: 'Hard', value: '10+', color: '#ef4444' },
  ]

  return (
    <section id="leetcode" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="font-mono text-sm" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--green)' }}>~/portfolio</span>
            <span style={{ color: 'var(--muted)' }}> $ cat</span>
            <span style={{ color: 'var(--dim)' }}> leetcode.json</span>
          </div>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left: info card */}
          <div
            className="rounded-xl p-8"
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              boxShadow: '0 4px 24px var(--shadow-card)',
            }}
          >
            {/* LeetCode logo + username */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#FFA116', flexShrink: 0 }}
              >
                {/* LeetCode icon SVG */}
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </div>
              <div>
                <h2 className="font-mono text-2xl font-bold" style={{ color: 'var(--text)' }}>
                  LeetCode
                </h2>
                <a
                  href="https://leetcode.com/u/DEBASIS_PANDA123-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm transition-colors"
                  style={{ color: 'var(--accent)' }}
                  onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                >
                  @DEBASIS_PANDA123-
                </a>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg p-4 text-center"
                  style={{
                    backgroundColor: 'var(--bg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div className="font-mono text-2xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Visit button */}
            <a
              href="https://leetcode.com/u/DEBASIS_PANDA123-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full font-mono text-sm py-3 rounded-lg transition-all"
              style={{
                backgroundColor: '#FFA116',
                color: '#1a1a1a',
                fontWeight: 600,
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              View LeetCode Profile →
            </a>
          </div>

          {/* Right: description */}
          <div>
            <div className="font-mono text-sm mb-3" style={{ color: 'var(--muted)' }}>
              <span style={{ color: 'var(--green)' }}>//</span> competitive_coding
            </div>
            <h3 className="font-mono text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
              Sharpening{' '}
              <span style={{ color: 'var(--accent)' }}>Algorithms</span>
              <span style={{ color: 'var(--green)' }}>.</span>
            </h3>
            <p className="font-body text-lg leading-relaxed mb-6" style={{ color: 'var(--dim)' }}>
              Consistently solving Data Structures & Algorithms problems on LeetCode to strengthen
              problem-solving skills and prepare for technical interviews. Topics covered include
              arrays, graphs, dynamic programming, trees, and more.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Arrays', 'Graphs', 'Dynamic Programming', 'Trees', 'Binary Search', 'Sliding Window', 'Two Pointers', 'Recursion'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded"
                  style={{
                    backgroundColor: 'var(--tag-bg)',
                    color: 'var(--accent)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
