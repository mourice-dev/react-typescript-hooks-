import { useRef, useState, useEffect } from "react";

export default function useRefs() {
    // const [valueState, setValueState] = useState<string>("");
    const [num, setNum] = useState<number>(0);

    const inputRef = useRef<number>(0);
    useEffect(() => {
        inputRef.current += 1;
    }, [num]);


    //   useEffect(() => {
    //     inputRef.current = inputRef.current + 1;
    //   }, [inputRef.current]);


    return (
        <div>
            <p>count: {num}</p>

            {/* <input type="text" value={valueState} 
      onChange={(e) => 
      setValueState(e.target.value as string)} /> */}

            <p>{inputRef.current}</p>
            <button onClick={() => setNum(c => c + 1)}>click!</button>
        </div>
    )
}
