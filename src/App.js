import React from 'react';

import Header from './components/Header';

import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Match from './pages/match/Match';
import MatchPost from './pages/match/MatchPost';
import MatchDetail from './pages/match/MatchPost';
import League from './pages/league/League';
import LeaguePost from './pages/league/LeaguePost';
import Team from './pages/team/Team';
import TeamPost from './pages/team/TeamPost';
import Ranking from './pages/ranking/Ranking';

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
          <Route path="/league-post" element={<LeaguePost />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-post" element={<TeamPost />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
