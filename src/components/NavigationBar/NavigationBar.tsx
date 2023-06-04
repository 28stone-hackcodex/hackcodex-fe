import { startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from '../../StyledComponents/Buttons';


const NavigationBar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const pathToNavigate = '/'

    startTransition(() => {
      navigate(pathToNavigate);
    });
  };

  return (
    <NavigationBarStyled>
      <NavigationBarLogoStyled onClick={handleButtonClick}>Logo/name</NavigationBarLogoStyled>
      <NavigationBarButtonContainerStyled>
        <BlueButtonStyled>one</BlueButtonStyled>
        <StyledButton>Two</StyledButton>
      </NavigationBarButtonContainerStyled>
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

const NavigationBarLogoStyled = styled.div`
  width: 50%;
  padding: 0 0 0 40px;
  display: flex;
  justify-content: flex-start;
`;

const NavigationBarButtonContainerStyled = styled.div`
  width: 50%;
  padding: 0 40px 0 0;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
`;

const BlueButtonStyled = styled(StyledButton)`
  background-color:#1890FF;
`;
