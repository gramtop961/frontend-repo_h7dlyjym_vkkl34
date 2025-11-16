import { Check } from 'lucide-react'

export default function Offer() {
  const items = [
    '1 Complete Page (Hero to CTA)',
    'Custom AI-optimized Copy + Design',
    'Mobile-Responsive Layout',
    'Delivered in 3–7 Days',
    'Optional integrations (Waitlist, Email, etc.)'
  ]

  return (
    <section className="py-20" id="offer">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get your AI-powered SaaS landing page — starting at $499.</h2>
            <p className="mt-4 text-gray-700">Only 3 client slots open this month — I keep it limited for quality.</p>
            <div className="mt-6 space-y-3">
              {items.map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"><Check size={16} /></span>
                  <span className="text-gray-800">{t}</span>
                </div>
              ))}
            </div>
            <a href="#cta" className="mt-8 inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-white font-semibold shadow hover:bg-black transition">Reserve Your Slot →</a>
            <p className="mt-2 text-sm text-gray-600">Takes less than 60 seconds.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tight">$499</span>
              <span className="text-gray-500">starting</span>
            </div>
            <p className="mt-3 text-gray-600">Includes everything you need to launch with confidence.</p>
            <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition">Reserve Your Slot →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
