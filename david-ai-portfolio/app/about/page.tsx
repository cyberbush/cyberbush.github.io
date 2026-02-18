export const metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-[#f5f5f5]">
        About
      </h1>

      <div className="mb-8 space-y-4 text-[#a3a3a3] leading-relaxed">
        <p>
          I'm David Bush, an AI/ML Engineer at Capital One and a graduate
          student pursuing my MS in Artificial Intelligence at UT Austin (GPA
          3.9, expected May 2026).
        </p>
        <p>
          My work sits at the intersection of machine learning and software
          engineering — building distributed data pipelines, deploying GenAI
          solutions, and developing ML models that drive real business impact. I
          care about building systems that are not just technically sound, but
          actually useful.
        </p>
        <p>
          I hold an AWS Solutions Architect – Associate certification and a BS in
          Computer Science from the University of Idaho, where I laid the
          groundwork for my engineering career.
        </p>
      </div>

      <h2 className="mb-4 text-xl font-semibold text-[#f5f5f5]">Interests</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            title: 'Outdoors',
            description:
              'Hiking, camping, and exploring mountain ranges and the Pacific Northwest.',
            icon: '🏔',
          },
          {
            title: 'Travel',
            description:
              'Exploring new places and experiencing different cultures around the world.',
            icon: '✈️',
          },
          {
            title: 'Sports',
            description:
              'College football fan and recreational sports enthusiast.',
            icon: '🏈',
          },
        ].map((interest) => (
          <div
            key={interest.title}
            className="p-4 rounded-lg bg-[#111111] border border-[#222222]"
          >
            <div className="text-2xl mb-2">{interest.icon}</div>
            <h3 className="text-[#f5f5f5] font-medium mb-1">
              {interest.title}
            </h3>
            <p className="text-[#a3a3a3] text-sm">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
