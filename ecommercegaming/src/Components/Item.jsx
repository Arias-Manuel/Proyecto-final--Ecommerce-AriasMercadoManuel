import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`}>
      <div className="flex flex-col flex-nowrap p-1 items-center rounded-md bg-neutral-200 border-2 border-black hover:bg-cyan-200 duration-500">
        <h3 className=" w-full text-center text-lg font-bold uppercase ">
          {product.name}
        </h3>
        <img
          className="w-48 h-48 border-spacing-0 border-2 rounded-md border-gray-600 hover:scale-105 duration-500 ;"
          src={product.img}
          alt=""
        />
        <h3 className="bg-neutral-100 w-full text-center text-black font-bold capitalize">
          Usd {product.price}
        </h3>

        <h3 className="bg-neutral-100 w-full text-center text-black font-bold uppercase">
          {product.platforms}
        </h3>
      </div>
    </Link>
  );
};

export default Item;
