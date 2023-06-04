import { Spin } from 'antd';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <StyledWrapper>
      <Spin />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
