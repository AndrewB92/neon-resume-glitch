
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-black text-white">
      <h1 className="text-6xl font-bold mb-4 glitch mono-text" data-text="404">404</h1>
      <div className="scanline"></div>
      <p className="text-xl text-cyan-300 mb-8 mono-text">{'<CONNECTION_LOST>'}</p>
      <p className="mb-8 max-w-md text-center">The digital path you were following has been corrupted or no longer exists in the network.</p>
      
      <Link to="/" className="btn">
        Return to Main Interface
      </Link>
    </div>
  );
};

export default NotFound;
