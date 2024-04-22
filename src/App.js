import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import Dashboard from './Components/Dashboard/Dashboard';
import Counter from './Components/Counter';
import Header from './Components/Header';
import SignIn from './Components/GoogleLogin';
import Form from './Components/Form';
import RichTextEditor from './Components/RichTextEditor';
import Home from './Components/Dashboard';


// Import your page components


const App = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

  return transitions((style, item) => (
    <div className='flex flex-col'>
    <Header/>
    <animated.div style={style}>
      <Routes location={item}>
        <Route path="/" element={<Form/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/richtexteditor" element={<RichTextEditor />} />
      </Routes>
    </animated.div>
    </div>
    
    
    
    
  ));
};

export default App;