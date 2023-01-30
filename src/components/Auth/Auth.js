import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();
  return <div>Auth</div>;
}
