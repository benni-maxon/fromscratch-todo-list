import React, { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { authUser } from '../../services/auth.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();
  if (user) {
    return <Redirect to="/items" />;
  }

  const submitAuth = async () => {
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="auth box">
      <nav>
        <div className="panel-heading">Welcome to your favorite to-do list!</div>
        <div className="panel-tabs">
          <NavLink to="/auth/sign-in" activeClassName="is-active">
            Sign In
          </NavLink>
          <NavLink to="/auth/sign-up" activeClassName="is-active">
            Sign Un
          </NavLink>
        </div>
        <div className="panel-block">
          <div className="field">
            <label>Email</label>
            <div>
              <input
                type="email"
                placeholder="person@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label>Password</label>
            <div>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <button onClick={submitAuth}>Submit</button>
        </div>
      </nav>
    </div>
  );
}
