export default function Proof() {
  return (
    <section className="py-20" id="proof">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Real results from real startups.</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-purple-100 via-blue-100 to-amber-100" />
            </div>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-900 font-medium">“Our old page wasn’t converting. After this redesign, our demo requests shot up 3x.”</p>
            <p className="mt-3 text-sm text-gray-600">— Arjun, Founder of FlowSync</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-900 font-medium">“We cut design time by 90% and launched in days, not months.”</p>
            <p className="mt-3 text-sm text-gray-600">— Maya, CTO of SignalWave</p>
          </div>
        </div>
      </div>
    </section>
  )
}
