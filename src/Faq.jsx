import React, { useState } from "react";

const Faq = ({ data }) => {
  const [plus, setPlus] = useState(true);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setPlus(!plus);
    setShow(!show);
  };
  return (
    <div className="p-2 hover:bg-gray-50" key={data.id}>
      <div className="flex justify-between border-b py-2">
        <h1 className="text-xl">{data.quation}</h1>
        <button onClick={() => handleClick()}>
          {plus ? (
            <img src="./plus.svg" alt="" className="w-4 h-4" />
          ) : (
            <img src="minus.svg" alt="" className="w-4 h-4" />
          )}
        </button>
      </div>
      {show && <p className="text-sm text-gray-500 py-2">{data.ans}</p>}
    </div>
  );
};

export default Faq;
