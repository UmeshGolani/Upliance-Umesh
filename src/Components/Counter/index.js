import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col justify-evenly w-36 h-36 border border-black'> 
        <div className="flex flex-row justify-between">
        <button onClick={() => setCount(count => count + 1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>+</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count => count - 1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>-</button>
        </div>
        <button onClick={() => setCount(count => count  = 0 )} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Reset</button>

    </div>
  )
}

export default Counter