export const metadata = {
  title: 'Skills',
}

const skillCategories = [
  {
    name: 'ML & AI',
    skills: [
      'PyTorch',
      'TensorFlow',
      'HuggingFace',
      'LangChain',
      'LoRA/PEFT',
      'RAG',
      'Transformers',
      'NumPy',
      'Pandas',
    ],
  },
  {
    name: 'Cloud & Data',
    skills: [
      'Apache Spark',
      'Kafka',
      'AWS EMR',
      'AWS S3',
      'AWS Lambda',
      'AWS EC2',
      'AWS SQS',
      'AWS SNS',
      'Snowflake',
      'ETL/ELT',
    ],
  },
  {
    name: 'Languages',
    skills: ['Python', 'SQL', 'Java', 'JavaScript', 'TypeScript', 'Bash/Shell'],
  },
  {
    name: 'DevOps & Tools',
    skills: ['Docker', 'Git/GitHub', 'Jenkins', 'Postman', 'Linux', 'Splunk'],
  },
]

const education = [
  {
    degree: 'MS in Artificial Intelligence',
    school: 'UT Austin',
    period: 'Jan 2024 – May 2026',
    detail: 'GPA 3.9',
  },
  {
    degree: 'BS in Computer Science',
    school: 'University of Idaho',
    period: 'Aug 2017 – Dec 2022',
    detail: '',
  },
]

const certifications = [
  {
    name: 'AWS Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    issued: 'July 2023',
  },
]

export default function SkillsPage() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-[#f5f5f5]">
        Skills
      </h1>

      <div className="space-y-6 mb-10">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <h2 className="text-xs font-mono text-[#a3a3a3] uppercase tracking-widest mb-3">
              {category.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-mono px-3 py-1 rounded-md bg-[#111111] border border-[#222222] text-[#f5f5f5] hover:border-[#60a5fa]/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-xl font-semibold text-[#f5f5f5]">Education</h2>
      <div className="space-y-3 mb-8">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="p-4 rounded-lg bg-[#111111] border border-[#222222]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-[#f5f5f5] font-medium">{edu.degree}</span>
                <span className="text-[#a3a3a3]"> — {edu.school}</span>
              </div>
              <span className="text-[#a3a3a3] text-sm font-mono">
                {edu.period}
              </span>
            </div>
            {edu.detail && (
              <p className="text-[#60a5fa] text-sm mt-1">{edu.detail}</p>
            )}
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-xl font-semibold text-[#f5f5f5]">
        Certifications
      </h2>
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="p-4 rounded-lg bg-[#111111] border border-[#222222]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-[#f5f5f5] font-medium">{cert.name}</span>
              <span className="text-[#a3a3a3] text-sm font-mono">
                Issued {cert.issued}
              </span>
            </div>
            <p className="text-[#a3a3a3] text-sm mt-1">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
