export default function Process() {
  const steps = [
    {
      title: 'Strategy Call (Day 1)',
      desc: 'We define your product story, target audience, and goals.'
    },
    {
      title: 'AI-Powered Build (Day 2–4)',
      desc: 'I design, write, and optimize your landing page.'
    },
    {
      title: 'Launch & Refine (Day 5–7)',
      desc: 'You get your final high-converting page, ready to go live.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="process">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Here’s how we’ll get your page live in under a week.</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-2xl font-extrabold text-purple-600">{idx + 1}️⃣</div>
              <p className="mt-3 font-semibold text-gray-900">{s.title}</p>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href="#offer" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition">Let’s Start — Get Your Page in 5 Days →</a>
          <p className="mt-3 text-sm text-gray-600">No code. No stress. Just results.</p>
        </div>
      </div>
    </section>
  )
}
