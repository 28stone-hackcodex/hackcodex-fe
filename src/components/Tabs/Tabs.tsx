import { Tab } from './Tab/Tab';
import { useState } from 'react';

const tabsData = [
  {
    id: 1,
    name: 'Arts & Music',
  },
  {
    id: 2,
    name: 'Math & Engineering',
  },
  {
    id: 3,
    name: 'Sports',
  },
];

export const Tabs = () => {
  const [selectedTabId, setSelectedTabId] = useState(-1);

  const handleSelectTabId = (id: number) => {
    setSelectedTabId(id);
  };

  return (
    <div>
      {tabsData.map((tab) => {
        return (
          <Tab
            key={`${tab.name}-${tab.id}`}
            name={tab.name}
            tabId={tab.id}
            selectedTabId={selectedTabId}
            onSelectTabId={handleSelectTabId}
          />
        );
      })}
    </div>
  );
};
