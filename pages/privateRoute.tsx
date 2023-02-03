import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedValue = localStorage.getItem('token');
    if (storedValue) {
      setIsLoggedIn(true);
      console.info(storedValue);
    } else {
      router.push('/auth/login');
      setIsLoggedIn(false);
      console.info(storedValue);
    }
  }, []);

  // if logged in, display the private route page
  return <>{children}</>;
};

export default PrivateRoute;