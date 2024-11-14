'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ComponentsPage() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3}}
    >
      <h3 className='text-xl mb-4 font-semibold'>Application UI</h3>
      <div className='grid space-x-2 grid-cols-5'>
      <a href="/components/application-ui/buttons" className="p-px hover:scale-[1.02] transition-all duration-200 group rounded-xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-800 dark:to-gray-900/80 hover:from-blue-300 dark:hover:bg-blue-400">
        <div className="p-[calc(0.5rem-1px)] rounded-[calc(0.75rem-1px)] bg-white dark:bg-gray-950/80 dark:group-hover:bg-gray-950/70">
          <span>▶️</span>
          <div className="flex items-start justify-between px-2 pt-4 pb-2" />
          <h3 className="text-lg font-medium transition-colors duration-200 text-blue-950 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-600">Buttons</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">1 components
          </p>
        </div>
      </a>
      <a href="/components/application-ui/section-headers" className="p-px hover:scale-[1.02] transition-all duration-200 group rounded-xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-800 dark:to-gray-900/80 hover:from-blue-300 dark:hover:bg-blue-400">
        <div className="p-[calc(0.5rem-1px)] rounded-[calc(0.75rem-1px)] bg-white dark:bg-gray-950/80 dark:group-hover:bg-gray-950/70">
          <span>📦</span>
          <div className="flex items-start justify-between px-2 pt-4 pb-2" />
          <h3 className="text-lg font-medium transition-colors duration-200 text-blue-950 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-600">Section Headers</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">5 components
          </p>
        </div>
      </a>
    </div>
    </motion.div>
  )
}
