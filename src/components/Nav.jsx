import React, { useContext, useEffect } from 'react'
import { MdNoFood } from "react-icons/md";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { dataContext } from '../context/UserContext';
import { useSelector } from 'react-redux';
import { totalPrice } from '../reduxtoolkit/cartSlice';


const Nav = () => {

    const cartArray = useSelector(state => state.cart.cartItem)

    console.log(cartArray,'cartArray Nav page');

    const {input,setInput , showCart , setShowCart} = useContext(dataContext)

    console.log(showCart,'showCart');

    useEffect(() => {
    }, [])

    return (
        <div className='w-full min-h-[85px] mb-3 border-b-2 border-green-500 flex justify-around items-center sticky top-0 left-0 z-20 bg-[oklch(0.96_0.02_252.91)]'>
            <div className='bg-white flex items-center justify-center w-[40px] h-[40px] rounded-md shadow-xl'>
                <MdNoFood className='text-green-500 w-[30px] h-[30px] p-1' />
            </div>
            <div className='w-[60%] bg-white rounded-md flex items-center gap-3 p-2 shadow-xl'>
                <BsSearch className='text-green-500 w-[20px] h-[20px] ' />
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Search your dishes' className='outline-0 w-[100%] text-2xl' />
            </div>
            <div onClick={() =>  {setShowCart(true) , totalPrice() } } className='bg-white flex items-center justify-center w-[50px] h-[40px] rounded-md shadow-xl cursor-pointer relative'>
                <BiSolidShoppingBags className='text-green-500 w-[30px] h-[30px] p-1' />
                <span className='absolute top-0 right-1'>{cartArray.length}</span>
            </div>
        </div>
    )
}

export default Nav
