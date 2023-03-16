import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "./CartItem";
import { getTotalPrice } from "../helpers/calculateFunctions";
import { TbShoppingCartOff } from "react-icons/tb";

const CartListItem = () => {
  const cartContext = useContext(CartContext);
  const { cart, deleteCart, removeItemById } = cartContext;

  return (
    <section className="flex flex-col justify-evenly object-contain bg-neutral-200 opacity-90 w-full h-full">
      <div>
        <table className="p-2 table-fixed w-full border border-slate-600 uppercase border-separate border-spacing-3">
          <thead>
            <tr>
              <th>productos</th>
              <th>precio</th>
              <th>cantidad</th>
              <th>total</th>
              <th></th>
            </tr>
          </thead>
        </table>
        {cart ? (
          cart.map((product) => {
            return (
              <CartItem
                key={product.id}
                item={product}
                removeItemById={removeItemById}
              />
            );
          })
        ) : (
          <p>cargando productos</p>
        )}
      </div>
      <div>
        {cart.length ? (
          <div>
            <table className=" table-fixed w-full border border-slate-400 border-separate border-spacing-2">
              <tbody>
                <tr className="uppercase text-lg font-semibold">
                  <td></td>
                  <td></td>
                  <td>total</td>
                  <td>Usd {getTotalPrice(cart)}</td>
                  <td className="inline-block">
                    <button
                      className="flex items-center rounded-md border-solid border-2 p-1 font-semibold bg-violet-300 hover:bg-black hover:text-white border-black hover:scale-90 duration-700"
                      onClick={deleteCart}
                    >
                      <p className="pr-1">Vaciar</p>
                      <TbShoppingCartOff />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-4">
            <p className="p-4 font-semibold">No Hay Productos en el Carrito</p>
            <Link
              className="text-lg uppercase underline text-fuchsia-800 font-semibold"
              to="/"
            >
              Seguir comprando
            </Link>
          </div>
        )}
        <Link to="/checkout">
          <button className="p-2 rounded-md border-solid border-2 m-8 font-semibold bg-violet-300 hover:bg-blue-400 hover:text-black border-black hover:scale-105 duration-700">
            Siguiente
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CartListItem;
