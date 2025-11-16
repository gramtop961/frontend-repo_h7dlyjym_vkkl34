export default function Founder() {
  return (
    <section className="py-20" id="founder">
      <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Hey, I’m [Your Name]. I help SaaS founders get more signups — fast.</h2>
          <p className="mt-4 text-gray-700">I’ve spent years studying how top startups design, write, and launch high-performing landing pages. Now I use AI and conversion psychology to deliver that same quality — fast, affordable, and startup-ready.</p>
          <a href="#cta" className="mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition">Book a Free Call →</a>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm h-48" />
      </div>
    </section>
  )
}
