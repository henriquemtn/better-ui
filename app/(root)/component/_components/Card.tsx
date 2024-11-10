import React from 'react';

interface CardProps {
    title: string;
    image: string;
    count: number;
    href: string;
}

const cardData = [
    { title: 'Button', image: '▶️', count: 1, href: '/docs/components/button' },
];

export default function CardList() {
    return (
        <div className='mt-7 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {cardData.map((card, index) => (
                <Card key={index} title={card.title} image={card.image} count={card.count} href={card.href} />
            ))}
        </div>
    );
}

function Card({ title, image, count, href }: CardProps) {
    return (
        <a href={href} className="bg-base-100 border-base-content/20 block size-full overflow-hidden rounded-xl border transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md">
            <div className="border-base-content/10 p-4">
                <span>{image}</span>
                <h2 className="text-base-content/90 font-semibold pt-4">{title}</h2>
                <p className='text-gray-400'>{count} components</p>
            </div>
        </a>
    );
}
