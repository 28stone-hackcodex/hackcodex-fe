import { AllSchoolData } from '@/types/AllSchoolType';
import styled from 'styled-components';
interface SchoolImage {
  schoolData: AllSchoolData;
}

export const SchoolItem = (props: SchoolImage) => {
  return (
    <StyledSchoolItem>
      <StyledContent>
        <StyledTitle>{props.schoolData.schoolName}</StyledTitle>
        <StyledSubtitle>📍 {capitalize(props.schoolData.city)} | 📞 {props.schoolData.contactPerson.phone}</StyledSubtitle>
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
  max-width: 30%;
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
