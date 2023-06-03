interface Tab {
  name: string;
  tabId: number;
  selectedTabId: number;
  onSelectTabId: (id: number) => void;
}

export const Tab = ({ name, tabId, selectedTabId, onSelectTabId }: Tab) => {
  const handleSelectTab = () => {
    if (tabId === selectedTabId) {
      onSelectTabId(-1);
      return;
    }
    onSelectTabId(tabId);
  };

  const isTabSelected = tabId === selectedTabId;

  return <h1 onClick={handleSelectTab}>{isTabSelected ? 'selected' : name}</h1>;
};
