import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item, removeItemById }) => {
  return (
    <div>
      <table className=" table-fixed w-full border border-slate-400 border-separate border-spacing-2 hover:bg-violet-400">
        <tbody>
          <tr>
            <td>{item.name}</td>
            <td>Usd {item.price}</td>
            <td>{item.qty} </td>
            <td>Usd {item.qty * item.price}</td>
            <td>
              <FaTrashAlt
                className="w-full h-4 cursor-pointer hover:scale-90"
                onClick={() => removeItemById(item.id)}
              ></FaTrashAlt>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
