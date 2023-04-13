import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const {cart} = useSelector((state)=> state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( ()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0));
  },[cart])
  return (
    <div>
    {
      cart.length > 0 ?
      (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {
              cart.map( (item, index)=>{
                return <CartItem key={item.id} item={item} />
              })
            }
          </div>
    <div className="w-[100%] md:w-[40%] mt-5  flex flex-col ">
          <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">

          <div className="flex flex-col gap-5 ">
          <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
          <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
          <p>
          <span className="text-gray-700 font-semibold text-xl">Total Item:{cart.length}</span>
          </p>
          </div>

          {/* checkout button and total price */}
          <div className="flex flex-col"> 
          <p className="text-xl font-bold">Total Amount: ${totalAmount} </p>
          <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
            Checkout
          </button>
          </div>
          </div>
          </div>
          
    </div>
      )
      :
      (
        <div className="flex flex-col gap-4 justify-center items-center mx-auto h-[100vh]">
        <h1 className="font-bold">Cart Empty</h1>
        <Link to={"/"}>
          <button className="bg-green-400 text-white font-bold rounded-md px-2 py-3">
            Shop Now
          </button>
        </Link>
      </div>
      )

    }
    </div>
  );
};

export default Cart;
