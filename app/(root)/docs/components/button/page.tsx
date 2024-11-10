'use client';

import Button from '@/components/Button';
import CodeExample from '@/components/CodeExample';
import VerticalMenu from '@/components/VerticalMenu';
import Viewer from '@/components/Viewer';
import React from 'react';

export default function ApplicationUiPage() {
  const introductionItems = [
    { name: 'Introduction', link: '/components' },
  ];

  const componentsItems = [
    { name: 'Button', link: '/docs/components/button' },
  ];

  const sampleJsxCode = `
  <div className="flex gap-4">
    <Button variant="default">Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="success">Success</Button>
  </div>
`;

const sampleHtmlCode = `
  <div class="flex gap-4">
    <button class="bg-blue-500 text-white px-4 py-2 rounded">Default</button>
    <button class="bg-gray-500 text-white px-4 py-2 rounded">Secondary</button>
    <button class="bg-red-500 text-white px-4 py-2 rounded">Danger</button>
    <button class="border border-blue-500 text-blue-500 px-4 py-2 rounded">Outline</button>
    <button class="bg-green-500 text-white px-4 py-2 rounded">Success</button>
  </div>
`;

  return (
    <div className='mx-auto max-w-screen-2xl p-4'>
      <div className='flex flex-row p-4 w-full'>
        <div className='flex flex-col w-[300px] pr-4'>
          <VerticalMenu title='Getting Started' item={introductionItems} />
          <VerticalMenu title='Components' item={componentsItems} />
        </div>
        <Viewer>
          <h1>Button Components</h1>
          <CodeExample htmlCode={sampleHtmlCode} code={sampleJsxCode} />
        </Viewer>
      </div>
    </div>
  );
}
