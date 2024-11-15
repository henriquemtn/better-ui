'use client'

import { useRef, useState } from 'react'
import { Code, Copy, Check } from 'lucide-react'
import PreviewCode from '@/components/PreviewCode'
import PreviewIframe from './PreviewFrame'
import { componentPreviewHtml } from '@/utils/transformers'

interface Component {
    name: string
    code: string
}

interface ComponentPageProps {
    components: Component[]
    title: string
}

export default function ComponentPage({ components, title }: ComponentPageProps) {
    const [openCode, setOpenCode] = useState<number | null>(null)
    const refIframe = useRef<HTMLIFrameElement>(null)
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
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tailwind CSS {title}</h1>
                <p className="mt-3 text-gray-600 dark:text-gray-200">
                    Beautifully designed, fully responsive, expertly crafted {title} examples
                </p>
            </div>
            <div className="mt-12 space-y-12">
                {components.map((component, index) => (
                    <div key={index}>
                        <div className="items-start justify-between sm:flex">
                            <h3 className="text-base text-gray-600 dark:text-gray-200 font-medium py-4">{component.name}</h3>
                            <div className="flex gap-3 items-center my-3 sm:mt-0">
                                <div className="text-sm">
                                    <button
                                        onClick={() => toggleCode(index)}
                                        className="px-4 py-2 flex items-center gap-x-2 text-sm text-black dark:text-white hover:bg-gray-100 hover:dark:bg-gray-900 hover:dark-bg-gray-800 border rounded-lg shadow-sm transition duration-150"
                                    >
                                        {openCode === index ? 'Hide' : 'Show'} Code
                                        <Code className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-800 rounded-lg">
                            {openCode !== index && (
                                <PreviewIframe
                                    showPreview={true}
                                    componentHtml={componentPreviewHtml(component.code)}
                                    componentTitle="Example Component"
                                    previewWidth="100%"
                                    previewHeight="h-[400px] lg:h-[600px]"
                                    refIframe={refIframe}
                                    previewDark={false}
                                />
                            )}
                            {openCode === index && (
                                <div className="relative">
                                    <PreviewCode showPreview={openCode !== index} componentCode={component.code} codeType='jsx' />
                                    <button
                                        onClick={() => copyCode(component.code, index)}
                                        className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-900 text-black dark:text-white hover:bg-gray-100 hover:dark:bg-gray-800 rounded-md shadow-sm transition duration-150"
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
