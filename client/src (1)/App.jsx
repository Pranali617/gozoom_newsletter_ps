import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSide from './pages/SignInSide';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashbord from './pages/Dashbord';
import Header from './component/Header';
import Footer from './component/Footer';
import ForgotPassword from './pages/ForgotPassword';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<SignInSide/>} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashbord />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
