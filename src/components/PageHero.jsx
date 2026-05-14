import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, tag }) {
  return (
    <section className="bg-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {tag && (
            <span className="inline-block bg-primary/20 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-6">
              {tag}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-white leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-400 text-lg lg:text-xl max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
