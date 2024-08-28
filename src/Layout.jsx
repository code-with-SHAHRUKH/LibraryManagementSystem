import React from 'react'
import Navbar from './components/NavBar/NavBar'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom'
import './App.css';
function Layout() {
  const currentLanguage = useSelector((state) => state.language);
  const { t } = useTranslation();
  return (
    <div className={`App ${currentLanguage === 'ur' ? 'rtl' : 'ltr'}`}>
    <Navbar/>
    <Outlet />
   
    </div>
  )
}

export default Layout