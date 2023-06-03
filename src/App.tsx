import { Layout } from 'antd';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { ProtectedComponent } from './components/ProtectedComponent';
import { ROUTE_CONFIG } from './routes';

const { Content, Footer } = Layout;

export const App = () => {
  return (
    <StyledLayout>
      <NavigationBar />
      <StyledContent>
        <Router>
          <Routes>
            {ROUTE_CONFIG.map(({ url, component }) => {
              return <Route key={url} path={url} element={<ProtectedComponent component={component} />} />;
            })}
          </Routes>
        </Router>
      </StyledContent>
      <StyledFooter>© 2023 School picker 69 420. All rights reserved.</StyledFooter>
    </StyledLayout>
  );
};

export default App;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledContent = styled(Content)`
  padding: 1rem;
`;

const StyledFooter = styled(Footer)`
  background-color: #f2f2f2;
  padding: 1rem;
  text-align: center;
`;
