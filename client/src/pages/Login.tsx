import React, { useState } from 'react'
import httpClient from '../httpClient';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPwd] = useState<string>("");
    const loginUser = async() =>{
        console.log(email, password);
        const resp = await httpClient.post("//localhost:5000/login", {
            email,
            password,
        });

        console.log(resp.data);
    };

    return (
    <div>
      <h1>Log into your account</h1>
      <form action="">
        <label>Email: </label>
        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} id=''/>
      </form>
      <form action="">
        <label>Password: </label>
        <input type="password" value={password} onChange={(e)=> setPwd(e.target.value)} id=''/>
      </form>
      <button type='button' onClick={()=>loginUser()}>Login</button>
    </div>
  )
}

export default Login
