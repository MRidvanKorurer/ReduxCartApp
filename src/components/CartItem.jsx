import React from 'react'
import { FaChevronDown, FaChevronUp} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, increase, decrease } from '../control/cartSlice';



const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const {quantity} = useSelector((store) => store.cart);

  return (
    <div className=' flex justify-between items-center border w-1/2 mx-auto m-8 rounded shadow-white shadow-lg'>
        <div>
            <img className=' w-96 h-80' src={item.img} alt="" />
        </div>
        <div className=' flex flex-col justify-center items-center gap-4 mr-6'>
            <h2>{item.title}</h2>
            <h2>{item.price}₺</h2>
            <div className=' flex flex-col gap-3 justify-center items-center'>   
                <FaChevronUp onClick={() => dispatch(increase(item.id))}/>
                <span>{item.quantity}</span>
                <FaChevronDown onClick={() => dispatch(decrease(item.id))}/>
            </div>
            <button onClick={() => dispatch(deleteCartItem(item.id))} className=' bg-red-500 text-white rounded p-1 w-20 hover:bg-red-700 transition-all'>Sil</button>
        </div>
    </div>
  )
}

export default CartItem