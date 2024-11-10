'use client'

import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import GithubSocial from './GithubSocial'
import HeaderMenu from './HeaderMenu'
import HeaderMenuLinks from './HeaderMenuLinks'
import Container from './Container'
import BrandLogo from './BrandLogo'
import Announcement from './Announcement'

export default function Header() {
  const routerPathname = usePathname()

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => setShowMenu(false), [routerPathname])

  const menuLinks = [
    {
      title: 'Components',
      href: '/component/',
    },
    {
      title: 'Templates',
      href: '/templates/',
    },
    {
      title: 'Playground',
      href: '/playground/',
    },
  ]

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
      <Announcement />
      <Container classNames="relative flex h-16 items-center justify-between gap-4 sm:gap-8">
        <div className="flex w-full items-center gap-4">
          <BrandLogo />
        </div>

        <div className="flex w-full items-center justify-center gap-4">
          <HeaderMenuLinks menuLinks={menuLinks} navClass="hidden md:block" ulClass="space-x-4 flex" />
        </div>

        <div className="flex items-center w-full justify-end gap-2 sm:gap-4">
          <GithubSocial />
          <HeaderMenu showMenu={showMenu} handleSetShowMenu={setShowMenu} menuLinks={menuLinks} />
        </div>
      </Container>
    </header>
  )
}