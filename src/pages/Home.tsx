import styled from 'styled-components';
import HomepageImage from '../../public/homepage-image.jpg';

import { StyledButton } from '../StyledComponents/Buttons';
import { startTransition } from 'react';
import { useNavigate } from 'react-router';
import { Routes } from '../routes';
import { Button } from 'antd';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToSuggestion = () => {
    startTransition(() => {
      navigate(Routes.Suggestion);
    });
  };

  return (
    <div>
      <HomepageContentWrapperStyled>
        <HomepageContentStyled>
          <HomepageContentTitle>Find a school that fits</HomepageContentTitle>
          <HomepageContent>
            At skolvedis, we understand that choosing the right school for your child is a crucial decision that can shape their educational journey and future success.
            <br />
            <br />
            That's why we've created a comprehensive online platform designed to support and guide parents like you through this important process.
            Our mission is simple: to connect parents with the resources, information, and community they need to make informed and empowered decisions about their child's education.
            <br />
            <br />
            With our user-friendly platform, you'll gain access to a wealth of tools and features that will make the school selection process seamless and stress-free.

            <br />
            <br />

            <StyledSubmitButton onClick={handleNavigateToSuggestion} shape="default" size="large" type="primary">
              Find school
            </StyledSubmitButton>
          </HomepageContent>
        </HomepageContentStyled>
        <StyledImage src={HomepageImage} alt='Homepage image' />
      </HomepageContentWrapperStyled>
      <HomePageFooter>
        Your child's education, our expertise.
      </HomePageFooter>
    </div>
  );
};

export default Home;

const HomepageContentWrapperStyled = styled.div`
  display: flex;
  margin: 100px 0 0;
  width: 100%;
  text-align: left;
`;

const HomepageContentTitle = styled.div`
  font-size: 40px;
  font-weight: 500;
  line-height: 40px;
  margin: 50px 0 0;
  width: 85%;
  padding-left: 50px;
`;

const HomepageContent = styled(HomepageContentTitle)`
  font-size: 16px;
  line-height: 18px;
  margin: 50px 0 0;
`;

const HomepageContentStyled = styled.div`
  width: 50%;
`;

const StyledImage = styled.img`
  max-width: 50%;
  max-height: 560px;
  border-radius: 30% 0 0 30%;
  object-fit: cover;
`;

const HomePageFooter = styled.div`
  height: 187px;
  background-color: #F7F7F7;
  font-weight: 400;
  font-size: 32px;
  line-height: 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 60px auto 0;
`

const BlueButtonStyled = styled(StyledButton)`
  background-color:#1890FF;
  color:#FFFFFF;
`;

const StyledSubmitButton = styled(Button)`
  margin-top: 25px;
`;
