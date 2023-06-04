import styled from 'styled-components';

export const Review = () => {
  return (
    <StyledWrapper>
      <StyledIconWrapper>
        <StyledIcon src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
      </StyledIconWrapper>
      <StyledContent>
        <StyledContentTop>
          <StyledName>Han Solo</StyledName>
          <StyledTime>1 day ago</StyledTime>
        </StyledContentTop>
        <StyledDescription>
          We supply a series of design principles, practical patterns and high quality design resources (Sketch and
          Axure), to help people create their product prototypes beautifully and efficiently.
        </StyledDescription>
      </StyledContent>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledIconWrapper = styled.div``;

const StyledIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
`;

const StyledContent = styled.div``;

const StyledContentTop = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledName = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0;
`;

const StyledTime = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #bfbfbf;
  margin: 0;
`;

const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.85);
  margin: 0;
`;
