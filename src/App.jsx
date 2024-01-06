import { useEffect } from "react";
import "./App.css";
import CartList from "./components/CartList";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./control/cartSlice";


function App() {
  const dispatch = useDispatch();
  const {carts} = useSelector((store) => store.cart);


  useEffect(() => {
    dispatch(calculateTotal());
  }, [carts])

  return (
    <div className=" bg-blue-950 text-white">
      <Navbar/>
      <CartList/>
    </div>
  );
}

export default App;
