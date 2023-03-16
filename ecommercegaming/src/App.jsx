import React from "react";
import CartProvider from "./Context/CartContext";
import AppRoutes from "./Routes.js/AppRoutes";



export default function App() {
  return (
    <>
    <CartProvider>
    
      <AppRoutes/>

    </CartProvider>
    
    </>
  );
}