import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import styles from './App.module.css'
import {
  HomePage,
  SigninPage,
  RegisterPage,
  DetailPage,
  SearchPage,
  ShoppingCart
} from './pages'
import { useSelector } from './redux/hooks'

const PrivateRoute: React.FC<{ children }> = ({ children }) => {
  const jwt = useSelector(state => state.user.token)
  return jwt ? children : <Navigate to='/signin' /> 
}

const App: React.FC = () => {
  
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/detail/:touristRouteId' element={<DetailPage />} />
          <Route path='/search' element={<SearchPage />}>
            <Route path=':keywords' element={<SearchPage />} />
          </Route>
          <Route path='/shoppingCart' element={
            <PrivateRoute>
              <ShoppingCart />
            </PrivateRoute>
          } />
          <Route path='*' element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
