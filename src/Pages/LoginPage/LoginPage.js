import React from 'react';
import './LoginPage.css'
import { useState, useEffect } from 'react';
import {FaUser, FaLock} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'


const LoginPage= () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false)
    
    const Navigate = useNavigate();
    useEffect(() => {
        // Check if registration is successful (e.g., based on some condition)
        // For demonstration purposes, let's assume registration is successful when email is not empty
        if (email !== '') {
            // Redirect to the home page
            Navigate('/home');
        }
    }, [email, Navigate]);



    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle registration
        // const username = e.target.elements.username.value; // assuming the input has a name attribute of "username"
        // console.log('Registration submitted Username:', username);
        console.log('Registration successful Username: ', email, 'Email:', password, 'Remember me', rememberMe)    
        
      };

      const toggleRememberState = () =>{
        setRememberMe(!rememberMe);
      }

    
    return (

        <div>

        <Header/>

        <div className='wrapper'>

            <h1> Login </h1>
            <div className='input-box'>
                <input type='text' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type='text' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className='icon'/>
            </div>
        

            
            <div className='remember-forget'>
                <label> <input type='checkbox' value={rememberMe} onClick={(e) => setRememberMe(toggleRememberState)}/> remember me  </label>
                <a href="#"> Forgot password?</a>
            </div>
            <div className='button'>
                <button type='submit' onClick={handleSubmit}> Login </button>

            </div>
                <div className='register-link'> <p> Don't have an account? <a href='#'> Register</a> </p></div>

            
        </div>

            <Footer/>
        </div>
    )
}

export default LoginPage;