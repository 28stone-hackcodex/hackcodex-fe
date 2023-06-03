import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ProtectedComponent } from './components/ProtectedComponent';
import { ROUTE_CONFIG } from './routes';

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {ROUTE_CONFIG.map(({ url, component }) => {
            return <Route key={url} path={url} element={<ProtectedComponent component={component} />} />;
          })}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
