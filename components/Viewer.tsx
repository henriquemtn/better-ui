import React from 'react'

interface ViewerProps {
  children: React.ReactNode
}

export default function Viewer({ children }: ViewerProps) {
  return (
    <div className='w-full border rounded-md p-4'>
        {children}
    </div>
  )
}
