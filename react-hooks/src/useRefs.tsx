import { useRef, useState, useEffect } from "react";

export default function useRefs( ){ 

    const [inputValue, setInputValue] = useState<string>("");

    const inputRef = useRef<string>("");
    
    useEffect(() => {
     inputRef.current = inputValue;
    }, [inputValue]);


    return(
    <>
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <p>{inputValue}</p>
    <p>{inputRef.current}</p>
    </>
    )
}
 
// export default function useRefs() {
//     // const [valueState, setValueState] = useState<string>("");
//     const [num, setNum] = useState<number>(0);

//     const inputRef = useRef<number>(0);

//     inputRef.current += 1;

//     // useEffect(() => {
       
//     // }, [num]);


//     //   useEffect(() => {
//     //     inputRef.current = inputRef.current + 1;
//     //   }, [inputRef.current]);


//     return (
//         <div>
//             <p>count: {num}</p>

//             {/* <input type="text" value={valueState} 
//       onChange={(e) => 
//       setValueState(e.target.value as string)} /> */}

//             <p>{inputRef.current}</p>
//             <button onClick={() => setNum(c => c + 1)}>click!</button>
//         </div>
//     )
// }

// import { useRef, useState } from "react";

// export default function useRefs() {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(0);

//   renderCount.current += 1; // updates silently, no re-render triggered

//   return (
//     <>
//       <p>Count: {count}</p>
//       <p>This component has rendered: {renderCount.current} times</p>
//       <button onClick={() => setCount(c => c + 1)}>Increment</button>
//     </>
//   );
// }