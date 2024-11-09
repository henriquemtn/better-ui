import React from 'react'

export default function Announcement() {
    return (
        <div className="mx-auto px-4 py-2 bg-gradient-to-r from-blue-500  to-indigo-600 border-gray-300 ">
            <a href="https://github.com/henriquemtn/bunnie-ui" rel="noreferrer" target="_blank" className="flex text-white font-medium items-center justify-center gap-1.5 transition hover:opacity-75">
                <span className="text-sm">Welcome to our first launch, if you enjoy give us a star in Github</span>
                <span aria-hidden="true" role="img">🎉</span>
            </a>
        </div>
    )
}
