import { useEffect, useRef, useState } from "react";
import logo from "../../assets/Union.svg"
import gsap from "gsap";
import NavItems from "./navitems";
import Hamburger from "./navIcon";


const Nav = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const navRef = useRef(null);
  
    useEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(navRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
  
    }, []);
    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return ( 
        <div className="px-24 py-7 flex justify-between z-50 medium:px-10" ref={navRef}>
            <img src={logo} alt="" className="cursor-pointer"/>
            {width >791 ?
            <NavItems />
            : 
            <Hamburger/>}
        </div>
     );
}
 
export default Nav;