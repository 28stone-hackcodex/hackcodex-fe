import { Routes } from '../routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mapImage from '../../public/images/map.png';
import { Review } from '../components/Review';

interface School {
  title: string;
  location: string;
  description: string;
}

const School = ({ title, location, description }: School) => {
  return (
    <StyledWrapper>
      <StyledBackButton to={Routes.AllSchools}>{`<- Go back to school list `}</StyledBackButton>
      <StyledInfoWrapper>
        <StyledInfoContent>
          <StyledSchoolInfo>
            <StyledTitle>{title ?? 'School name'}</StyledTitle>
            <StyledLocation>{location ?? '📍Ikšķiles iela 6, Rīga, Latvija, LV-1057'}</StyledLocation>
          </StyledSchoolInfo>
          <StyledDescription>
            {description ??
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
          </StyledDescription>
          <StyledContactPersonInfo>
            <StyledContactPersonTitle>Contact person</StyledContactPersonTitle>
            <StyledContactPersonContent>
              <StyledContactPersonAvatarWrapper>
                <StyledContactPersonAvatar src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" />
              </StyledContactPersonAvatarWrapper>
              <StyledPersonDetails>
                <StyledPersonName>John Doe</StyledPersonName>
                <StyledPersonNumber>📞 + 371 20000000</StyledPersonNumber>
                <StyledBookAppointmentButton>Book an appointment</StyledBookAppointmentButton>
              </StyledPersonDetails>
            </StyledContactPersonContent>
          </StyledContactPersonInfo>
        </StyledInfoContent>
        <StyledInfoImages>
          <StyledInfoImage
            src={'https://ichef.bbci.co.uk/news/976/cpsprodpb/0C22/production/_98860130_mediaitem98860129.jpg'}
          />
          <StyledInfoImage src={mapImage} />
        </StyledInfoImages>
      </StyledInfoWrapper>
      <StyledReviewsWrapper>
        <StyledReviewsTitle>Reviews</StyledReviewsTitle>
        <Review />
      </StyledReviewsWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  text-align: left;
`;

const StyledBackButton = styled(Link)`
  text-align: left;
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  gap: 48px;
`;

const StyledInfoContent = styled.div`
  max-width: 500px;
`;

const StyledSchoolInfo = styled.div``;

const StyledTitle = styled.h1`
  font-weight: 400;
  font-size: 36px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 20px;
`;

const StyledLocation = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 131%;
  color: rgba(0, 0, 0, 0.45);
  padding-bottom: 50px;
`;

const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #333333;
`;

const StyledContactPersonInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledContactPersonContent = styled.div`
  display: flex;
  gap: 13px;
`;

const StyledContactPersonAvatarWrapper = styled.div`
  padding-left: 40px;
`;

const StyledContactPersonAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
`;

const StyledPersonName = styled.p`
  color: #000000;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  margin: 0;
  padding-bottom: 2px;
`;

const StyledPersonNumber = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  margin: 0;
  padding-bottom: 14px;
`;

const StyledContactPersonTitle = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 22px;
  margin-bottom: 16px;
`;

const StyledInfoImages = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledBookAppointmentButton = styled.button`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  background-color: #1890ff;
  border: 1px solid #1890ff;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 4px;
`;

const StyledPersonDetails = styled.div``;

const StyledInfoImage = styled.img`
  max-width: 335px;
  object-fit: cover;
`;

const StyledReviewsWrapper = styled.div``;

const StyledReviewsTitle = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 22px;
  margin-bottom: 25px;
`;

const StyledReviewsContent = styled.div``;

export default School;
