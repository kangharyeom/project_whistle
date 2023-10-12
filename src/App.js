import React from 'react';

import Header from './components/Header';

import Footer from './components/Footer';

import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Match from './pages/match/Match';
import MatchPost from './pages/match/MatchPost';
import MatchDetail from './pages/match/MatchPost';
import League from './pages/league/league';
import Team from './pages/team/Team';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';




const App = () => {

  return (
    <BrowserRouter >
      <Header />
        <Routes>
          <Route path="/log-in" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/match" element={<Match />} />
          <Route path="/match-post" element={<MatchPost />} />
          <Route path="/match-detail/:matchId" element={<MatchDetail />} />
          <Route path="/league" element={<League />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default App;
