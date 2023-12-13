
import React from 'react';
import './SignUp.css';
function SignUp(){
   
  return (

    <div class="container">
      <img src="https://cdn.create.vista.com/api/media/small/224632214/stock-photo-beautiful-woman-money-jar-retro"alt="Logo" class="logo"></img>
    <h2>Sign Up</h2>
    <form onsubmit="return validateForm()">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    </input>
    <br/>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required></input>
    <br/>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required></input>
    <br/>
    <label for="phone" class="phone-input">Phone Number:</label>
 
    <div class="phone-input">
      <input type="text" id="countryCode" name="countryCode" class="phone-code" value="+91"></input>
      <input type="tel" id="phoneNumber" name="phoneNumber" class="phone-number"  required></input>
    </div>
    <br/>
     <button type="submit" class="b1">Continue</button>
    <br/><br/>
   <button type="submit" class="b2" onClick="">Existing user? Login</button>
    </form>
  </div>
  
  );
  }

export default SignUp;
