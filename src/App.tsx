import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import styles from './App.module.css'
import {
  HomePage,
  SigninPage,
  RegisterPage,
  DetailPage,
  SearchPage,
  ShoppingCartPage,
  PlaceOrderPage
} from './pages'
import { useAppDispatch, useSelector } from './redux/hooks'
import { getShoppingCart } from './redux/shoppingCart/slice'

const PrivateRoute: React.FC<{ jwt, children }> = ({ jwt, children }) => {
  return jwt ? children : <Navigate to='/signin' /> 
}

const App: React.FC = () => {
  const jwt = useSelector(state => state.user.token)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt))
    }
  }, [jwt])
  
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
          <Route path='shoppingCart' element={
            <PrivateRoute jwt={jwt}>
              <ShoppingCartPage />
            </PrivateRoute>
          } />
          <Route path='placeorder' element={
            <PrivateRoute jwt={jwt}>
              <PlaceOrderPage />
            </PrivateRoute>
          } />
          <Route path='*' element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
