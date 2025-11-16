export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="cta">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">Your startup deserves a landing page that sells.</h2>
        <p className="mt-4 text-lg text-gray-700">Get your AI-powered SaaS landing page in 5 days or less.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#offer" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition">Let’s Get Started →</a>
          <a href="#proof" className="text-gray-700 hover:text-gray-900 underline">See Example Pages</a>
        </div>
      </div>
    </section>
  )
}
