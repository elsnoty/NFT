import art from "../../assets/Rectangle 22748.png"
const LeftArt = () => {
    return ( 
        <div className="relative">
        <img src={art} alt="" />
        <div className="left-0 w-[650px] h-[600px] medium:w-[180px] bg-gradient-to-t from-purple-950 to-fuchsia-700 rounded-full absolute -z-20 blur-[150px] top-0"></div>
        </div>
     );
}
 
export default LeftArt;
