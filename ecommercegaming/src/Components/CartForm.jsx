import React, { useContext, useState } from 'react';
import { isEmail, isEmpty } from 'validator';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { getTotalPrice } from '../helpers/calculateFunctions';
import { createItem, deleteItem } from '../helpers/firebaseHelpers';
import { presentToast } from '../helpers/ui';
import useForm from '../hooks/useForm';
import PacmanLoader from 'react-spinners/PacmanLoader';

const CartForm = () => {
  const navigate = useNavigate();
  //me traigo el cart
  const { cart, deleteCart } = useContext(CartContext);
  const [success, setSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  //datos del formulario del formulario
  const [formValues, handleInputChange] = useForm({
    fname: '',
    lname: '',
    email: '',
  });

  const { fname, lname, email } = formValues;

  const dataOrder = {
    buyer: formValues,
    items: cart, //'Los del carrito'
    totalPrice: getTotalPrice(cart),
    date: new Date().toISOString(),
  };

  //validación del formulario

  //eventos del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      isEmpty(fname.trim()) ||
      isEmpty(lname.trim()) ||
      isEmpty(email.trim())
    ) {
      presentToast('Uno o más campos están vacíos');
      return;
    } else if (!isEmail(email)) {
      presentToast('El email no es válido');
      return;
    }

    console.log('Se envía el formulario');
    try {
      setSuccess(true);
      const response = await createItem(dataOrder, 'orders');
      deleteCart();
      setOrderNumber(response);
    } catch (error) {}
  };

  const cancelOrder = async () => {
    try {
      const response = await deleteItem(orderNumber, 'orders');
      presentToast('La orden a sido Cancelada');
      navigate('/');
      return;
    } catch (error) {}
  };

  return (
    <>
      {success ? (
        <>
          {orderNumber ? (
            <div className="flex flex-col items-center m-8 text-lg bg-gray-100 p-4 gap-4 mr-72 ml-72 rounded-md">
              <p className="text-lg font-medium">
                Tu compra se generó con el número de orden:{' '}
              </p>
              <h2 className="text-lg text-black font-semibold m-4 bg-gray-200 p-2 rounded-md hover:bg-blue-500 hover:text-white border-black hover:scale-110 duration-700">
                {orderNumber}
              </h2>

              <button
                className="button button-primary m-8 p-2 text-blue-400"
                onClick={cancelOrder}
              >
                Cancelar orden
              </button>
              <Link
              to="/"
              className="p-2 rounded-md border-solid border-2 m-8 font-semibold bg-violet-300 hover:bg-blue-500 hover:text-white border-black hover:scale-105 duration-700"
            >
              Volver al Inicio
            </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center m-48">
              <p>Procesando tu compra...</p>
              <PacmanLoader color="#b723c1" />
            </div>
          )}
        </>
      ) : (
        
        <form
          className="flex flex-col place-items-center p-2 font-medium"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl p-8 capitalize m-2 bg-neutral-100 rounded-md">
            Ingresa tus datos para terminar la compra
          </h2>
          <div >
            <label className="text-lg" htmlFor="">
              First Name :{' '}
            </label>
            <input
              className="rounded-md border-2 p-1 border-gray-500 m-2"
              type="text"
              name="fname"
              value={fname}
              onChange={handleInputChange}
            />
          </div>
          <div >
            <label className="text-lg" htmlFor="">
              Last Name :{' '}
            </label>
            <input
              className="rounded-md border-2 p-1 border-gray-500 m-2"
              type="text"
              name="lname"
              value={lname}
              onChange={handleInputChange}
            />
          </div>
          <div >
            <label className="text-lg p-6" htmlFor="">
              Email :{' '}
            </label>
            <input
              className="rounded-md border-2 p-1 border-gray-500 m-2"
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="rounded-md border-solid border-2 p-2 mt-6 font-semibold bg-violet-300 hover:bg-blue-500 hover:text-white border-black hover:scale-105 duration-700"
          >
            Finalizar compra
          </button>
        </form>
      )}
    </>
  );
};

export default CartForm;