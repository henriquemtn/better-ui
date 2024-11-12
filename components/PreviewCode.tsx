import { useEffect, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min'

interface PreviewCodeProps {
  showPreview: boolean;
  componentCode?: string;
  codeType?: 'html' | 'vue' | 'jsx';
}

export default function PreviewCode({ showPreview, componentCode = '', codeType = 'html' }: PreviewCodeProps) {
  const [prismClass, setPrismClass] = useState('language-html')

  useEffect(() => {
    Prism.highlightAll();
  }, [componentCode]);

  useEffect(() => {
    switch (codeType) {
      case 'html':
        setPrismClass('language-html');
        break;
      case 'vue':
        setPrismClass('language-html');
        break;
      case 'jsx':
        setPrismClass('language-jsx');
        break;
    }
  }, [codeType]);

  return (
    <div style={{ display: showPreview ? 'none' : 'block' }}>
      <pre className="h-full overflow-auto rounded-md p-4 ring-2 ring-gray-900">
        <code className={prismClass}>{componentCode}</code>
      </pre>
    </div>
  )
}
