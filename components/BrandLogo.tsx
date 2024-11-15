import Link from 'next/link'

export default function BrandLogo({ fontSize = 'text-sm' }) {
    return (
        <Link href="/">
            <div className={`inline-flex gap-1.5 ${fontSize}`}>
                <span className="font-medium text-gray-800 dark:text-white">BetterUI</span>

                <span aria-hidden="true" role="img">
                    ✨
                </span>
            </div>
        </Link>
    )
}