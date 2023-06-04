import { Layout } from 'antd';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { Suspense } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { ProtectedComponent } from './components/ProtectedComponent';
import { ROUTE_CONFIG } from './routes';
import { Loading } from './components/Loading';

const { Content, Footer } = Layout;

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <StyledLayout>
          <NavigationBar />
          <StyledContent>
            <Routes>
              {ROUTE_CONFIG.map(({ url, component, isAvailable }) => {
                const isRouteAvailable = !isAvailable || isAvailable();

                return (
                  isRouteAvailable && (
                    <Route key={url} path={url} element={<ProtectedComponent component={component} />} />
                  )
                );
              })}
            </Routes>
          </StyledContent>
          <StyledFooter>© 2023 skolvedis. All rights reserved.</StyledFooter>
        </StyledLayout>
      </Router>
    </Suspense>
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
