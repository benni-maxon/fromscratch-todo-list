import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import ItemForm from './ItemForm.js';
import ItemsList from './ItemsList.js';
import './Items.css';

export default function Items() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div className="container">
      <div className="items-box">
        <ItemForm />
        <ItemsList />
      </div>
    </div>
  );
}
