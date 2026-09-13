
import logo from "../assets/logo-text.png";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
           
            <img src={logo} alt="Logo" className="h-6 w-auto" />

            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-700 transition">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-700 transition">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-700 transition">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-gray-900 uppercase mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Home</a></li>
              <li><a href="#technologies" className="text-sm text-gray-500 hover:text-gray-900">Technologies</a></li>
              <li><a href="#projects" className="text-sm text-gray-500 hover:text-gray-900">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-gray-900 uppercase mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-sm text-gray-500 hover:text-gray-900">About</a></li>
              <li><a href="#contact" className="text-sm text-gray-500 hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-gray-900 uppercase mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Privacy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
