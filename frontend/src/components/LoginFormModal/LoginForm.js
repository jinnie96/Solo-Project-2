import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoUser = (e) => {
    e.preventDefault()
    return dispatch(sessionActions.login({ credential:"Demo-lition", password:"password"}))
  }

  return (
    <form className='login'
    onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Username or Email
        <input
          id="nameInp"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          id="passwordInp"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <div className="buttons">
      <button id="loginBtn" type="submit">Log In</button>
      <button id="demoBtn" onClick ={demoUser}>Demo User</button>
      </div>
    </form>
  );
}

export default LoginForm;
