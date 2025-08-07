import React, { useState } from 'react'
import { FaRegSquareCheck } from "react-icons/fa6";
import { RxCross1 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
    
const OrderConfirmation = ({setPopupVal}) => {

    const [number , setNumber] = useState("")

        const numberLimit = (e) => {
            if(e.target.value.length <= 10){
                setNumber(e.target.value)
            }
        }

        const cartArray = useSelector(state => state.cart.cartItem)
        console.log(cartArray,'cartArray order component');
        const orders = cartArray.map((item) => `${item.food_name}(${item.food_type})`).join(', ')
        console.log(orders,'orders');
        // const userOrder = 

    return (
        <div className='w-[100%] h-[100%] bg-[#000000a8] fixed top-0 left-0 z-[99] px-5'>
            <section className=' max-w-[500px] w-[100%] h-[380px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg z-50 flex items-center justify-center relative'>
                    <form action="https://formspree.io/f/xjkoadpj" method="POST" className='flex flex-col items-center justify-center w-[100%]'>
                        <input className='max-w-[360px] w-[100%] rounded-md p-2 border mb-3 ' type="text" name='name' placeholder='Enter your name' />
                        <input className='max-w-[360px] w-[100%] rounded-md p-2 border mb-3 ' value={number} onChange={numberLimit} type="number" name='contact' maxLength={10} placeholder='Enter your contact' />
                        <textarea className='max-w-[360px] w-[100%] rounded-md p-2 border mb-3 text-black ' placeholder='Enter your adress' name='message'></textarea>
                        <textarea className='hidden' name="order" value={orders} id=""></textarea>
                        <div className='flex justify-start gap-5 items-center max-w-[360px] w-[100%] text-green-500 mb-5'><FaRegSquareCheck className='text-[25px] text-green-500' /> CASH ON DELIVERY</div>
                        <button className='p-2 bg-green-600 text-white hover:bg-green-200 hover:text-green-600 rounded-md cursor-pointer' type='submit'>Confirm Order</button>
                        <RxCross1 onClick={ () => setPopupVal(false)} className='cursor-pointer absolute top-3 right-3 font-bold text-[20px]' />
                    </form>
            </section>
        </div>
    )
}

export default OrderConfirmation
