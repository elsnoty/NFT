import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from "../btn";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ArtistTiltle = () => {
    return ( 
        <div className="flex justify-between items-center small:flex-col">
            <h1 className="text-5xl font-bold">Popular Artists</h1>
            <Btn
            text="View all Artists"
            className="my-5 flex items-center text-black bg-white w-56
            justify-center gap-2 group py-2 rounded-md hover:scale-90 transition-transform duration-200"
            icon={
            <FontAwesomeIcon icon={faArrowRight} className=" -rotate-45 group-hover:translate-x-2 group-hover:rotate-0 transition-transform " />
          }
            />
        </div>
     );
}
 
export default ArtistTiltle;