import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./code-spliting/Home'));
const Dashboard = lazy(() => import('./code-spliting/Dashboard'));
const Settings = lazy(() => import('./code-spliting/Settings'));
// import Home from './code-spliting/Home';
// import Dashboard from './code-spliting/Dashboard';
// import Settings from './code-spliting/Settings';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h3>Loading page...</h3>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
