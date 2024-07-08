import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SignInSide from './pages/SignInSide';
import Signup from './pages/Signup';
import Dashbord from './pages/Dashbord';
import Header from './component/Header';
import HomeFooter from './component/HomeFooter';
import SimpleFooter from './component/SimpleFooter';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword  from './pages/ChangePassword';
import AboutUs from './pages/AboutUs';
function Layout() {
  const location = useLocation();
  
  return (
    <>
      <Header />
      <main style={{ paddingBottom: '6rem' }}> {/* Adjust paddingBottom as needed */}
        <Routes>
          <Route path='/' element={<SignInSide />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashbord />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/aboutus' element={<AboutUs />} />



        </Routes>
      </main>
      {location.pathname === '/' ? <HomeFooter /> : <SimpleFooter />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
