import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-dark pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-semibold text-white leading-[0.95] mt-4 mb-6">
              Let's Build Something <span className="text-accent">Structured</span>
            </h1>
            <p className="text-white/50 text-base max-w-3xl leading-relaxed">
              Ready to transform your business? Reach out to us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Offices */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">Our Offices</span>
              <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-dark mt-4 mb-12 leading-[0.95]">Contact Information</h2>

              <div className="space-y-0">
                <div className="flex items-start gap-5 py-10 border-b border-gray-100">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-dark text-xl mb-3">Registered Office</h3>
                    <p className="text-gray-500 text-base leading-relaxed">ADB Consulting LLP<br />514, Siddharth Towers – A<br />Kothrud, Pune – 411038</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 py-10 border-b border-gray-100">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-dark text-xl mb-3">Operations Office</h3>
                    <p className="text-gray-500 text-base leading-relaxed">7, Megha Apartments<br />Kothrud, Pune – 411038</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">Get in Touch</span>
              <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-dark mt-4 mb-12 leading-[0.95]">Reach Out</h2>

              <div className="space-y-0">
                <div className="flex items-center gap-5 py-10 border-b border-gray-100">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Phone</p>
                    <p className="text-dark font-sans font-semibold text-xl">+91</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 py-10 border-b border-gray-100">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Email</p>
                    <a href="mailto:info@adbco.in" className="text-primary font-sans font-semibold text-xl hover:text-accent transition-colors">info@adbco.in</a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-10 py-5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 group">
                  Book a Consultation
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="relative py-28 lg:py-40 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">Careers</span>
              <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-white mt-4 mb-10 leading-[0.95]">
                Join Our <span className="text-accent">Team</span>
              </h2>
              <div className="space-y-5 text-white/50 text-base leading-relaxed">
                <p>At ADB Consulting, you don't just do routine work.</p>
                <p>You work with founders, build systems, and solve real problems.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="text-white font-sans font-semibold text-2xl mb-10">We are looking for people who:</h3>
              <div className="space-y-0 mb-12">
                {['Take ownership', 'Want growth', 'Can execute'].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 py-8 border-b border-white/10">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-white font-sans font-semibold text-lg">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 rounded-xl p-10 border border-white/10 mb-10">
                <p className="text-white/60 text-base mb-3">If you want comfort, this is not the place.</p>
                <p className="text-accent font-sans font-semibold text-2xl">If you want growth, you will fit here.</p>
              </div>

              <a href="mailto:info@adbco.in" className="inline-flex items-center gap-2 bg-accent hover:bg-white hover:text-dark text-white px-10 py-5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 group">
                Apply Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
