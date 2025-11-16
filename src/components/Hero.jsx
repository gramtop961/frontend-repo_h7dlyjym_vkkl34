import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/95 pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-3 py-1 text-xs text-purple-700 backdrop-blur">
              <span className="font-semibold">AI-Powered</span>
              <span className="text-gray-300">•</span>
              <span>Delivered in 5 Days</span>
              <span className="text-gray-300">•</span>
              <span>For SaaS Only</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 font-techno leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-neon">Launch a high-converting SaaS landing page in just 5 days — powered by AI.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-5 text-lg md:text-xl text-gray-700">
              I craft stunning, conversion-optimized landing pages for SaaS founders and startups using AI — so you can focus on your product, not your website.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#offer" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition">Get Your Landing Page in 5 Days →</a>
              <p className="text-sm text-gray-600">No templates. No waiting. Just results.</p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="relative hidden md:block">
            <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-xl overflow-hidden">
              <div className="aspect-[16/10] relative">
                <img src="https://images.unsplash.com/photo-1653590590390-771cf729ec44?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBSS1nZW5lcmF0ZWQlMjAzRCUyMHJlbmRlcnxlbnwwfDB8fHwxNzYzMzA0MjA3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="AI-generated 3D render" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-600">
              <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-purple-700 border border-purple-200">AI-Powered</span>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-blue-700 border border-blue-200">Delivered in 5 Days</span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 border border-emerald-200">For SaaS Only</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
