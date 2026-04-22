import React from 'react'

interface MyChildProp {
    handleClick: () => void;
}

const MyChild = React.memo(({ handleClick }: MyChildProp) => {
  console.log("Child rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

export function MyParent() {
  const [count, setCount] = React.useState(0);

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
