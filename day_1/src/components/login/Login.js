
import React from 'react';
import './Login.css';
function Login(){
  return (
    <div class="login-container">
      <h2>Login</h2>
      <form>
        <label>
          Username/Email:
          <input
            type="text"
            name="username"
             
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"/>
             
        </label>
        
        <a href="/" >Forget Your Password?</a>
        <br /><br/>
        <button type="submit" class="b1">Login</button>
        
        <p>Or</p>
        <button type="submit" class="b2">Request OTP</button>
        <br/>
        <a href="" >New to Books4U? SignUp</a>
               </form>
    </div>
  );
}

export default Login;
