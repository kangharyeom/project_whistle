import React from 'react';
import styled from 'styled-components';

// import Footer from './components/Footer';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import { Matching } from './pages/Matching';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter >
      <Header />
        <Routes>
          <Route path="/log-in" element={<Login />} />
          <Route path="/matching" element={<Matching />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
