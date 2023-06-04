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
    <Router>
      <StyledLayout>
        <NavigationBar />
        <StyledContent>
          <Routes>
            {ROUTE_CONFIG.map(({ url, component }) => {
              return <Route key={url} path={url} element={<ProtectedComponent component={component} />} />;
            })}
          </Routes>
        </StyledContent>
        <StyledFooter>© 2023 School picker 69 420. All rights reserved.</StyledFooter>
      </StyledLayout>
    </Router>
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
  padding: 1rem;
  text-align: center;
`;
