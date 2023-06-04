import { Routes } from '../routes';
import { AllSchoolData } from '@/types/AllSchoolType';
import { Tag } from 'antd';
import { startTransition } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
interface SchoolImage {
  schoolData: AllSchoolData;
}

export const SchoolItem = (props: SchoolImage) => {
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

  const navigate = useNavigate();


  const handleOnSchoolItemClick = (id: number) => {
    startTransition(() => {
      navigate(`/all-schools/school/${id}`);
    });

  };

  return (
    <StyledSchoolItem onClick={() => handleOnSchoolItemClick(props.schoolData.id)}>
      <StyledContent>
        <StyledTitle>{props.schoolData.schoolName}</StyledTitle>
        <StyledSubtitle>📍 {capitalize(props.schoolData.city)} | 📞 {props.schoolData.contactPerson.phone}</StyledSubtitle>
        <StyledSubtitle>
          {'$'.repeat(Math.random() * 5 + 1)}
        </StyledSubtitle>
        <StyledSubtitle>
          {activities.filter(a => Math.random() * 5 <= 1).map(a => <Tag key={a}>{a}</Tag>)}
        </StyledSubtitle>
        <StyledParagraph>
          {props.schoolData.description}
        </StyledParagraph>
      </StyledContent>
      <StyledImage src={props.schoolData.imageUrl} />
    </StyledSchoolItem>
  );
};

const StyledSchoolItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid grey;
  padding: 1.5em;
  margin: 1em;
  max-height: 250px;
  cursor: pointer;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  width: 70%;
  margin-right: 1rem;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 200px;
  max-height: 150px;
`;

const StyledTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StyledSubtitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: grey;
  margin-bottom: 0.5rem;
`;

const StyledParagraph = styled.div`
  height: 65px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

function capitalize(word: string): string {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
