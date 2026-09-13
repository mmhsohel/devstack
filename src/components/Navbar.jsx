import { useState } from 'react'
import logo from "../assets/logo-text.png";

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="navbar-sticky border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
             <img src={logo} alt="Logo" className="h-8 w-auto" />                  
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

  
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-1.5">
              Sign In
            </button>
            <button className="btn-brand text-sm font-medium px-4 py-2 rounded-full shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      
        {open && (
          <div className="lg:hidden pb-4 border-t border-gray-100 pt-3">
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
