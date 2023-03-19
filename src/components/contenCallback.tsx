import React, { memo } from "react";

type Props = {};

const contenCallback = ({ onIncrease }) => {
  console.log("render");

  return (
    <>
      <button onClick={onIncrease}>Click</button>
    </>
  );
};

export default memo(contenCallback);
