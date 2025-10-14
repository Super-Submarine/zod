import React, { useState, KeyboardEvent } from 'react';

interface AddressBarProps {
  url: string;
  onNavigate: (url: string) => void;
}

export function AddressBar({ url, onNavigate }: AddressBarProps) {
  const [inputValue, setInputValue] = useState(url);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      let navigateUrl = inputValue.trim();
      
      if (!navigateUrl.startsWith('http://') && !navigateUrl.startsWith('https://')) {
        if (navigateUrl.includes('.') && !navigateUrl.includes(' ')) {
          navigateUrl = `https://${navigateUrl}`;
        } else {
          navigateUrl = `https://www.google.com/search?q=${encodeURIComponent(navigateUrl)}`;
        }
      }
      
      onNavigate(navigateUrl);
    }
  };

  return (
    <div className="address-bar">
      <button className="nav-button" title="Back">←</button>
      <button className="nav-button" title="Forward">→</button>
      <button className="nav-button" title="Refresh">⟳</button>
      <input
        type="text"
        className="url-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search or enter URL..."
      />
      <button className="ai-button" title="Ask AI">🤖</button>
    </div>
  );
}
