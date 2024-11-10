import React from 'react'
import CardList from './_components/Card'

export default function ComponentPage() {
    return (
        <div className='container mx-auto max-w-screen-2xl p-4 sm:p-8'>
            <div className='flex items-center text-center flex-col gap-2 py-4'>
                <h1 className='text-3xl font-bold text-[#303030] capitalize'>All BunnieUI Tailwind CSS component</h1>
                <p className='text-[#303030]'>BunnieUI offers a collection of prebuilt <span className='font-bold'>10+ components</span> designed to accelerate your project development. Below is a summary of the available component categories:</p>
            </div>
            <CardList />
        </div>
    )
}
