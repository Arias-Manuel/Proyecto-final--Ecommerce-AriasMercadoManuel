import React from "react";

import CartForm from "../Components/CartForm";

const Checkout = () => {
  return (
    <main className="h-min-main flex flex-col items-center m-4 ">
      <div className="bg-neutral-100 rounded-md flex flex-col items-center p-4">
        <CartForm />
      </div>
    </main>
  );
};

export default Checkout;
