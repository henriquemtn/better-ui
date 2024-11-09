import React from 'react'

interface CustomHeroProps {
    flag?: string;
    title: string;
    description: string;
}

export default function Hero({ flag, title, description }: CustomHeroProps) {
    return (
        <section className="text-black">
            <div className="flex flex-col mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:items-center">
                {flag && (
                    <span className='border rounded-full z-10 py-0.5 px-6 text-sm text-neutral-900 flex items-center justify-center gap-1.5 mb-4'>
                        {flag}
                    </span>
                )}
                <div className="mx-auto max-w-3xl text-center">

                    <h1 className="text-black font-extrabold sm:text-5xl">
                        {title}
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-gray-600 sm:text-base/relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}
