'use client'

import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import HeaderMenu from './HeaderMenu'
import HeaderMenuLinks from './HeaderMenuLinks'
import Container from './Container'
import BrandLogo from './BrandLogo'
import Announcement from './Announcement'
import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  const routerPathname = usePathname()

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => setShowMenu(false), [routerPathname])

  const menuLinks = [
    {
      title: 'Components',
      href: '/components/',
    },
    {
      title: 'Templates',
      href: '/templates',
    },
    {
      title: 'Releases',
      href: '/releases',
    },
  ]

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <Announcement />
      <Container classNames="relative flex h-16 items-center justify-between gap-4 sm:gap-8">
        <div className="flex items-center gap-4">
          <BrandLogo />
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-x-8">
          <HeaderMenuLinks menuLinks={menuLinks} navClass="hidden md:block" ulClass="gap-8 flex" />

          <ThemeSwitch />

          <HeaderMenu showMenu={showMenu} handleSetShowMenu={setShowMenu} menuLinks={menuLinks} />
        </div>
      </Container>
    </header>
  )
}