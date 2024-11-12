'use client'

import React from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation'

export default function ComingSoon() {
    const navigate = useRouter().push
    return (
        <div className='mx-auto max-w-screen-2xl'>
            <div className='flex flex-col gap-2 justify-center items-center pt-20'>
                <h1 className='text-3xl'>Em breve..</h1>
                <p>Essa página ainda está em construção</p>
                <Button onClick={() => navigate('/')}>Voltar para a página inicial</Button>
            </div>
        </div>
    )
}
