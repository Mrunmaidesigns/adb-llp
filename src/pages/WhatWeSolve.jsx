import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function WhatWeSolve() {
  const problems = ['No visibility on numbers', 'Weak accounting systems', 'Founder dependency', 'No defined processes', 'Compliance risks']
  const solutions = ['Strong accounting foundation', 'Financial clarity', 'Structured systems', 'Defined processes', 'Scalable operations']
  const processSteps = [
    { step: '01', title: 'Understand', description: 'We learn about your business, challenges, and goals.' },
    { step: '02', title: 'Identify Gaps', description: 'We analyze your current operations and identify weaknesses.' },
    { step: '03', title: 'Design Systems', description: 'We create tailored processes and frameworks.' },
    { step: '04', title: 'Implement', description: 'We execute the plan with hands-on support.' },
    { step: '05', title: 'Monitor', description: 'We track progress and optimize continuously.' },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="bg-dark pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">What We Solve</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-semibold text-white leading-[0.95] mt-4 mb-6">
              Growing but feeling <span className="text-accent">messy</span>?
            </h1>
            <p className="text-white/50 text-base max-w-3xl leading-relaxed">
              If your business is growing but feels chaotic, you're not alone. We solve the problems that come with unstructured growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Problems */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">The Challenge</span>
              <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-dark mt-4 mb-12 leading-[0.95]">You are likely facing:</h2>
              <div className="space-y-0">
                {problems.map((problem, i) => (
                  <motion.div
                    key={problem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-5 py-8 border-b border-gray-100"
                  >
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-dark font-sans font-semibold text-lg">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">The Solution</span>
              <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-dark mt-4 mb-12 leading-[0.95]">We solve this by building:</h2>
              <div className="space-y-0">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={solution}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-5 py-8 border-b border-gray-100"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-dark font-sans font-semibold text-lg">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 lg:py-40 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Our Process</span>
            <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-white mt-4 leading-[0.95]">How we work</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-accent font-sans font-semibold text-5xl mb-5">{step.step}</div>
                <h3 className="text-white font-sans font-semibold text-xl mb-4">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-5">
                    <svg className="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Work */}
      <section className="py-28 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Sample Work</span>
            <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-dark mt-4 leading-[0.95] mb-4">What we deliver</h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">Tangible outputs that bring structure and clarity to your business operations.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              { title: 'MIS Reports', description: 'Comprehensive management information systems for data-driven decisions.' },
              { title: 'SOP Documents', description: 'Standard operating procedures that ensure consistency and quality.' },
              { title: 'Process Flows', description: 'Visual process maps that clarify workflows and responsibilities.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-10 border border-gray-100 text-center hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-sans font-semibold text-dark mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-white leading-[0.95] mb-8">Ready to bring structure to your growth?</h2>
            <p className="text-white/70 text-base leading-relaxed mb-12 max-w-2xl mx-auto">Let's discuss how we can help you build a business that runs on systems, not stress.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-dark text-primary hover:text-white px-10 py-5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 group">
              Book a Consultation
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
