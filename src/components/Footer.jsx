export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6 items-center">
        <div>
          <p className="font-semibold text-gray-900">Flames.Blue — AI-powered landing pages</p>
          <p className="text-sm text-gray-600">Handcrafted with AI & strategy. Built to convert.</p>
        </div>
        <div className="text-sm text-gray-600">Contact: hello@example.com</div>
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  )
}
