import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [waveHeight, setWaveHeight] = useState(0);

    // useEffect to update waveHeight based on count
    useEffect(() => {
        // Adjust waveHeight based on count
        setWaveHeight(count * 5); // You can adjust the multiplier to control the intensity of the wave effect
    }, [count]);

    return (
        <div className="counter-container flex justify-center items-center h-screen w-9/12 h-9/12">
            <div className='counter relative'>
               
                <div className='counter-content flex justify-between items-center bg-white p-4 border border-black rounded-lg w-full h-full'>
                    <button onClick={() => setCount(prevCount => prevCount + 1)} className='counter-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>+</button>
                    <h1>{count}</h1>
                    <button onClick={() => setCount(prevCount => Math.max(prevCount - 1, 0))} className='counter-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>-</button>
                    <button onClick={() => setCount(0)} className='counter-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Reset</button>
                </div>
            </div>
            <div className='wave absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-200 to-white'
                     style={{ height: `${waveHeight}px`, opacity: '0.6', animation: 'waveAnimation 1.5s linear infinite alternate' }}></div>
        </div>
    );
};

export default Counter;
