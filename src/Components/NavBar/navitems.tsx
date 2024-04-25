import gsap from "gsap";
import { useEffect, useRef } from "react";

const NavItems = () => {

    const buttonRef = useRef(null);
    
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.fromTo(buttonRef.current, { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 2 },);
      }, []);
    return ( 
        <div className="z-20 relative">
            <ul className="flex items-center gap-10 medium:flex-col min-w-full px-7 font-semibold medium:bg-gradient-to-t from-fuchsia-800 to-purple-700 w-full py-2 rounded-lg">
                <li className="nav"><a href="">About Us </a></li>
                <li className="nav"><a href="">Store </a></li>
                <li className="nav"><a href="">Games </a></li>
                <button className="bg-white text-black rounded-lg py-2 px-7 font-bold cursor-pointer" ref={buttonRef}>Connect Wallet</button>
            </ul>
        </div>
     );
}
 
export default NavItems;