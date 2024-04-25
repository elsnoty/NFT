import Countdown from "../Hero/countdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Btn from "../btn";
const RightArt = () => {
    const targetDate = new Date("2024-12-31T23:59:59");

    return ( 
        <div className="">
            <h1 className="text-[72px] small:text-5xl font-normal pb-5">
                Bitcoin Art Work
            </h1>
            <p>Created By <span className="text-fuchsia-800 font-bold">Jonathan Borba</span></p>
            <div className="flex gap-7 py-5">
                <div>
                    <p className="text-sm">Current Bid</p>
                    <span className="block font-bold py-1 text-xl">1.09 ETH</span>
                    <span className="font-bold">$1,835</span>
                </div>
                <div className="w-1 h-20 bg-white"></div>
                <div className="text-center">
                <p>Auction Ends In</p>
                <Countdown targetDate={targetDate}/>
                </div>
            </div>
            <Btn
            text="View Art Work"
            className="flex items-center text-black bg-white w-64 justify-center gap-2 group py-2 rounded-md hover:scale-90 transition-transform duration-200"
            icon={
            <FontAwesomeIcon icon={faArrowRight} className=" -rotate-45 group-hover:translate-x-2 group-hover:rotate-0 transition-transform " />
          }
        />
        </div>
     );
}
 
export default RightArt;