
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LoginPage from './Pages/LoginPage/LoginPage';
import TrendingPage from './Pages/TrendingPage/TrendingPage.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <Header/>
      
      // <div className='content'>
      //   <LoginForm />
      // </div>
  
        
      
      

      <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/home" element={<TrendingPage/>} />
        <Route to="/login" element={<Navigate to='/login'></Navigate>}/>
      </Routes>
    </Router>

      //   <div className='content'>
      //   <TrendingPage/>
      // </div>  

      // <Footer/>
    // </div>
  );
}

export default App;
