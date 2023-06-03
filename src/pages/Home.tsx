import styled from 'styled-components';

const Home = () => {
  return (
    <HomepageContentWrapperStyled>
      <HomepageContentStyled>Title</HomepageContentStyled>
      <div>Bilde</div>
    </HomepageContentWrapperStyled>
  );
};

export default Home;

const HomepageContentWrapperStyled = styled.div`
  display: flex;
  margin: 40px 0 0;
  width: 100%;
`;

const HomepageContentStyled = styled.div`
  background-color: pink;
  width: 50%;
`;