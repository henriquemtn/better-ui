import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className='bg-primary text-primary rounded-md py-2 px-4 border hover:bg-primary/90'>
        {children}
    </button>
  )
}
