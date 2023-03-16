import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, qty) => {
    const newItem = { ...item, qty };

    if (cart.some((product) => product.id == newItem.id)) {

      console.warn("El producto ya está en el carrito");
      const newCart = cart.map((product) => {
        if (product.id == newItem.id) {
          product.qty = product.qty + newItem.qty;
        }
        return product;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeItemById = (id) => {
    const newCart = cart.filter((el) => el.id !== id);
    setCart(newCart);
  };

  const deleteCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        deleteCart,
        removeItemById,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
