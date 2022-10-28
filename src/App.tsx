import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import styles from './App.module.css'
import { HomePage } from './pages';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
