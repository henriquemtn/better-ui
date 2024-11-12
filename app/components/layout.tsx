'use client'

import { usePathname } from 'next/navigation'
import Sidenav from "@/components/Sidenav"

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
  
    return (
      <div className="max-w-screen-2xl mx-auto">
        <Sidenav activePath={pathname} />
        <main className="flex-1 p-8 ml-0 xl:ml-64">
          {children}
        </main>
      </div>
    )
  }