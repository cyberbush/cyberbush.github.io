export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        David Bush | AI/ML Engineer
      </h1>
      <p className="mb-4">
        I architect scalable Generative AI systems and high-throughput data pipelines. 
        Currently completing my Master of Science in Artificial Intelligence at the University of Texas at Austin.
      </p>
      
      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4">Experience</h2>
        <ul className="space-y-6">
          <li className="border-l-2 border-neutral-200 pl-4">
            <h3 className="font-medium">Software Engineer @ Capital One</h3>
            <p className="text-neutral-600 text-sm mt-1">
              Led a strategic GenAI initiative using LangChain and ChromaDB to index 400k+ lines of Scala. 
              Engineered Spark-based data pipelines migrating 2B+ transactions, optimizing runtime by over 60%.
            </p>
          </li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4">Featured Projects</h2>
        <ul className="space-y-4">
          <li>
            <a href="/blog/meeting-summarizer" className="text-blue-600 hover:underline font-medium">
              AI Meeting Summarizer
            </a>
            <p className="text-neutral-600 text-sm">NLP pipeline utilizing the Mistral LLM to process transcripts and extract actionable items.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}