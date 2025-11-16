import { Check } from 'lucide-react'

const bullets = [
  { title: 'AI-Powered Design & Copy', desc: 'Every section optimized for clarity and conversion.' },
  { title: 'Delivered in 3–7 Days', desc: 'From idea to live page in less than a week.' },
  { title: 'Modern SaaS Aesthetic', desc: 'Clean, bold, investor-ready design.' },
  { title: 'Conversion Psychology', desc: 'Copy that turns visitors into signups and demos.' },
  { title: 'Built for SaaS & Startups Only', desc: 'I don’t do eCommerce or personal sites.' },
]

export default function Promise() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="promise">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">I build startup-level landing pages that sell — fast.</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {bullets.map((b) => (
            <div key={b.title} className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="mt-1 shrink-0">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Check size={18} />
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{b.title}</p>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-gray-700 max-w-3xl">This isn’t another “pretty template.” It’s a custom-built, data-informed, high-converting sales engine for your SaaS.</p>
      </div>
    </section>
  )
}
