import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import styles from './App.module.css'
import {
  HomePage,
  SigninPage,
  RegisterPage,
  DetailPage
} from './pages';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/detail/:touristRouteId' element={<DetailPage />} />
          <Route path='*' element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
