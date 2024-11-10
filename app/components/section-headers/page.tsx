'use client'

import { useState } from 'react'
import { Code, Copy, Check } from 'lucide-react'
import components from './code'

export default function SectionHeaders() {
  const [openCode, setOpenCode] = useState<number | null>(null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const toggleCode = (index: number) => {
    setOpenCode(openCode === index ? null : index)
  }

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    })
  }

  return (
    <div className="max-w-7xl mx-auto overflow-hidden mb-12 xl:px-8 pt-2">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tailwind CSS Section Headers</h1>
        <p className="mt-3 text-gray-600">
          Beautifully designed, fully responsive, expertly crafted section header examples
        </p>
      </div>
      <div className="mt-12 space-y-12">
        {components.map((component, index) => (
          <div key={index}>
            <div className="items-start justify-between sm:flex">
              <h3 className="text-sm text-gray-600 font-medium py-4">{component.name}</h3>
              <div className="flex gap-3 items-center my-3 sm:mt-0">
                <div className="text-sm">
                  <button
                    onClick={() => toggleCode(index)}
                    className="px-4 py-2 flex items-center gap-x-2 text-sm text-black hover:bg-gray-300 border rounded-lg shadow-sm transition duration-150"
                  >
                    {openCode === index ? 'Hide' : 'Show'} Code
                    <Code className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden border border-gray-200 rounded-lg">
              {openCode !== index && (
                <div className="relative max-w-full min-w-full h-auto sm:min-w-[400px]">
                  {component.component}
                </div>
              )}
              {openCode === index && (
                <div className="relative">
                  <pre className="p-4 bg-gray-100 rounded-lg overflow-x-auto">
                    <code className="text-sm text-gray-800">{component.code}</code>
                  </pre>
                  <button
                    onClick={() => copyCode(component.code, index)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-md shadow-sm hover:bg-gray-100 transition duration-150"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}