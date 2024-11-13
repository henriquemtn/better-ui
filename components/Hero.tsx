'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1, ease: "linear" }}
            className="text-black dark:text-white">
            <div className="flex flex-col mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:items-center">
                <span className='border rounded-full z-10 py-0.5 px-6 text-sm text-neutral-900 dark:text-white  flex items-center justify-center gap-1.5 mb-4'>
                    ✨ Free Open Source Tailwind CSS Components
                </span>
                <div className="mx-auto max-w-3xl text-center">

                    <h1
                        className="text-black dark:text-white font-extrabold sm:text-5xl"
                    >
                        Components Ready to Use
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-gray-600 dark:text-white sm:text-base/relaxed">
                        BetterUI is a collection of free Tailwind CSS components that can be used in your next project. With a range of components, you can build your next marketing website, admin dashboard, eCommerce store and much more.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="#"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
