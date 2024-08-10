import React, { useState, useEffect } from 'react';

function Home({ title }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `${title} - ${counter}`;
  }, [counter, title]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>{title}</h1>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)} style={{ marginRight: '10px' }}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default Home;
