
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LoginPage from './Pages/LoginPage/LoginPage';
import TrendingPage from './Pages/TrendingPage/TrendingPage.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (

      <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<TrendingPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
