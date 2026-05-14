import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function PrimaryButton({ children, to, href, onClick, className = '' }) {
  const baseClasses = 'inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-200 group'
  const content = (
    <>
      {children}
      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </>
  )

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={`${baseClasses} ${className}`}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <a href={href} className={`${baseClasses} ${className}`}>
          {content}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {content}
    </motion.button>
  )
}

export function AccentButton({ children, to, href, onClick, className = '' }) {
  const baseClasses = 'inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-200 group'
  const content = (
    <>
      {children}
      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </>
  )

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={`${baseClasses} ${className}`}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <a href={href} className={`${baseClasses} ${className}`}>
          {content}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {content}
    </motion.button>
  )
}

export function OutlineButton({ children, to, href, onClick, className = '' }) {
  const baseClasses = 'inline-flex items-center gap-2 border-2 border-primary/30 hover:border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-200 group'
  const content = (
    <>
      {children}
      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {content}
    </button>
  )
}
