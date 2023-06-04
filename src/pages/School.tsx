import { Routes } from '../routes';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import mapImage from '../../public/images/map.png';
import { Review } from '../components/Review';
import { AllSchoolData } from '@/types/AllSchoolType';
import { useEffect, useState } from 'react';
import { fetchSchoolData } from '../services/fetchRequest';
import { Tag } from 'antd';

const School = () => {
  const [data, setData] = useState<AllSchoolData>();
  const { id } = useParams<{ id: string }>();

  const activities = [
    'Swimming',
    'Maths',
    'Languages',
    'Debating',
    'Design',
    'Drama',
    'Arts',
    'IT',
    'Agriculture',
    'Architecture',
    'Social studies',
    'Chemistry',
  ];

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchData = async () => {
      const fetchedData = await fetchSchoolData(Number(id));
      setData(fetchedData);
    };

    fetchData();
  }, []);

  if (!data) {
    return <h1>Sorry no data was found!</h1>;
  }

  return (
    <StyledWrapper>
      <StyledBackButton to={Routes.AllSchools}>{`<- Go back to school list `}</StyledBackButton>
      <StyledInfoWrapper>
        <StyledInfoContent>
          <StyledSchoolInfo>
            <StyledTitle>{data.schoolName}</StyledTitle>
            <StyledSubtitle>📍 {capitalize(data.city)} | 📞 {data.contactPerson.phone}</StyledSubtitle>
            <StyledSubtitle>
              {'$'.repeat(Math.random() * 5 + 1)}
            </StyledSubtitle>
            <StyledSubtitle>
              {activities.filter(a => Math.random() * 5 <= 1).map(a => <Tag key={a}>{a}</Tag>)}
            </StyledSubtitle>
          </StyledSchoolInfo>
          <StyledDescription>{data.description}</StyledDescription>
          <StyledContactPersonInfo>
            <StyledContactPersonTitle>Contact person</StyledContactPersonTitle>
            <StyledContactPersonContent>
              <StyledContactPersonAvatarWrapper>
                <StyledContactPersonAvatar src={data.contactPerson.imageUrl} />
              </StyledContactPersonAvatarWrapper>
              <StyledPersonDetails>
                <StyledPersonName>{data.contactPerson.fullName}</StyledPersonName>
                <StyledPersonNumber>{data.contactPerson.phone}</StyledPersonNumber>
                <StyledBookAppointmentButton>Book an appointment</StyledBookAppointmentButton>
              </StyledPersonDetails>
            </StyledContactPersonContent>
          </StyledContactPersonInfo>
        </StyledInfoContent>
        <StyledInfoImages>
          <StyledInfoImage src={data.imageUrl} />
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
  padding-left: 20px;
`;

const StyledInfoContent = styled.div`
  max-width: 500px;
`;

const StyledSchoolInfo = styled.div``;

const StyledTitle = styled.h1`
  font-weight: 400;
  font-size: 36px;
  color: #000000;
  margin-bottom: 20px;
  line-height: 1.1;
`;

const StyledLocation = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 131%;
  color: rgba(0, 0, 0, 0.45);
  padding-bottom: 40px;
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

const StyledReviewsWrapper = styled.div`
  padding: 20px;
`;

const StyledReviewsTitle = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 22px;
  margin-bottom: 25px;
`;

const StyledSubtitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: grey;
  margin-bottom: 0.5rem;
`;

const StyledReviewsContent = styled.div``;

export default School;

function capitalize(word: string): string {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

