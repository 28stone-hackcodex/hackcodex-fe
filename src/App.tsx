import { Layout } from 'antd';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { ProtectedComponent } from './components/ProtectedComponent';
import { ROUTE_CONFIG } from './routes';

const { Header, Content, Footer } = Layout;

export const App = () => {
  return (
    <StyledLayout>
      <StyledHeader>
        <h1>Welcome to my App</h1>
      </StyledHeader>
      <StyledContent>
        <Router>
          <Routes>
            {ROUTE_CONFIG.map(({ url, component }) => {
              return <Route key={url} path={url} element={<ProtectedComponent component={component} />} />;
            })}
          </Routes>
        </Router>
      </StyledContent>
      <StyledFooter>© 2023 My App. All rights reserved.</StyledFooter>
    </StyledLayout>
  );
};

export default App;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  background-color: #007bff;
  color: #ffffff;
  padding: 0 1rem;
`;

const StyledContent = styled(Content)`
  padding: 1rem;
`;

const StyledFooter = styled(Footer)`
  background-color: #f2f2f2;
  padding: 1rem;
  text-align: center;
`;
