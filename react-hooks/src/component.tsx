import React, { memo, useCallback, useState } from 'react'

interface MyChildProp {
    handleClick: () => void;
}

// 1. MyChild is defined OUTSIDE the parent
const MyChild = React.memo(({ handleClick }: MyChildProp) => {
  console.log("Child rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

export function MyParent() {
  const [count, setCount] = React.useState(0);

  // 2. useCallback is a hook, it MUST be inside the parent component
  const memoizedFunction = React.useCallback(() => {
    console.log("Doing something...");
    
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
      <MyChild handleClick={memoizedFunction} />
    </div>
  );
}
