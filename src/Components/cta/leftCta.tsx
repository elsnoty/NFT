import cta from "../../assets/cta img.png"
const LeftCta = () => {
    return ( 
        <div>
            <img src={cta} alt="" className="small:min-w-[240px]"/>
            <div className=" w-[800px] h-[800px] bg-gradient-to-t from-purple-950 to-fuchsia-700 rounded-full absolute blur-[150px] top-0 left-0 large:w-[300px] -z-50" ></div>
            
        </div>
     );
}
 
export default LeftCta;