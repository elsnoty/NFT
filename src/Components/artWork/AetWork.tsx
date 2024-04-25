import LeftArt from "./leftArt";
import RightArt from "./rightArt";

const ArtWork = () => {
    return ( 
        <section className="flex justify-between gap-5 items-center py-24 px-24 xlarge:px-16 large:flex-col medium:px-7">
        <LeftArt/>
        <RightArt/>
        </section>
     );
}
 
export default ArtWork;
