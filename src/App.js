import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import Dashboard from './Components/Dashboard/Dashboard';
import Counter from './Components/Counter';
import Header from './Components/Header';
import { GoogleLogin } from '@react-oauth/google';

// Import your page components


const App = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

  return transitions((style, item) => (
    // <div>
    // <Header/>
    // <animated.div style={style}>
    //   <Routes location={item}>
    //     <Route path="/" element={Counter} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //   </Routes>
    // </animated.div>
    // </div>
    <GoogleLogin/>
  ));
};

export default App;