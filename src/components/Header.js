import { useState } from 'react';
import { useUser } from '../context/UserContext.js';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const { user, setUser } = useUser();
}
