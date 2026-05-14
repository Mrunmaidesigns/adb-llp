import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-20 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-sans font-semibold text-lg">A</span>
                </div>
                <span className="font-sans font-semibold text-lg tracking-tight">ADB Consulting</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
                We help businesses build structured, scalable, and process-driven organizations.
              </p>
              <p className="text-accent font-sans font-semibold text-sm">Innovate to Evolve</p>
            </div>

            <div>
              <h4 className="text-white font-sans font-semibold text-base mb-4">Subscribe to our newsletter</h4>
              <p className="text-white/50 text-sm mb-4">Stay updated with our latest insights and strategies.</p>
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                />
                <button type="submit" className="bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-white font-sans font-semibold text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/50 hover:text-accent transition-colors text-xs">Home</Link></li>
              <li><Link to="/about" className="text-white/50 hover:text-accent transition-colors text-xs">About</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-accent transition-colors text-xs">Services</Link></li>
              <li><Link to="/what-we-solve" className="text-white/50 hover:text-accent transition-colors text-xs">What We Solve</Link></li>
              <li><Link to="/contact" className="text-white/50 hover:text-accent transition-colors text-xs">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-sans font-semibold text-sm mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-white/50 hover:text-accent transition-colors text-xs">Accounting & Finance</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-accent transition-colors text-xs">Virtual CFO</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-accent transition-colors text-xs">Process Consulting</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-accent transition-colors text-xs">Compliance & Governance</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-accent transition-colors text-xs">HR Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-sans font-semibold text-sm mb-6">Address</h4>
            <p className="text-white/50 text-xs leading-relaxed">
              514, Siddharth Towers – A<br />
              Kothrud, Pune – 411038
            </p>
          </div>

          <div>
            <h4 className="text-white font-sans font-semibold text-sm mb-6">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <h4 className="text-white font-sans font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:info@adbco.in" className="text-white/50 hover:text-accent transition-colors text-xs">info@adbco.in</a></li>
              <li><a href="tel:+91" className="text-white/50 hover:text-accent transition-colors text-xs">+91</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} ADB Consulting LLP. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Designed with precision. Built for growth.
          </p>
        </div>
      </div>
    </footer>
  )
}
