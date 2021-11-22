import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
