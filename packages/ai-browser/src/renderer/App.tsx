import React, { useState } from 'react';
import { TabBar } from './components/TabBar';
import { AddressBar } from './components/AddressBar';
import { BrowserView } from './components/BrowserView';
import { useTabStore } from './store/tabStore';
import './App.css';

export function App() {
  const { tabs, activeTabId, addTab, closeTab, setActiveTab } = useTabStore();
  const [currentUrl, setCurrentUrl] = useState('https://www.google.com');

  const handleNavigate = (url: string) => {
    setCurrentUrl(url);
  };

  const handleNewTab = () => {
    addTab('https://www.google.com', 'New Tab');
  };

  return (
    <div className="app">
      <div className="browser-chrome">
        <TabBar
          tabs={tabs}
          activeTabId={activeTabId}
          onTabSelect={setActiveTab}
          onTabClose={closeTab}
          onNewTab={handleNewTab}
        />
        <AddressBar
          url={currentUrl}
          onNavigate={handleNavigate}
        />
      </div>
      <BrowserView url={currentUrl} />
    </div>
  );
}
