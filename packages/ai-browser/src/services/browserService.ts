export interface BrowserTab {
  id: string;
  url: string;
  title: string;
  favicon?: string;
  isLoading: boolean;
}

export class BrowserService {
  private tabs: Map<string, BrowserTab> = new Map();

  createTab(url: string, title: string): BrowserTab {
    const tab: BrowserTab = {
      id: Date.now().toString(),
      url,
      title,
      isLoading: false,
    };
    this.tabs.set(tab.id, tab);
    return tab;
  }

  getTab(tabId: string): BrowserTab | undefined {
    return this.tabs.get(tabId);
  }

  updateTab(tabId: string, updates: Partial<BrowserTab>): void {
    const tab = this.tabs.get(tabId);
    if (tab) {
      Object.assign(tab, updates);
    }
  }

  closeTab(tabId: string): void {
    this.tabs.delete(tabId);
  }

  getAllTabs(): BrowserTab[] {
    return Array.from(this.tabs.values());
  }
}
