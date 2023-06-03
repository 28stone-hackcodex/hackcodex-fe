import styled from 'styled-components';
import locationIcon from '../../public/images/icons/location-icon.png';
import logoOne from '../../public/images/klase.png';
import logoTwo from '../../public/images/mykoob.png';
import { Tabs } from '../components/Tabs/Tabs';
import { Button, Checkbox } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Suggestion = () => {
  const options = [
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Maths', value: 'Maths' },
    { label: 'Languages', value: 'Languages' },
    { label: 'Debating', value: 'Debating' },
    { label: 'Design', value: 'Design' },
    { label: 'Drama', value: 'Drama' },
    { label: 'Arts', value: 'Arts' },
    { label: 'IT', value: 'IT' },
    { label: 'Agriculture', value: 'Agriculture' },
    { label: 'Architecture', value: 'Architecture' },
    { label: 'Social studies', value: 'Social studies' },
    { label: 'Chemistry', value: 'Chemistry' },
  ];

  const valuesFromApi: string[] = [];

  const handleSelectCheckpoint = (value: string) => {
    console.log(value);
  };

  return (
    <StyledWrapper>
      <StyledTitle level={1}>Fill in form</StyledTitle>
      <StyledInner>
        <StyledParagraphs>Add info about child’s grades</StyledParagraphs>
        <StyledText>Connect to:</StyledText>
        <StyledImageWrapper>
          <img src={logoOne} alt="Company logo" />
          <img src={logoTwo} alt="Company logo" />
        </StyledImageWrapper>
        <StyledParagraphs>Select child’s future field for development</StyledParagraphs>
        <StyledTabsWrapper>
          <Tabs />
        </StyledTabsWrapper>
        <StyledParagraphs>Select child’s extracurricular activities</StyledParagraphs>
        <StyledRadiosWrapper>
          <Checkbox.Group options={options} onChange={handleSelectCheckpoint} value={valuesFromApi} />
        </StyledRadiosWrapper>
        <StyledParagraphs>State area you are located in</StyledParagraphs>
        <StyledSearchWrapper>
          <img src={locationIcon} alt="Location icon" />
          <StyledSearchInput type="text" placeholder="Please select" />
        </StyledSearchWrapper>
        <StyledSubmitButton shape="default" size="large" type="primary">
          Generate Suggestions
        </StyledSubmitButton>
      </StyledInner>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

const StyledInner = styled.div`
  background: #e8e8e8;
  max-width: 550px;
  padding: 55px 44px;
`;

const StyledTitle = styled(Title)`
  font-weight: 700;
  font-size: 23px;
  line-height: 22px;
`;

const StyledParagraphs = styled(Paragraph)`
  font-weight: 700;
  font-size: 23px;
  line-height: 22px;
`;

const StyledText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #838383;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-bottom: 55px;
`;

const StyledTabsWrapper = styled.div`
  margin-bottom: 45px;
  padding: 10px;
`;

const StyledRadiosWrapper = styled.div`
  align-self: center;
  text-align: center;
  column-gap: 0;
  margin-bottom: 60px;

  label {
    width: 31%;
  }

  .ant-checkbox-group {
    column-gap: 0;
    justify-content: flex-end;
  }
`;

const StyledSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  gap: 5px;
`;

const StyledSearchInput = styled.input`
  border: none;
  border-radius: 4px;
  height: 32px;
  background: #ffffff;
  min-width: 210px;
  color: black;
  padding-left: 12px;

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.25);
  }

  :focus {
    border: 1px solid #40a9ff;
  }
`;

const StyledSubmitButton = styled(Button)`
  margin-top: 50px;
`;

export default Suggestion;
