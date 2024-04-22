// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Header = () => {
  // Animation for smooth transitions
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const logout = () => {};

  return (
    <animated.header className="bg-gray-800 p-4 flex items-center justify-between fixed w-full z-10" style={props}>
      <div className="text-white font-bold text-xl">Your Logo</div>
      <nav className="space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">Signin-Form</Link>
        <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
        <Link to="/richtexteditor" className="text-white hover:text-gray-300">RichTextEditor</Link>
        <Link to="/counter" className="text-white hover:text-gray-300">Counter</Link>
      </nav>
      <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={logout}>Logout</button>
    </animated.header>
  );
};

export default Header;
