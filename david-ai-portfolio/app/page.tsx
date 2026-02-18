import { Typewriter } from './components/typewriter'

export default function Page() {
  return (
    <section className="mt-8">
      <p className="text-[#a3a3a3] text-lg mb-2">Hi, I'm</p>
      <h1 className="mb-4 text-5xl font-bold tracking-tight text-[#f5f5f5]">
        David Bush
      </h1>
      <div className="mb-6 text-2xl h-9">
        <Typewriter />
      </div>
      <p className="mb-8 text-[#a3a3a3] text-lg leading-relaxed max-w-lg">
        Building intelligent systems at Capital One — from ML pipelines to GenAI
        applications. Pursuing my MS in AI at UT Austin.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="/projects"
          className="px-4 py-2 bg-[#60a5fa] hover:bg-[#93c5fd] text-[#0a0a0a] font-medium rounded-md transition-colors"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-[#222222] bg-[#111111] hover:border-[#60a5fa] text-[#f5f5f5] font-medium rounded-md transition-colors"
        >
          Resume ↓
        </a>
        <a
          href="mailto:cyberbush3@gmail.com"
          className="px-4 py-2 border border-[#222222] bg-[#111111] hover:border-[#60a5fa] text-[#a3a3a3] font-medium rounded-md transition-colors"
        >
          Contact
        </a>
      </div>
    </section>
  )
}
