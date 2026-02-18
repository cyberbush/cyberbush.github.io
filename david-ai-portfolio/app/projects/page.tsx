export const metadata = {
  title: 'Projects',
}

const projects = [
  {
    title: 'AI Meeting Summarizer',
    context: 'Hackathon',
    badge: 'Top 10 of 53 Teams',
    badgeClass: 'bg-[#1e3a5f] text-[#60a5fa] border-[#1e4a7a]',
    description:
      'Built an AI-powered meeting summarization tool that integrates directly with Slack. Uses Mistral LLM to generate concise, actionable summaries from meeting transcripts, surfacing key decisions and action items automatically.',
    tech: ['Mistral LLM', 'Python', 'Slack API', 'LangChain', 'REST API'],
  },
  {
    title: 'ML Breast Cancer Detection',
    context: 'Competition',
    badge: '2nd Place',
    badgeClass: 'bg-[#1a3a2a] text-[#4ade80] border-[#1a4a2a]',
    description:
      'Fine-tuned EfficientNet-B4 with PyTorch to classify breast cancer from histopathology images. Achieved 80.16% accuracy through custom data augmentation, transfer learning, and ensemble techniques.',
    tech: ['PyTorch', 'EfficientNet-B4', 'Python', 'NumPy', 'Transfer Learning'],
  },
  {
    title: 'Agentic Nutritional Meal Planner',
    context: 'Personal Project',
    badge: 'In Development',
    badgeClass: 'bg-[#3a3010] text-[#facc15] border-[#4a4010]',
    description:
      'Full-stack AI application that generates personalized meal plans using an agentic AI pipeline. Incorporates user dietary preferences, nutritional goals, and ingredient availability to produce week-long plans with recipes.',
    tech: ['LangChain', 'Python', 'Next.js', 'TypeScript', 'PostgreSQL'],
  },
]

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-[#f5f5f5]">
        Projects
      </h1>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-5 rounded-lg bg-[#111111] border border-[#222222] hover:border-[#333333] transition-colors"
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h2 className="text-[#f5f5f5] font-semibold text-lg">
                {project.title}
              </h2>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs text-[#a3a3a3] px-2 py-0.5 rounded border border-[#222222] bg-[#0a0a0a]">
                  {project.context}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded border ${project.badgeClass}`}
                >
                  {project.badge}
                </span>
              </div>
            </div>

            <p className="text-[#a3a3a3] text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-[#0a0a0a] border border-[#222222] text-[#a3a3a3]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
