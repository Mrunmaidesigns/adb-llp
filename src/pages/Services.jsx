import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Accounting & Financial Management',
      description: 'End-to-end accounting support designed for growing businesses.',
      items: ['Day-to-day accounting and bookkeeping', 'Bank and ledger reconciliations', 'Preparation of financial statements', 'Support till finalization', 'Coordination for audits'],
      outcome: 'Accurate books, audit-ready financials, and complete financial clarity.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
      deliveryModel: 'Onsite, Hybrid, Offsite',
    },
    {
      number: '02',
      title: 'Strategic Finance (Virtual CFO)',
      description: 'Financial control and decision-making support for your business.',
      items: ['MIS & dashboards', 'Cash flow management', 'Profitability analysis', 'Financial planning'],
      outcome: 'Better decisions and controlled growth.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    },
    {
      number: '03',
      title: 'Business Systems & Process Consulting',
      description: 'Building process-driven operations through structured systems.',
      items: ['SOP design', 'ERP implementation', 'Workflow automation'],
      outcome: 'Process-driven operations.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
    },
    {
      number: '04',
      title: 'Compliance & Financial Governance',
      description: 'Ensuring your business stays compliant and well-governed.',
      items: ['GST, TDS compliance', 'Accounting controls', 'Audit readiness'],
      outcome: 'Compliance and structured governance.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80',
    },
    {
      number: '05',
      title: 'Internal Audit & Control Review',
      description: 'Identifying risks and strengthening your control framework.',
      items: ['Process audits', 'Risk identification', 'Control improvement'],
      outcome: 'Reduced risk and stronger systems.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop&q=80',
    },
    {
      number: '06',
      title: 'HR & People Advisory',
      description: 'Building structured and scalable teams for your business.',
      items: ['Hiring systems', 'Performance management', 'Payroll'],
      outcome: 'Structured and scalable teams.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&q=80',
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="bg-dark pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Our Services</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-semibold text-white leading-[0.95] mt-4 mb-6">
              What We <span className="text-accent">Offer</span>
            </h1>
            <p className="text-white/50 text-base max-w-3xl leading-relaxed">
              Comprehensive consulting solutions designed to transform your business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Services - Alternating Layout */}
      {services.map((service, i) => (
        <section key={service.number} className={`py-28 lg:py-40 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={i % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="relative">
                  <img src={service.image} alt={service.title} className="w-full h-80 lg:h-[450px] object-cover rounded-2xl" />
                  <div className="absolute -bottom-6 -left-6 bg-accent rounded-xl p-6">
                    <p className="text-white font-sans font-semibold text-2xl">{service.number}</p>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={i % 2 === 1 ? 'lg:order-1' : ''}
              >
                <span className="text-accent font-semibold text-xs uppercase tracking-widest">Service {service.number}</span>
                <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-dark mt-4 mb-8 leading-[0.95]">
                  {service.title}
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-10">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-500 text-base">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {service.deliveryModel && (
                  <div className="mb-8">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Delivery Model</p>
                    <p className="text-base text-dark font-sans font-semibold">{service.deliveryModel}</p>
                  </div>
                )}

                <div className="pt-8 border-t border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Outcome</p>
                  <p className="text-base text-dark font-sans font-semibold">{service.outcome}</p>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-10 py-5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 group mt-10">
                  Get Started
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-28 lg:py-40 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-white leading-[0.95] mb-8">
              Ready to transform your <span className="text-accent">business</span>?
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help you build structured, scalable, and process-driven operations.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-10 py-5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 group">
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
