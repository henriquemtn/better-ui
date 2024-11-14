'use client'

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
      { name: 'Announcements', href: '/components/marketing/announcements' },
      { name: 'Banners', href: '/components/marketing/banners' },
    ]
  },
  {
    title: 'Application UI',
    items: [
      { name: 'Buttons', href: '/components/application-ui/buttons' },
      { name: 'Section Headers', href: '/components/application-ui/section-headers' },
    ]
  },
]

export default function Sidenav({ activePath }: { activePath: string }) {
  return (
    <aside className="relative hidden lg:block">
      <div className="fixed inset-x-0 w-full h-full  px-4 border-r border-gray-200 dark:border-gray-800 xl:inset-x-[unset] xl:block xl:max-w-[16rem] xl:top-auto xl:px-0">
        <nav className="h-full overflow-y-auto pb-[17rem] text-gray-600 dark:text-gray-400 text-sm pt-4 pr-4 [&>*]:pt-6 xl:pb-60">
          {navSections.map((section, index) => (
            <div key={index} className="">
              <h3 className="pb-3 text-sm font-semibold text-gray-800 dark:text-neutral-200">{section.title}</h3>
              <ul className="relative after:absolute after:top-0 after:left-3 after:w-px after:h-full after:bg-gray-200">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className={`block relative z-10 rounded-lg px-3 py-2 transition-colors duration-150 group hover:bg-gray-100 hover:dark:bg-gray-900 hover:dark:text-gray-100 hover:text-gray-900 ${
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