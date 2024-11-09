import React from 'react';

interface VerticalMenuProps {
    title: string;
    item: { name: string, link: string }[];
}

export default function VerticalMenu({ title, item }: VerticalMenuProps) {
    return (
        <>
            <h3 className='pb-2 font-semibold'>{title}</h3>
            <ul className='relative after:absolute after:top-0 after:left-3 after:w-px after:h-full after:bg-zinc-200 mb-2'>
                {item.map((menuItem, index) => (
                    <li key={index}>
                        <a
                            href={menuItem.link}
                            className='block relative z-10 rounded-lg px-3 py-2 transition-colors duration-200 group hover:bg-zinc-100 hover:text-zinc-900'
                        >
                            <span className="pl-6 py-0.5 border-l group-hover:border-indigo-500 transition duration-200 border-transparent">
                                {menuItem.name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}
