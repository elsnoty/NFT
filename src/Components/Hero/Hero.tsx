import LeftHero from "./Left";
import RightHero from "./Right";

const Hero = () => {
    return ( 
        <main className="relative flex justify-between z-[-1] py-24 px-24 small:py-10 xlarge:px-14 large:flex-col large:items-center medium:px-10 small:px-7">
        <LeftHero/>
        <RightHero/>
        </main>
     );
}
 
export default Hero;