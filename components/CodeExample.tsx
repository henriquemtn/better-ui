import React, { useState } from 'react';
import Button from './Button';

interface CodeExampleProps {
  code: string;
  htmlCode?: string;
  language?: string;
}

export default function CodeExample({ code, htmlCode, language = "jsx" }: CodeExampleProps) {
  const [showCode, setShowCode] = useState(false);
  const [isJsx, setIsJsx] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(isJsx ? code : htmlCode || code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative pt-4 text-white">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowCode(!showCode)}
          className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600"
        >
          {showCode ? "👀 Ver Componentes" : "👀 Ver Código"}
        </button>
        <button
          onClick={() => setIsJsx(!isJsx)}
          className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600"
        >
          {isJsx ? "Ver HTML" : "Ver JSX"}
        </button>
        <button
          onClick={handleCopy}
          className="bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600"
        >
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
      {showCode ? (
        <pre className={`language-${language} bg-gray-900 h-[400px] overflow-auto rounded-md`} tabIndex={0}>
          <code className={`language-${language}`}>
            {isJsx ? code : htmlCode}
          </code>
        </pre>
      ) : (
        <div className="flex gap-4 bg-white rounded-md">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="success">Success</Button>
        </div>
      )}
    </div>
  );
}
