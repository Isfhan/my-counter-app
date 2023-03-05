import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Counter App</h1>
      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={decrement} className="mx-2">
          -
        </Button>
        <h2>{count}</h2>
        <Button variant="primary" onClick={increment} className="mx-2">
          +
        </Button>
      </div>
    </div>
  );
}

export default Counter;
