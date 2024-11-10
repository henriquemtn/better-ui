import Link from 'next/link'

export default function BrandLogo({ fontSize = 'text-sm' }) {
    return (
        <Link href="/">
            <div className={`inline-flex gap-1.5 ${fontSize}`}>
                <span className="text-xl font-medium text-gray-800">Bunnie UI</span>
            </div>
        </Link>
    )
}