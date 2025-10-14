import { create } from "zustand";

interface Tab {
  id: string;
  url: string;
  title: string;
  favicon?: string;
}

interface TabStore {
  tabs: Tab[];
  activeTabId: string | null;
  addTab: (url: string, title: string) => void;
  closeTab: (tabId: string) => void;
  setActiveTab: (tabId: string) => void;
  updateTab: (tabId: string, updates: Partial<Tab>) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  tabs: [
    {
      id: "1",
      url: "https://www.google.com",
      title: "New Tab",
    },
  ],
  activeTabId: "1",

  addTab: (url: string, title: string) => {
    const newTab: Tab = {
      id: Date.now().toString(),
      url,
      title,
    };
    set((state) => ({
      tabs: [...state.tabs, newTab],
      activeTabId: newTab.id,
    }));
  },

  closeTab: (tabId: string) => {
    set((state) => {
      const newTabs = state.tabs.filter((tab) => tab.id !== tabId);
      const newActiveTabId = state.activeTabId === tabId ? newTabs[0]?.id || null : state.activeTabId;

      return {
        tabs: newTabs,
        activeTabId: newActiveTabId,
      };
    });
  },

  setActiveTab: (tabId: string) => {
    set({ activeTabId: tabId });
  },

  updateTab: (tabId: string, updates: Partial<Tab>) => {
    set((state) => ({
      tabs: state.tabs.map((tab) => (tab.id === tabId ? { ...tab, ...updates } : tab)),
    }));
  },
}));
