import React, {useState, useContext} from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import {UserContext} from '../../context/userContext';

const Login = () => {
  // react hooks
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  // const [user, setUser] = useState('');
  // function to either redirect to sign up or to dashboard if user is valid or not
  const submitChange = (e) => {
    e.preventDefault();
    // targets the input buttons value to determine if login or signup
    if (e.target.value === 'Login') {
      fetch('/user/login/', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/JSON' }
      })
        .then(res => res.json())
        .then(data => {
          // set up context here?
          setRedirect(true);
        }).catch(
          (err) => console.log(err)
          )
        } else {
          fetch('/user/signup', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type': 'application/JSON' }
          })
          .then(res => res.json())
          .then(data => {
            // using function from userContext.js to dynamically update 
            // the context for use in other components
            updateUser(data)
            // reset redirect boolean to take user to dashboard
            setRedirect(true); 
          })
          .catch((err) => console.log(err))
      // if we hit our catch, show to the user something is wrong
      // instead of just sitting there
    }
  }
  
  // if redeirect has been set to a truthy value in 
  // submit change, redirect to /dashboard
  if (redirect) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h1>GG</h1>
      <form>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          value={username}
          placeholder="username"
        />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
          value={password}
          placeholder="password"
        />
        <br />
        <input
          onClick={submitChange}
          type="submit"
          value="Login"
        />
        <input
          onClick={submitChange}
          type="submit"
          value="Signup"
        />
      </form>
    </div>
  );
}

export default withRouter(Login);
