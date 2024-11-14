'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1, ease: "linear" }}
            className="text-black dark:text-white">
            <div className="flex flex-col mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:items-center">
                <span className='border rounded-full z-10 py-0.5 px-6 text-sm text-neutral-900 dark:text-white  flex items-center justify-center gap-1.5'>
                    ✨ Free Open Source Tailwind CSS Components
                </span>
                <div className="mx-auto max-w-3xl text-center">

                    <h1
                        className="mt-8 text-3xl font-bold sm:text-4xl text-blue-950 dark:text-white lg:text-5xl xl:text-6xl"
                    >
                        Components Ready to Use
                    </h1>

                    <p className="mt-5 text-gray-700 lg:mt-8 sm:text-lg dark:text-gray-200">
                        BetterUI is a collection of free Tailwind CSS components that can be used in your next project. With a range of components, you can build your next marketing website, admin dashboard, eCommerce store and much more.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="relative inline-block w-full p-px rounded-lg sm:w-auto group h-11 bg-gradient-to-r from-purple-600 to-sky-500 dark:from-purple-600 dark:to-blue-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:to-sky-400 dark:before:from-purple-600 dark:before:to-sky-500 before:scale-75 before:opacity-50 before:rounded-md before:blur-lg before:transition before:duration-300 active:before:scale-90 focus:before:scale-90 focus:before:opacity-75 hover:before:scale-100 hover:before:opacity-100"
                            href="/components"
                        >
                            <p className='relative flex justify-center h-full text-sm font-medium items-center text-white tracking-wide bg-gray-950 px-[calc(1.5rem-1px)] rounded-[calc(0.5rem-1px)] group-hover:bg-gray-900 transition duration-300'>Browse Components</p>
                        </a>

                        <a
                            className="flex items-center justify-center px-6 mt-4 text-sm font-medium tracking-wide text-gray-700 capitalize transition-all duration-200 transform border border-gray-300 rounded-lg sm:mt-0 gap-x-2 h-11 dark:text-white hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 focus:ring focus:ring-blue-300 dark:focus:ring-white/10 focus:ring-opacity-80"
                            href="/templates"
                        >
                                Check Templates
                                <ArrowRight className="inline-block w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
