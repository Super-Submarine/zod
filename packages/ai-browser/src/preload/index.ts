import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  navigateToUrl: (url: string) => ipcRenderer.invoke("navigate-to-url", url),
  createTab: () => ipcRenderer.invoke("create-tab"),
  closeTab: (tabId: string) => ipcRenderer.invoke("close-tab", tabId),
});

declare global {
  interface Window {
    electronAPI: {
      navigateToUrl: (url: string) => Promise<{ success: boolean; url: string }>;
      createTab: () => Promise<{ success: boolean; tabId: string }>;
      closeTab: (tabId: string) => Promise<{ success: boolean; tabId: string }>;
    };
  }
}
