'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"
import { Moon, Sun } from 'lucide-react'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
      className='cursor-pointer'
    />
  )

  if (resolvedTheme === 'dark') {
    return (
      <div className='cursor-pointer group flex max-w-[2.25rem] border border-gray-200/40 dark:border-gray-700/40 bg-gray-100/20 dark:bg-gray-800/20 rounded-lg h-9 w-9 items-center justify-center'>
        <Sun className='w-5 h-5 duration-300 dark:inline-block group-hover:rotate-180' onClick={() => setTheme('light')} />
      </div>
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <div className='cursor-pointer group flex max-w-[2.25rem] border border-gray-200/40 dark:border-gray-700/40 bg-gray-100/20 dark:bg-gray-800/20 rounded-lg h-9 w-9 items-center justify-center'>
       <Moon className='w-5 h-5 duration-300 dark:inline-block group-hover:rotate-[360deg]' onClick={() => setTheme('dark')} />
      </div>
    )
  }

}