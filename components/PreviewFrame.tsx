import { RefObject } from 'react';

interface PreviewIframeProps {
  showPreview: boolean;
  componentHtml: string;
  componentTitle: string;
  previewWidth?: string;
  previewHeight?: string;
  refIframe: RefObject<HTMLIFrameElement>;
  previewDark: boolean;
}

export default function PreviewIframe({
    showPreview,
    componentHtml,
    componentTitle,
    previewWidth = '100%',
    previewHeight = 'h-[400px] lg:h-[600px]',
    refIframe,
    previewDark,
  }: PreviewIframeProps) {
    const iframeTheme = previewDark ? 'dark:text-white dark:bg-black' : 'text-black bg-white'
    return (
      <div
        {...(!showPreview && {
          hidden: true,
        })}
        className="rounded-md bg-[linear-gradient(45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(-45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(45deg,_transparent_75%,_rgb(249_250_251)_75%),_linear-gradient(-45deg,_transparent_75%,_rgb(249_250_251)_75%)] bg-[length:_20px_20px] [background-position:_0_0,_0_10px,_10px_-10px,_-10px_0px]"
      >
        <iframe
          className={`w-full rounded-md bg-gray-100 dark:bg-black ring-2 ring-gray-900 lg:transition-all ${iframeTheme} ${previewHeight}`}
          loading="lazy"
          srcDoc={componentHtml}
          style={{ maxWidth: previewWidth }}
          title={`${componentTitle} Component`}
          ref={refIframe}
        ></iframe>
      </div>
    )
  }