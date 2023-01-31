import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <nav className="navbar" role="navigation">
      <div className="site-title">
        <h1>✓To-Do List!✓</h1>
      </div>
      <div className="links">
        {!user && (
          <div className="sign-in-up-links">
            <Link to="/auth/sign-up">Sign Up</Link>
            <Link to="/auth/sign-in">Sign In</Link>
          </div>
        )}
        {user && (
          <>
            <h2>hello {user.email}</h2>
            <button onClick={handleLogout}>Sign Out</button>
          </>
        )}
      </div>
    </nav>
  );
}
