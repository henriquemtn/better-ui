import VerticalMenu from '@/components/VerticalMenu';
import React from 'react';

export default function ApplicationUiPage() {
  const introductionItems = [
    { name: 'Introduction', link: '/components' },
  ];

  const marketingItems = [
    { name: 'Banner', link: '/components/banner' },
    { name: 'Hero Sections', link: '/components/hero' },
    { name: 'Team Section', link: '/components/team-section' },
    { name: 'Logo Grid', link: '/components/logo-grid' },
    { name: '404 Page', link: '/components/404-pages' },
    { name: 'FAQs', link: '/components/faqs' },
  ];

  return (
    <div className='mx-auto max-w-7xl'>
      <div className='flex flex-col pt-4 md:max-w-[300px]'>
        <VerticalMenu title='Getting Started' item={introductionItems} />
        <VerticalMenu title='Marketing UI' item={marketingItems} />
      </div>
    </div>
  );
}
