// Home.js
import React from 'react';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Website!</h1>
        <p className="text-lg mb-4">Thank you for visiting. Feel free to explore.</p>
        <a href="/about" className="text-blue-500 font-semibold hover:text-blue-700">Learn more about us</a>
        <Dashboard/>
      </div>
    </div>
  );
};

export default Home;
