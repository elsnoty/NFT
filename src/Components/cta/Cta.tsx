import LeftCta from "./leftCta";
import RightCta from "./rightCta";

const Cta = () => {
    return ( 
        <section className="relative grid grid-cols-2 gap-7 medium:grid-cols-1 px-24 py-20 large:px-5">
            <LeftCta />
            <RightCta />
        </section>
     );
}
 
export default Cta;