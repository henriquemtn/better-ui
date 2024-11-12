import React from 'react'

interface ButtonProps {
    children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className='bg-primary text-primary rounded-md py-2 px-4 border hover:bg-primary/90'>
        {children}
    </button>
  )
}
