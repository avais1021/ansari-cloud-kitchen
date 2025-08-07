import React, { useContext, useEffect, useRef, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories';
// import { food_items } from '../food';
import Cards from '../components/Cards';
import { dataContext } from '../context/UserContext';
import { RxCross1 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import OrderConfirmation from '../components/OrderConfirmation';
import emptycart from "../assets/emptycart.png"
import { toast } from 'react-toastify';

const Home = () => {

    const targetRef = useRef(null)
    const cartArray = useSelector(state => state.cart.cartItem)
    const slice = useSelector(state => state.cart)
    const totalPrice = useSelector(state => state.cart.totalPrice)

    const [popupVal, setPopupVal] = useState(false);

    console.log(cartArray, 'cartArray');
    console.log(slice, 'slice');

    const { foodItemsArray, setFoodItemsArr, input, setInput, showCart, setShowCart, } = useContext(dataContext)
    console.log(foodItemsArray, 'foodItemsArray');
    console.log(input, 'input Home');
    console.log(showCart, 'showCart');

    const [categoriesVal, setCategoriesVal] = useState("All");
    console.log(categoriesVal, 'categoriesVal');

    const [foodItemsData, setFoodItemsData] = useState(foodItemsArray)

    console.log(foodItemsData, 'foodItemsData');

    // categories click -------- 

    const clickCategorie = (catVal) => {
        setInput("")
        setCategoriesVal(catVal)
       
        if (window.matchMedia('(max-width: 768px)').matches) {

            if (targetRef.current) {
                const yOffset = -90; // Offset for sticky headers or spacing
                const y = targetRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    }

    // total price ---------- 
    const deliveryCharge = 20;
    const totalPriceIncludeDelivery = cartArray.length > 0 ? totalPrice + deliveryCharge : 0;


    useEffect(() => {


        if (categoriesVal !== "All") {
            // alert("cat")
            let filterCategoriesWise = foodItemsArray.filter(item => item.food_category === categoriesVal)
            setFoodItemsData(filterCategoriesWise)
        } else {
            setFoodItemsData(foodItemsArray)
            // alert("cat else")
        }


        let updatedfoodArray = foodItemsArray;
        if (input.trim() !== "") {
            updatedfoodArray = foodItemsArray.filter((item) => (item.food_name.toLowerCase().includes(input.toLowerCase()) || item.food_category.toLowerCase().includes(input.toLowerCase()) || item.food_type.toLowerCase().includes(input.toLowerCase())))
            // updatedfoodArray = foodItemsArray.filter((item) => item.food_type.toLowerCase().includes(input.toLowerCase()))
            setFoodItemsData(updatedfoodArray);
        }





    }, [categoriesVal, input])




    return (
        <div className='bg-[oklch(0.96_0.02_252.91)] min-h-screen pb-5'>
            <Nav />

            {/* categories  */}
            {!input && (
                <div className='flex justify-center items-center flex-wrap gap-5 mb-6'>

                    {Categories.map((item) => {
                        return (
                            <div onClick={() => clickCategorie(item.name)} className={`w-[140px] h-[125px] ${categoriesVal === item.name ? 'bg-green-200' : "bg-white"}  flex justify-center items-center flex-col gap-0 md:gap-4 shadow-xl hover:bg-green-200 transition duration-500 cursor-pointer`} key={item.id}>
                                {item.icon}
                                <p className='text-[20px]'>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            )}


            {/* Cards ----  */}

            {foodItemsData.length > 0 ?

                <div ref={targetRef} className='flex justify-center items-center flex-wrap gap-[20px] '>
                    {foodItemsData.map((item) => {
                        return (
                            <Cards {...item} key={item.id} />

                        )
                    })}
                </div> :

                <h2 className='mt-10 text-green-500 font-semibold text-center text-[35px]'>Dish Not Found</h2>

            }



            {/* cart section ------  */}

            <section className={`max-w-[500px] w-[100%] h-[100vh] overflow-scroll bg-white z-30 fixed top-0 right-0 p-5 removescroll ${showCart ? 'translate-0' : 'translate-x-full'} transition-all duration-500`}>
                <div className='flex justify-between items-center mb-5'>
                    <h2 className='text-green-600 font-semibold'>Order Items</h2>
                    <RxCross1 onClick={() => setShowCart(false)} className='text-red-500 font-bold text-[20px] cursor-pointer' />
                </div>

                {cartArray.length > 0 ?
                    <div>
                        <CartItem />

                        <div className='border-t-2 border-b-2 py-3 mb-3 font-medium'>
                            <div className='flex justify-between items-center'>
                                <p className='text-[18px] text-gray-800'>Subtotal</p>
                                <p className='text-[18px] text-green-500'>Rs {totalPrice}/-</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-[18px] text-gray-800'>Delivery Fee</p>
                                <p className='text-[18px] text-green-500'>Rs 20/-</p>
                            </div>

                        </div>

                        <div className='text-[22px] flex justify-between items-center font-medium mb-3'><h2>Total</h2> <p className='text-green-500'>Rs {totalPriceIncludeDelivery}/-</p></div>

                        <button className='w-full py-2.5 bg-green-600 text-white hover:bg-green-200 hover:text-green-600 rounded-md cursor-pointer' onClick={() => setPopupVal(true)}>Place Order</button>

                    </div>
                    : <div className='min-h-[100vh] flex flex-col justify-center items-center' >
                        <h2 className='text-orange-400 font-semibold mb-8 text-[25px]'>Empty Card</h2>
                        <img className='w-[250px] h-[200px]' src={emptycart} alt="empty cart" />
                    </div>}

            </section>

            {/* <section className=' max-w-[500px] w-[100%] h-[500px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg '>
                <h1>order</h1>
            </section> */}

            {popupVal && <OrderConfirmation setPopupVal={setPopupVal} />}




        </div>
    )
}

export default Home
