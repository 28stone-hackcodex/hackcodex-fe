import styled from 'styled-components';

const NavigationBar = () => {
  return (
    <NavigationBarStyled>
      navbar
    </NavigationBarStyled>
  );
};

export default NavigationBar;

const NavigationBarStyled = styled.div`
  background-color: #f2f2f2;
  color: #333333;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
`;
