import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";
import { getTotalItems } from "../helpers/calculateFunctions";

const CardWitget = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;
  const navigate = useNavigate();
  return (
    <button
      disabled={cart.length > 0 ? false : true}
      onClick={() => {
        navigate("/cart");
      }}
      className="cart-widget flex flex-row p-2 gap-1 disabled:opacity-80 text-white disabled:text-gray-500"
    >
      <FaCartPlus size="2rem" />
      <span className="text-white text-lg">
        {cart.length > 0 ? getTotalItems(cart) : null}
      </span>
    </button>
  );
};

export default CardWitget;
