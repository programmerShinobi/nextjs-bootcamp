import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  useEffect(() => {
    const storedValue: any = localStorage.getItem('token');
    console.info(storedValue);
    if (!storedValue) {
      setTimeout(() => {
        setToken(null)
        router.push('/auth/login');
      }, 3000);
    } else {
      setToken(storedValue)
    }
  }, []);

  // if logged in, display the private route page
  return <>
    {
      token
        ? (children)
        : (<div>
            <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-700">
                <h1 className="text-9xl font-extrabold text-orange-500 tracking-widest pb-2">404</h1>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute text-white">
                    Page Not Found
                </div>
                <button className="mt-5">
                    <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                        <span
                            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>
                    </a>
                </button>
            </main>
        </div>)
  }</>;
};

export default PrivateRoute;