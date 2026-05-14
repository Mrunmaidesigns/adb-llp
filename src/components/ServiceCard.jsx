import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ServiceCard({ number, title, description, outcome, items, icon, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group ${className}`}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-accent font-sans font-semibold text-4xl lg:text-5xl">{number}</span>
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl lg:text-2xl font-sans font-semibold text-dark mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      {items && (
        <ul className="space-y-2 mb-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
              <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      )}
      {outcome && (
        <div className="pt-6 border-t border-gray-100">
          <p className="text-sm font-semibold text-dark">
            Outcome: <span className="text-accent font-normal">{outcome}</span>
          </p>
        </div>
      )}
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-6 group-hover:text-accent transition-colors"
      >
        Learn more
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </motion.div>
  )
}
