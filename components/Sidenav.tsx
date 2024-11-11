'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import Link from 'next/link'

type NavItem = {
  name: string
  href: string
}

type NavSection = {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Introduction', href: '/components/introduction' },
    ]
  },
  {
    title: 'Marketing UI',
    items: [
      { name: 'Banners', href: '/components/banners' },
      { name: 'CTA Sections', href: '/components/cta-sections' },
      { name: 'Team Sections', href: '/components/team-sections' },
      { name: 'Contact Sections', href: '/components/contact-sections' },
      { name: 'Footers', href: '/components/footers' },
      { name: 'Logo Grid', href: '/components/logo-grid' },
      { name: '404 Pages', href: '/components/404-pages' },
      { name: 'Hero Sections', href: '/components/heroes' },
      { name: 'FAQs', href: '/components/faqs' },
      { name: 'Feature Sections', href: '/components/feature-sections' },
      { name: 'Pricing Sections', href: '/components/pricing-sections' },
      { name: 'Testimonials', href: '/components/testimonials' },
      { name: 'Stats', href: '/components/stats' },
      { name: 'Newsletter Sections', href: '/components/newsletters' },
    ]
  },
  {
    title: 'Application UI',
    items: [
      { name: 'Inputs', href: '/components/inputs' },
      { name: 'Tables', href: '/components/tables' },
      { name: 'Paginations', href: '/components/paginations' },
      { name: 'Cards', href: '/components/cards' },
      { name: 'Alerts', href: '/components/alerts' },
      { name: 'Section Headers', href: '/components/section-headers' },
      { name: 'Steps', href: '/components/steps' },
      { name: 'Buttons', href: '/components/buttons' },
      { name: 'Tabs', href: '/components/tabs' },
      { name: 'Navbars', href: '/components/navbars' },
      { name: 'Select Menus', href: '/components/select-menus' },
      { name: 'Modals', href: '/components/modals' },
      { name: 'Avatars', href: '/components/avatars' },
      { name: 'Authentication', href: '/components/authentication' },
      { name: 'Sidebars', href: '/components/sidebars' },
      { name: 'Radio Groups', href: '/components/radio-groups' },
      { name: 'Context Menu', href: '/components/context-menus' },
    ]
  },
]

export default function Sidenav({ activePath }: { activePath: string }) {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <aside className="relative  ">
      <div className="fixed inset-x-0 w-full h-full  px-4 border-r border-gray-200 xl:inset-x-[unset] xl:block xl:max-w-[16rem] xl:top-auto xl:px-0">
        <nav className="h-full overflow-y-auto pb-[17rem] text-gray-600 text-sm pt-4 pr-4 [&>*]:pt-6 xl:pb-60">
          {navSections.map((section, index) => (
            <div key={index} className="">
              <h3 className="pb-3 text-sm font-semibold text-gray-800 dark:text-neutral-200">{section.title}</h3>
              <ul className="relative after:absolute after:top-0 after:left-3 after:w-px after:h-full after:bg-gray-200">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className={`block relative z-10 rounded-lg px-3 py-2 transition-colors duration-150 group hover:bg-gray-100 hover:text-gray-900 ${
                        activePath === item.href
                          ? 'bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-medium'
                          : ''
                      }`}
                    >
                      <span className={`pl-6 py-0.5 border-l group-hover:border-blue-500 duration-150 ${
                        activePath === item.href ? 'border-blue-500' : 'border-transparent'
                      }`}>
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}