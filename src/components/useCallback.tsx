import React, { useState, useCallback } from "react";
import ContenCallback from "../components/contenCallback";

type Props = {};

const useCallbackk = (props: Props) => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((e) => e + 1);
  }, []);
  return (
    <>
      <div>UserCallback</div> <br />
      <p>{count}</p>
      <ContenCallback onIncrease={handleClick} />
    </>
  );
};

export default useCallbackk;
