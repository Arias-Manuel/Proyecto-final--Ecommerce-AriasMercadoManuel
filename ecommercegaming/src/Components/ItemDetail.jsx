import React from 'react';
import { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

//ItemDetail recibe los datos del producto encontrado por id previamente y los muestra

const ItemDetail = ({ product }) => {
  const [addCart, setAddCart] = useState(false);

  const cartContext = useContext(CartContext);
  const { cart, addToCart } = cartContext;

  const onAdd = (qty) => {
    addToCart(product, qty);
    setAddCart(true);
  };
  return (
    <div className="flex w-1/2  bg-neutral-300 justify-evenly gap-2 items-center p-1 rounded-lg border-black border-2">
      <div className="w-1/2 h-4/5 rounded-xl p-2 overflow-hidden">
        <img
          className="w-3/4 h-full object-fill p-2 border-2 border-black hover:scale-105 duration-300"
          src={product.img}
          alt=""
        />
      </div>

      <div className="flex flex-col w-1/2 items-center justify-between gap-2 p-2 ">
        <div className="flex flex-col text-center">
          <h2 className="text-3xl font-bold text-center uppercase text-black pb-8">
            {product.name}
          </h2>
          <p className="text-xs">{product.description}</p>
        </div>

        <h2 className="text-2xl pt-16 font-semibold text-black">
          Precio: {product.price} $
        </h2>
        <div className="pt-8">
          {addCart ? (
            <Link
              to="/cart"
              className="p-2 rounded-md border-solid border-2 m-8 font-semibold bg-violet-300 hover:bg-blue-500 hover:text-white border-black hover:scale-105 duration-700"
            >
              Finalizar la compra
            </Link>
          ) : (
            <ItemCount onAdd={onAdd} initial={1} stock={product.stock} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;