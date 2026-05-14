import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "We Don't Just Advise.",
      highlight: "We Execute.",
      subtitle: "We help businesses move from chaos to control — by building structured, scalable, and process-driven organizations.",
      tags: ['Virtual CFO', 'Accounting', 'Systems', 'Governance', 'HR'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop&q=80',
      thumb1: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop&q=80',
      thumb2: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop&q=80',
    },
    {
      title: "Innovate to",
      highlight: "Evolve.",
      subtitle: "Growth without structure creates chaos. We build the systems, processes, and controls that turn ambitious businesses into scalable organizations.",
      tags: ['Strategy', 'Execution', 'Growth', 'Control', 'Results'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop&q=80',
      thumb1: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop&q=80',
      thumb2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&q=80',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const services = [
    { number: '01', title: 'Accounting & Financial Management', description: 'End-to-end accounting support designed for growing businesses.' },
    { number: '02', title: 'Strategic Finance (Virtual CFO)', description: 'Financial control and decision-making support for your business.' },
    { number: '03', title: 'Business Systems & Process Consulting', description: 'SOP design, ERP implementation, and workflow automation.' },
    { number: '04', title: 'Compliance & Financial Governance', description: 'GST, TDS compliance, accounting controls, and audit readiness.' },
    { number: '05', title: 'Internal Audit & Control Review', description: 'Process audits, risk identification, and control improvement.' },
    { number: '06', title: 'HR & People Advisory', description: 'Hiring systems, performance management, and payroll solutions.' },
  ]

  const stats = [
    { value: '50+', label: 'Businesses Transformed', description: 'From chaos to structured operations' },
    { value: '100%', label: 'Execution Focused', description: 'We don\'t just advise, we implement' },
    { value: '6+', label: 'Service Areas', description: 'Comprehensive business solutions' },
    { value: '2018', label: 'Established', description: 'Part of ADB Group since 2018' },
  ]

  const serviceCards = [
    { title: 'Strategy Planning', description: 'We help businesses design effective strategies that drive success while ensuring growth remains sustainable.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80' },
    { title: 'Process Optimization', description: 'Streamline operations, reduce inefficiencies, and maximize resources to boost overall business productivity.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80' },
    { title: 'Growth Consulting', description: 'Unlock new opportunities, expand markets, and achieve consistent growth with our proven consulting expertise.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80' },
  ]

  return (
    <main>
      {/* Hero Section - Areto Style */}
      <section className="relative bg-dark min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="relative order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
                    Innovate to Evolve
                  </span>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-semibold text-white leading-[0.95] mb-6">
                    {slides[currentSlide].title}<br />
                    <span className="text-accent">{slides[currentSlide].highlight}</span>
                  </h1>
                  <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg">
                    {slides[currentSlide].subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {slides[currentSlide].tags.map((tag) => (
                      <span key={tag} className="bg-white/10 text-white/70 text-xs font-medium px-4 py-1.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-10 py-5 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 group">
                    Book a Consultation
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center gap-4 mt-12">
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-10 bg-accent' : 'w-5 bg-white/20 hover:bg-white/40'}`} />
                  ))}
                </div>
                <div className="flex gap-2 ml-4">
                  {slides.map((slide, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-14 h-14 rounded-lg overflow-hidden transition-all duration-300 ${i === currentSlide ? 'ring-2 ring-accent ring-offset-2 ring-offset-dark' : 'opacity-50 hover:opacity-80'}`}
                    >
                      <img src={i === 0 ? slide.thumb1 : slide.thumb2} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block relative order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <img src={slides[currentSlide].image} alt="ADB Consulting" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent"></div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute -bottom-6 -left-6 bg-accent rounded-xl p-6">
                <p className="text-white font-sans font-semibold text-2xl">2018</p>
                <p className="text-white/80 text-xs">Established</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-dark mt-4 mb-6 leading-[0.95]">
              Unlock growth opportunities, streamline operations, and achieve measurable results
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Tailored business consulting solutions designed to transform challenges into lasting success for your organization.
            </p>
          </div>

          <div className="space-y-0">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group border-b border-gray-100 py-10 lg:py-12 hover:bg-gray-50 transition-all duration-300 px-4 -mx-4 lg:px-6 lg:-mx-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 lg:gap-12">
                    <span className="text-accent font-sans font-semibold text-4xl lg:text-5xl">{service.number}</span>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-sans font-semibold text-dark mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-gray-500 text-base">{service.description}</p>
                    </div>
                  </div>
                  <Link to="/services" className="hidden lg:flex w-14 h-14 bg-primary/10 rounded-full items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Feature Card */}
      <section className="py-28 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=800&fit=crop&q=80" alt="Feature" className="w-full h-96 sm:h-[400px] lg:h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 sm:px-12 lg:px-20 max-w-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-sans font-semibold text-white leading-[0.95] mb-6">
                  Empowering leaders to make smarter decisions and drive results
                </h2>
                <p className="text-white/50 text-base leading-relaxed mb-8">
                  Our tailored approach helps businesses simplify challenges, align their goals with execution, and build a stronger foundation for sustainable success.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 bg-white hover:bg-accent text-dark hover:text-white px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 group">
                  About Company
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">Our Clients</span>
              <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-dark mt-4 mb-8 leading-[0.95]">
                Our clients are ambitious businesses that understand the value of efficiency.
              </h2>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 group">
                Work With Us
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-0">
              {[
                { number: '01', name: 'Manufacturing Firm', type: 'Industry', year: '2023' },
                { number: '02', name: 'Tech Startup', type: 'Technology', year: '2023' },
                { number: '03', name: 'Retail Chain', type: 'Commerce', year: '2024' },
                { number: '04', name: 'Healthcare Provider', type: 'Healthcare', year: '2024' },
                { number: '05', name: 'Financial Services', type: 'Finance', year: '2025' },
                { number: '06', name: 'Logistics Company', type: 'Operations', year: '2025' },
              ].map((client, i) => (
                <motion.div
                  key={client.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center justify-between py-6 border-b border-gray-100 group hover:border-accent transition-colors"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-accent font-sans font-semibold text-xl">{client.number}</span>
                    <div>
                      <h4 className="text-lg font-sans font-semibold text-dark group-hover:text-primary transition-colors">{client.name}</h4>
                      <p className="text-gray-400 text-xs">{client.type}</p>
                    </div>
                  </div>
                  <span className="text-gray-300 text-xs font-medium">{client.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Image Cards */}
      <section className="py-28 lg:py-40 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Our Approach</span>
            <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-white mt-4 mb-6 leading-[0.95]">
              Strategic business consulting designed to maximize long-term success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {serviceCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group bg-dark-light rounded-xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-sans font-semibold text-white mb-4">{card.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed mb-6">{card.description}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:text-white transition-colors">
                    Learn more
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-white/70 font-semibold text-xs uppercase tracking-widest">Trust</span>
              <h2 className="text-2xl lg:text-3xl font-sans font-semibold text-white mt-2 leading-[0.95]">
                Join the businesses trusting our consulting solutions
              </h2>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-dark text-primary hover:text-white px-10 py-5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 group flex-shrink-0">
              Get Started
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80" alt="About ADB" className="w-full h-80 lg:h-[450px] object-cover rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10"></div>
            </div>

            <div className="lg:pt-8">
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">About ADB</span>
              <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-dark mt-4 mb-8 leading-[0.95]">
                Achieve sustainable growth through data-driven business consulting expertise
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-10">
                Our consulting experts provide tailored strategies that align with your goals, enhance performance, and deliver measurable results that ensure long-term sustainable business growth.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-10 py-5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 group mb-12">
                Start Consulting Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <div className="space-y-0">
                {['Digital transformation', 'Innovation management', 'Process optimization'].map((item, i) => (
                  <Link key={item} to="/services" className="flex items-center justify-between py-5 border-b border-gray-100 group hover:border-accent transition-colors">
                    <span className="text-lg font-sans font-semibold text-dark group-hover:text-primary transition-colors">{item}</span>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                      <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-28 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">Our Impact</span>
            <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-dark mt-4 mb-6 leading-[0.95]">
              Unlocking business growth with expert consulting solutions
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              We partner with businesses to design smart strategies, optimize operations, and unlock growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-10 text-center border border-gray-100 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="text-5xl font-sans font-semibold text-primary mb-4 group-hover:text-accent transition-colors">{stat.value}</div>
                <h3 className="text-lg font-sans font-semibold text-dark mb-3">{stat.label}</h3>
                <p className="text-gray-400 text-xs">{stat.description}</p>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mt-6 group-hover:bg-accent transition-colors">
                  <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video CTA Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop&q=80" alt="CTA Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/85"></div>
        </div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-10 hover:bg-accent transition-colors cursor-pointer">
              <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-white leading-[0.95] mb-8">
              Let's make great work together.
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-white hover:text-dark text-white px-10 py-5 rounded-full font-semibold text-sm transition-all duration-300 group">
              Get Expert Help
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 lg:py-40 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-sans font-semibold text-white leading-[0.95]">
                Build a business that runs on <span className="text-accent">systems</span> — not stress.
              </h2>
            </div>
            <div>
              <p className="text-white/50 text-base leading-relaxed mb-10">
                Let us help you transform your operations into a structured, scalable, and process-driven organization.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-10 py-5 rounded-full font-semibold text-sm transition-all duration-300 group">
                Book a Consultation
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
