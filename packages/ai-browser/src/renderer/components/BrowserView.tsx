import React from 'react';

interface BrowserViewProps {
  url: string;
}

export function BrowserView({ url }: BrowserViewProps) {
  return (
    <div className="browser-view">
      <webview
        src={url}
        style={{ width: '100%', height: '100%' }}
        allowpopups="true"
      />
    </div>
  );
}
