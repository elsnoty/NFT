import Artists from "../Components/Artist/Artists";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import NavBar from "../Components/NavBar/Navbar";
import Trending from "../Components/Trending/Trending";
import ArtWork from "../Components/artWork/AetWork";
import Cta from "../Components/cta/Cta";


const Home = () => {
    return ( 
        <>
        <NavBar />
        <Hero />
        <ArtWork/>
        <Trending/>
        <Artists/>
        <Cta />
        <Footer/>
        </>
     );
}
 
export default Home;