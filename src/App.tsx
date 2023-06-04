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
      <StyledLayout>
        <NavigationBar />
        <StyledContent>
          <Router>
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
          </Router>
        </StyledContent>
        <StyledFooter>© 2023 School picker 69 420. All rights reserved.</StyledFooter>
      </StyledLayout>
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
  background-color: #f2f2f2;
  padding: 1rem;
  text-align: center;
`;
