import React from "react";
import { useState } from "react";

const ItemCount = ({ onAdd, initial, stock }) => {
  const [qty, setQty] = useState(initial);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className=" flex flex-row justify-center items-center rounded-md bg-slate-100 border-2 border-black">
      <button
        className="disabled:opacity-40 m-1 px-1 text-lg text-black rounded-full  cursor-pointer hover:shadow-md hover:bg-violet-500 transition active:bg-violet-400 active:shadow-none"
        onClick={() => addProduct(-1)}
        disabled={qty === initial}
      >
        -
      </button>
      <span className="text-center">{qty}</span>
      <button
        className="disabled:opacity-40   m-1 px-1 text-lg text-black rounded-full cursor-pointer hover:shadow-md hover:bg-violet-500 transition active:bg-violet-400 active:shadow-none"
        onClick={() => addProduct(+1)}
        disabled={qty === stock}
      >
        +
      </button>
      <button
        className="bg-slate-100 p-1 border-black font-bold text-base cursor-pointer hover:shadow-md hover:bg-violet-500 text-black rounded-md  disabled:opacity-40"
        onClick={() => {
          onAdd(qty);
        }}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;
