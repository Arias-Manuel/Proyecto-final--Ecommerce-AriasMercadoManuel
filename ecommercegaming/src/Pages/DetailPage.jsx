import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../Components/ItemDetailContainer";

const DetailPage = () => {
  let { product } = useParams();
  return (
    <main className="h-min-main ">
      <ItemDetailContainer product={product} />
    </main>
  );
};
export default DetailPage;
