import Ferhat from "../../assets/Ferhat.png"
import Erick from "../../assets/Erick.png"
import Poliana from "../../assets/Poliana.png"
import Btn from "../btn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Compo, Item } from "./LeftTrend"

const RightTrend = () => {
    const data: Item[] = [
        {
        image: Ferhat,
        title: "Spastian",
        disc: "Golden Flower",
        nft: "2.3 ETH"
        },
        {
            image: Poliana,
            title: "Javier",
            disc: "Golden Flower",
            nft: "2.3 ETH"
        },
        {
            image: Erick,
            title: "Spastian",
            disc: "Golden Flower",
            nft: "2.3 ETH"
        },
    ]

    return ( 
        <div className="pt-20 relative">
            
            {
                data.map((value, index)=>(
                    <Compo item={value} key={index}/>
                ))
            }
            <Btn
            text="Explore More"
            className=" absolute right-0 my-5 flex items-center text-black bg-white w-56
            justify-center gap-2 group py-2 rounded-md hover:scale-90 transition-transform duration-200"
            icon={
            <FontAwesomeIcon icon={faArrowRight} className=" -rotate-45 group-hover:translate-x-2 group-hover:rotate-0 transition-transform " />
          }
        />
<div className="absolute w-[500px] h-[700px] rounded-full bg-gradient-to-t from-purple-900 to-fuchsia-800 top-10 right-0 -z-20 blur-[170px]"></div>
<div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-t from-purple-900 to-fuchsia-800 bottom-0 right-0 -z-20 blur-[170px]"></div>
        </div>
     );
}
 
export default RightTrend;