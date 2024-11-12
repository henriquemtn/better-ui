import React from 'react'

export default function Announcement() {
    return (
        <div className="mx-auto px-4 py-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 border-gray-300 ">
            <a href="https://github.com/henriquemtn/better-ui" rel="noreferrer" target="_blank" className="flex text-white font-medium items-center justify-center gap-1.5 transition hover:opacity-75">
                <span className="text-base/none">Enjoy BetterUI? Give it a star on GitHub</span>
                <span aria-hidden="true" role="img">🎉</span>
            </a>
        </div>
    )
}
