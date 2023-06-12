import React, { useState } from 'react';
import './Login.css'

const LoginPage: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform login logic here
    // You can make an API call to validate the credentials or perform any other authentication mechanism

    // Assuming login is successful, redirect to home page
 
  };

  return (
    <div className='login-page'>
    <div className='login-container'>
      <h1 className='login-title'>Login Page</h1>
      <p className='login-desc'>Entre com seus dados corretamente para acessar o sistema.</p>
      <form className = "login-form" onSubmit={handleLogin}>
        
          <input className='login-input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Digite seu email'/>
       
      
          <input className='login-input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Digite sua senha'/>
      
        <br />
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
