import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { deleteCart } from "../control/cartSlice";


const CartList = () => {
    const dispatch = useDispatch();

  const { carts,  total } = useSelector((store) => store.cart);

//   console.log(useSelector((store) => store.cart));

  return (
    <div className=" p-8">
      {carts.map((item, index) => {
        return <CartItem key={index} item={item} />;
      })}
      <div className=" flex flex-col justify-center items-center gap-2">
        <p>Toplam: {total}₺</p>
        <button onClick={() => dispatch(deleteCart())} className=" bg-red-600 text-white rounded w-32 p-1 hover:bg-red-800 transition-all">Temizle</button>
      </div>
    </div>
  );
};

export default CartList;
