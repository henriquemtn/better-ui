import Link from 'next/link'

interface MenuLink {
  href: string;
  title: string;
}

interface HeaderMenuLinksProps {
  menuLinks: MenuLink[];
  navClass?: string;
  ulClass?: string;
}

export default function HeaderMenuLinks({ menuLinks, navClass = '', ulClass = '' }: HeaderMenuLinksProps) {
  return (
    <nav className={navClass}>
      <ul className={ulClass}>
        {menuLinks.map(({ href, title }) => {
          return (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex items-center gap-1 text-base font-medium text-gray-800 hover:opacity-75"
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}