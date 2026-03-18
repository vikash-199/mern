import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { lazy, Suspense } from 'react';
import Home from './components/Home';
import ProtectedRoute from './ProtectedRoute';

const Users = lazy(() => import('./components/Users'));
const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/users" element={<Users />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

// import { lazy, Suspense } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';
// import { AuthProvider } from './AuthContext';

// const Home = lazy(() => import('./components/Home'));
// const Dashboard = lazy(() => import('./components/Dashboard'));
// const Users = lazy(() => import('./components/Users'));

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Suspense fallback={<p>Loading...</p>}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             {/* protected routes */}
//             <Route element={<ProtectedRoute />}>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/users" element={<Users />} />
//             </Route>
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;
