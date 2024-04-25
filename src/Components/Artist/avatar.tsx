import fergat from "../../assets/Ellipse Fehrat.png"
import Sebastian from "../../assets/Ellipse Sebastian.png"
import Javier from "../../assets/Ellipse Javier.png"
import Erick from "../../assets/Ellipse Erick.png"
const Avatar = () => {
    const testmonlise = [
        {
            image: fergat,
            Name: "Ferhat Deniz",
        },        {
            image: Sebastian,
            Name: "Sebastian",
        },        {
            image: Javier,
            Name: "Javier Miranda",
        },        {
            image: Erick,
            Name: "Erick Butler",
        },
    ]
    return ( 
        <div className="flex flex-wrap justify-between small:justify-start gap-5">
            {
                testmonlise.map((value, index)=> (
                    <div key={index}>
                        <img src={value.image} alt="" className="py-5 hover:scale-75 transition-all duration-500 cursor-pointer small:w-[100px] "/>
                        <h1 className="text-3xl font-semibold py-3">{value.Name}</h1>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Avatar;