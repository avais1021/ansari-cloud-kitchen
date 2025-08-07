import { TiThSmall } from "react-icons/ti";
import { GiCoffeeCup } from "react-icons/gi";
import { MdSoupKitchen } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { MdFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";


const Categories = [
    {
        id: 1,
        name: "All",
        icon: <TiThSmall className="w-[60px] h-[60px] text-green-600" />,
    },
    {
        id: "2",
        name: "breakfast",
        icon: <GiCoffeeCup className="w-[60px] h-[60px] text-green-600" />,
    },
    {
        id: "3",
        name: "soups",
        icon: <MdSoupKitchen className="w-[60px] h-[60px] text-green-600" />,
    },
    {
        id: "4",
        name: "pasta",
        icon: <CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />,
    },
    {
        id: "5",
        name: "main course",
        icon: <MdFoodBank className="w-[60px] h-[60px] text-green-600" />,
    },
    {
        id: "6",
        name: "pizza",
        icon: <GiFullPizza className="w-[60px] h-[60px] text-green-600" />,
    },
    {
        id: "7",
        name: "burger",
        icon: <GiHamburger className="w-[60px] h-[60px] text-green-600" />,
    },
]

export default Categories