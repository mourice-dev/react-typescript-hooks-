import { useRef, useState, useEffect } from "react";

export default function useRefs() {
  const [valueState, setValueState] = useState<string>("");

  const inputRef = useRef<number>(0);
  
  useEffect(() => {
    inputRef.current = inputRef.current + 1;
  }, [inputRef.current]);
  return (
    <div>
      <p>count: {valueState}</p>
      <input type="text" value={valueState} 
      onChange={(e) => 
      setValueState(e.target.value as string)} />
     <p>{inputRef.current}</p>
    </div>
  )
}
