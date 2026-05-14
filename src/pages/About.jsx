import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function About() {
  const values = [
    { number: '01', title: 'Ownership', description: 'We take full responsibility for the outcomes we deliver.' },
    { number: '02', title: 'Execution', description: 'Ideas mean nothing without action. We execute with precision.' },
    { number: '03', title: 'Clarity', description: 'We bring transparency and structure to every engagement.' },
    { number: '04', title: 'Growth', description: 'We are committed to continuous learning and improvement.' },
    { number: '05', title: 'Integrity', description: 'Honesty and ethics are at the core of everything we do.' },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="bg-dark pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">About Us</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-semibold text-white leading-[0.95] mt-4 mb-6">
              Who We <span className="text-accent">Are</span>
            </h1>
            <p className="text-white/50 text-base max-w-2xl leading-relaxed">
              A business transformation firm built on execution, not just advice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Story */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80" alt="Team" className="w-full h-80 lg:h-[500px] object-cover rounded-2xl" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pt-8">
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">Our Story</span>
              <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-dark mt-4 mb-8 leading-[0.95]">
                Building structured businesses since 2018
              </h2>
              <div className="space-y-5 text-gray-500 text-base leading-relaxed mb-12">
                <p>ADB Consulting LLP is a business transformation and consulting firm based in Pune, started in May 2023, as part of ADB Group which was established in 2018.</p>
                <p>We work with growing businesses to build structured, scalable, and well-governed operations across finance, accounting, compliance, HR, and systems.</p>
                <p>Our approach combines advisory with hands-on execution — helping businesses move from fragmented operations to structured environments.</p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-4xl font-sans font-semibold text-primary mb-3">2018</div>
                  <p className="text-gray-400 text-sm">ADB Group Established</p>
                </div>
                <div>
                  <div className="text-4xl font-sans font-semibold text-primary mb-3">2023</div>
                  <p className="text-gray-400 text-sm">ADB Consulting LLP Founded</p>
                </div>
                <div>
                  <div className="text-4xl font-sans font-semibold text-primary mb-3">Pune</div>
                  <p className="text-gray-400 text-sm">Headquartered</p>
                </div>
                <div>
                  <div className="text-4xl font-sans font-semibold text-primary mb-3">6+</div>
                  <p className="text-gray-400 text-sm">Service Areas</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-28 lg:py-40 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">Our Philosophy</span>
              <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-white mt-4 mb-8 leading-[0.95]">
                Innovate to <span className="text-accent">Evolve</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-10 max-w-lg">
                We believe growth without structure creates chaos. Innovation is not just technology — it is building better processes, systems, and controls.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-10 py-5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 group">
                Start Your Transformation
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-0">
              {[
                { from: 'Dependency on individuals', to: 'Process-driven execution' },
                { from: 'Unstructured growth', to: 'Scalable systems' },
                { from: 'Reactive decisions', to: 'Data-driven control' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-8 border-b border-white/10 group">
                  <div>
                    <p className="text-white/30 line-through text-sm mb-2">{item.from}</p>
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <p className="text-white font-sans font-semibold text-2xl">{item.to}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-28 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Our Culture</span>
            <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-dark mt-4 leading-[0.95]">
              What drives us forward
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-10 border border-gray-100 hover:border-accent/30 transition-all duration-300"
              >
                <div className="text-accent font-sans font-semibold text-5xl mb-6">{value.number}</div>
                <h3 className="text-xl font-sans font-semibold text-dark mb-4">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
