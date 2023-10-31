import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Match from './pages/match/Match';
import MatchEnd from './components/match/MatchEnd';
import MatchPost from './pages/match/MatchPost';
import MatchDetail from './pages/match/MatchPost';
import League from './pages/league/League';
import LeaguePost from './pages/league/LeaguePost';
import Team from './pages/team/Team';
import TeamPost from './pages/team/TeamPost';
import Ranking from './pages/ranking/Ranking';
import Board from './pages/board/Board';
import Home from './pages/Home';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');

        // 토큰이 있으면 로그인 상태로 간주
        if (authToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
        console.log(authToken)
        console.log(isLoggedIn)
    }, [isLoggedIn]);

  return (
    <BrowserRouter >
      <Header isLoggedIn = {isLoggedIn}/>
        <Routes>
          <Route path="/log-in" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/match" element={<Match />} />
          <Route path="/" element={<Home />} />
          <Route path="/match/end" element={<MatchEnd />} />
          <Route path="/match-post" element={<MatchPost />} />
          <Route path="/match-detail/:matchId" element={<MatchDetail />} />
          <Route path="/league" element={<League />} />
          <Route path="/league-post" element={<LeaguePost />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-post" element={<TeamPost />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      <Footer isLoggedIn = {isLoggedIn} />
    </BrowserRouter>
  );
};

export default App;
