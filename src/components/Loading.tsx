import styled from 'styled-components';

export const Loading = () => {
  return <LoadingContainer>LOADING...</LoadingContainer>;
};

const LoadingContainer = styled.div`
  display: flex;
  min-width: 330px;
  height: calc(90vh - 85px);
  justify-content: center;
  align-items: center;
`;
