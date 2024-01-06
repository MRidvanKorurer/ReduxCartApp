import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from 'react-redux';


const Navbar = () => {
    const {quantity} = useSelector((store) => store.cart);
  return (
    <div className=' flex justify-around items-center bg-gray-900 text-white p-4'>
        <div>
            <h2 className=' font-bold italic text-xl'>Kurslarım Projesi</h2>
        </div>
        <div className=' relative'>
            <FaShoppingBag className=' text-xl'/>
            <span className=' absolute w-4 flex justify-center items-center rounded-full bg-red-500 text-white text-sm -right-3 -top-3'>
                {quantity}
            </span>
        </div>
    </div>
  )
}

export default Navbar