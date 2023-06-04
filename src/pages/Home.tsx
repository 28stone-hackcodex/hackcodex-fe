import styled from 'styled-components';
import HomepageImage from '../../public/homepage-image.jpg';

const Home = () => {
  return (
    <div>
      <HomepageContentWrapperStyled>
        <HomepageContentStyled>
          <HomepageContentTitle>Find a school that fits</HomepageContentTitle>
          <HomepageContent>
            At EduConnect, we understand that choosing the right school for your child is a crucial decision that can shape their educational journey and future success.
            <br />
            <br />
            That's why we've created a comprehensive online platform designed to support and guide parents like you through this important process.
            Our mission is simple: to connect parents with the resources, information, and community they need to make informed and empowered decisions about their child's education.
            <br />
            <br />
            With our user-friendly platform, you'll gain access to a wealth of tools and features that will make the school selection process seamless and stress-free.
          </HomepageContent>
        </HomepageContentStyled>
        <StyledImage src={HomepageImage} alt='Homepage image' />
      </HomepageContentWrapperStyled>
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