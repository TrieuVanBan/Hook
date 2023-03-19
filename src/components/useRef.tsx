import React, { useEffect, useRef, useState } from "react";

type Props = {};

const useReff = (props: Props) => {
  // Bước 1
  const [count, setCount] = useState(0);
  const refCount = useRef(count);
  const ref = useRef(null);

  // Bước 3
  useEffect(() => {
    refCount.current = count;
  }, [count]);

  const handleClick = () => {
    setCount(() => count + 1);
  };

  const clickFocus = () => {
    ref.current.focus();
  };

  // Bước 2
  return (
    <>
      <div>useRef</div>
      <p>Count {count}</p>
      <p>Ref {refCount.current}</p>
      <button onClick={handleClick}>Click</button>
      <br />
      <br />
      <input type="text" ref={ref} />
      <button onClick={clickFocus}>Focus</button>
    </>
  );
};

export default useReff;
