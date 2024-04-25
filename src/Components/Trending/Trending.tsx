import LeftTrend from "./LeftTrend";
import RightTrend from "./RightTrend";

const Trending = () => {
    return ( 
        <div className="flex justify-between gap-5 px-20 relative py-16 xlarge:px-10 large:flex-col large:items-center">
        <LeftTrend />
        <RightTrend />
        </div>
     );
}
 
export default Trending;