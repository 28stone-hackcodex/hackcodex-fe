import { Segmented } from 'antd';

const tabsData = ['Arts & Music', 'Math & Engineering', 'Sports'];

export const Tabs = () => {
  return (
    <div>
      <Segmented options={tabsData} />
    </div>
  );
};
