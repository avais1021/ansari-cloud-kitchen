import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RemoveItem, totalPrice } from '../reduxtoolkit/cartSlice';
import { AddQty } from '../reduxtoolkit/cartSlice'
import { toast } from 'react-toastify';



const CartItem = () => {

  const dispatch = useDispatch()
  const cartArray = useSelector(state => state.cart.cartItem)
  console.log(cartArray, 'cartArray cart item component');

  const notify = () => {
    toast.error("Item removed", {
      autoClose: 1000,
    });
  }

  return (
    <>
      {cartArray.map((item) => {
        const { id, food_name, food_type, food_image, discountPrice, food_quantity } = item

        return (
          <div key={item.id} className='mb-5 flex justify-between items-center p-2 gap-3.5 shadow-xl'>
            <div className='flex gap-5'>
            <div className='w-[150px] h-[100px]'>
              <img src={food_image} alt={food_name} className='w-[100%] h-[100%] rounded-md' />
            </div>
              <div className='flex justify-center flex-col gap-2'>
                <p className='font-semibold text-[15px] max-w-[78px] md:max-w[130px] w-[100%] '>{food_name}</p>
                <div className='border-green-500 border-2 w-fit flex justify-center items-center rounded-md text-green-500'><FaMinus onClick={() => (dispatch(AddQty({ id, type: "decrement" })), dispatch(totalPrice()))} className='w-[25px] cursor-pointer' /><span className='bg-gray-200 w-[25px] text-center'>{food_quantity}</span><FaPlus onClick={() => (dispatch(AddQty({ id, type: "increment" })), dispatch(totalPrice()))} className='w-[25px] cursor-pointer' /></div>
              </div>

            </div>
            <div className='flex justify-center flex-col gap-2'><h2 className='text-green-500 font-semibold text-[18px] md:text-[20px]'>Rs {discountPrice * food_quantity}</h2> <MdDelete onClick={() => {
              dispatch(RemoveItem(id));
              dispatch(totalPrice());
              notify();
            }} className='text-red-600 text-[20px] md:text-[25px] cursor-pointer' /></div>
          </div>
        )
      })}
    </>
  )
}

export default CartItem
