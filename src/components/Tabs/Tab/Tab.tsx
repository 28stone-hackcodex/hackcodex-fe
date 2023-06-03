import { Button } from 'antd';
import styled from 'styled-components';

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

  return (
    <StyledButton type={isTabSelected ? 'primary' : 'ghost'} onClick={handleSelectTab}>
      {name}
    </StyledButton>
  );
};

const StyledButton = styled(Button)``;
