"use client";
import { useState, useEffect } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // You can add your authentication logic here
    // For example, send a POST request to your backend with the email and password
    
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

// Mark the component as a client component
export function Client() {
  return <LoginForm />;
}

// const Login=()=>{
//     return(
//         <div>
//             <h1>login page</h1>
//         </div>
//     )
        
// };
// export default Login;