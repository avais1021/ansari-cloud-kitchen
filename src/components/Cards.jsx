import React from 'react'
import { FaLeaf } from "react-icons/fa6";
import { GiChickenLeg } from "react-icons/gi";
import { AddItem, totalPrice,} from '../reduxtoolkit/cartSlice';
import { useDispatch } from 'react-redux';
 import { toast } from 'react-toastify';


const Cards = (item) => {

    const dispatch = useDispatch();

    const {id, food_name, food_type, food_image, price , food_quantity } = item;
    const discountPrice = Math.floor(price * 0.1);
    // const discountPrice = price - (price * 0.5);
    // console.log(food_type, 'food_type');

    const notify = () => {
        toast.success("Item added" , {
            autoClose : 1000,
        });
    }

    return (
        <div className='w-[300px] min-[350px] bg-white rounded-[10px] shadow-xl p-2.5 hover:scale-105 transition duration-500'>
            <img src={food_image} alt={food_name} className='w-[90%] h-[150px] rounded-[10px] mb-4 mx-auto' />
            <h2 className='mb-4 font-semibold'>{food_name}</h2>
            <div className='mb-3 flex justify-between items-center'>
                <p className='text-green-500 font-semibold'>Rs {discountPrice}</p>
                <div className='flex justify-center items-center gap-1.5'>{food_type === "veg" ? <FaLeaf className='text-green-500' /> : <GiChickenLeg className='text-green-500' /> }
                    <span className='text-green-400 font-semibold'>{food_type === "veg" ? "veg" : "non veg"}</span></div>
            </div>
            <button onClick={ () => ( dispatch(AddItem({id, food_name, food_type, food_image, discountPrice , food_quantity })) , dispatch(totalPrice()) , notify() )} className='w-full py-2.5 bg-green-600 text-white hover:bg-green-200 hover:text-green-600 rounded-md cursor-pointer'>Add to dish</button>
        </div>
    )
}

export default Cards
