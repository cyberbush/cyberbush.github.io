export const metadata = {
  title: 'Experience',
}

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Capital One',
    period: 'Feb 2023 – Present',
    bullets: [
      'Developed and deployed production GenAI solutions using LangChain, RAG pipelines, and LLMs to automate internal workflows',
      'Built and maintained distributed data pipelines processing millions of records daily using Apache Spark, Kafka, and AWS services (EMR, S3, Lambda)',
      'Collaborated with ML teams to integrate PyTorch models into production systems with monitoring and observability via Splunk',
      'Led development of ETL/ELT processes on Snowflake and AWS, reducing data latency significantly',
      'Mentored junior engineers and contributed to architecture decisions on the team',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Capital One',
    period: 'Jun 2022 – Aug 2022',
    bullets: [
      'Developed microservices and RESTful APIs using Java and Python in an Agile environment',
      'Contributed to internal tooling and automation scripts that improved team productivity',
      'Gained hands-on experience with AWS cloud infrastructure and CI/CD pipelines with Jenkins',
    ],
  },
]

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-[#f5f5f5]">
        Experience
      </h1>

      <div className="relative">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-6 pb-10 border-l border-[#222222] last:pb-0"
          >
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#60a5fa] border-2 border-[#0a0a0a]" />

            <div className="mb-1 flex flex-wrap items-baseline gap-2">
              <h2 className="text-[#f5f5f5] font-semibold text-lg">
                {exp.title}
              </h2>
              <span className="text-[#60a5fa] font-medium">{exp.company}</span>
            </div>
            <p className="text-[#a3a3a3] text-sm mb-4 font-mono">
              {exp.period}
            </p>

            <ul className="space-y-2">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-[#a3a3a3] text-sm flex gap-2">
                  <span className="text-[#60a5fa] mt-0.5 shrink-0">›</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
