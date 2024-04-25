import ArtistTiltle from "./artTitle";
import Avatar from "./avatar";

const Artists = () => {
    return ( 
        <section className="px-20 py-16 xlarge:px-10 large:px-11">
            <ArtistTiltle/>
            <Avatar />
        </section>
     );
}
 
export default Artists;