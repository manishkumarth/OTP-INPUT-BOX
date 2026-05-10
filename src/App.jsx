const skills = [
  'React',
  'Vite',
  'Tailwind CSS',
  'TypeScript',
  'Node.js',
  'Framer Motion',
  'REST APIs',
  'UI Systems',
];

const projects = [
  {
    name: 'Nebula Analytics',
    description:
      'A realtime dashboard for product teams with customizable cards, streaming metrics, and role-based views.',
    tech: ['React', 'Vite', 'Charts', 'WebSockets'],
    stars: 128,
    forks: 24,
    url: 'https://github.com/',
  },
  {
    name: 'Atlas Design Kit',
    description:
      'A polished component library featuring accessible primitives, tokens, documentation, and automated previews.',
    tech: ['Tailwind', 'Storybook', 'A11y'],
    stars: 342,
    forks: 58,
    url: 'https://github.com/',
  },
  {
    name: 'LaunchPad CMS',
    description:
      'A headless content workflow for marketing teams with editorial approvals and lightning-fast publishing.',
    tech: ['React', 'Node', 'Prisma'],
    stars: 91,
    forks: 17,
    url: 'https://github.com/',
  },
];

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Lumina Labs',
    period: '2024 — Present',
    summary:
      'Leading the frontend architecture for customer-facing SaaS products with a focus on performance, accessibility, and delightful micro-interactions.',
  },
  {
    role: 'React Developer',
    company: 'PixelForge Studio',
    period: '2021 — 2024',
    summary:
      'Built immersive web experiences and reusable design systems for startups, ecommerce brands, and internal product teams.',
  },
  {
    role: 'UI Engineer',
    company: 'Freelance',
    period: '2019 — 2021',
    summary:
      'Partnered with founders to transform early product ideas into responsive prototypes, marketing sites, and MVP dashboards.',
  },
];

const stats = [
  { value: '7+', label: 'Years building' },
  { value: '42', label: 'Projects shipped' },
  { value: '18ms', label: 'Interaction target' },
];

function App() {
  return (
    <main className="portfolio-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <nav className="nav glass-panel" aria-label="Primary navigation">
        <a className="brand" href="#hero" aria-label="Portfolio home">
          AR
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="hero" className="hero section-grid">
        <div className="hero-copy animate-rise">
          <p className="eyebrow">Frontend Engineer · Product-minded Builder</p>
          <h1>
            Designing sleek digital products with code, craft, and motion.
          </h1>
          <p className="hero-text">
            I create performant React experiences, design systems, and polished
            interfaces that feel fast, responsive, and memorable across every
            screen.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View projects
            </a>
            <a className="button secondary" href="mailto:hello@example.com">
              Let&apos;s talk
            </a>
          </div>
        </div>
        <aside className="profile-card glass-panel animate-float" aria-label="Profile summary">
          <div className="avatar">AR</div>
          <p className="available">Available for select projects</p>
          <h2>Alex Rivera</h2>
          <p>
            React specialist turning complex workflows into clean, animated,
            conversion-focused web apps.
          </p>
          <div className="stat-grid">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="about" className="content-section glass-panel animate-rise">
        <p className="eyebrow">About</p>
        <div className="two-column">
          <h2>Building interfaces that balance strategy, beauty, and speed.</h2>
          <p>
            I partner with teams to shape frontend foundations, ship smooth user
            journeys, and translate product goals into refined visual systems.
            My approach blends component-driven engineering with thoughtful UX,
            careful accessibility, and measurable performance wins.
          </p>
        </div>
      </section>

      <section id="skills" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Tools I use to craft modern experiences.</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div className="skill-card glass-panel" style={{ '--delay': `${index * 70}ms` }} key={skill}>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>GitHub project cards with production-ready polish.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card glass-panel" key={project.name}>
              <div className="project-topline">
                <span className="repo-icon" aria-hidden="true">
                  ◉
                </span>
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </div>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="repo-meta" aria-label={`${project.stars} stars and ${project.forks} forks`}>
                <span>★ {project.stars}</span>
                <span>⑂ {project.forks}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Recent roles and impact.</h2>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item glass-panel" key={`${item.company}-${item.role}`}>
              <span>{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact glass-panel animate-rise">
        <p className="eyebrow">Contact</p>
        <h2>Have an ambitious interface to build?</h2>
        <p>
          Tell me about your product, launch, or redesign. I&apos;ll help turn it
          into a polished web experience users love.
        </p>
        <div className="contact-links">
          <a className="button primary" href="mailto:hello@example.com">
            hello@example.com
          </a>
          <a className="button secondary" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="button secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
