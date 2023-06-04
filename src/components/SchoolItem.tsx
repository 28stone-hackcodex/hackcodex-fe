import styled from 'styled-components';
interface SchoolImage {
  src: string;
}

export const SchoolItem = (props: SchoolImage) => {
  return (
    <StyledSchoolItem>
      <StyledContent>
        <StyledTitle>Title</StyledTitle>
        <StyledSubtitle>Subtitle</StyledSubtitle>
        <StyledParagraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolorum ullam, architecto deserunt in officiis
          quidem quod iste dolores cupiditate autem molestiae, labore magnam pariatur delectus? Saepe obcaecati
          veritatis voluptatem ipsum dicta adipisci minima sint doloremque, modi at velit quam quidem asperiores rerum
          repellendus, alias sequi aut, non exercitationem earum?
        </StyledParagraph>
      </StyledContent>
      <StyledImage src={props.src} />
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
