
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./footer.css"
import CopyRight from './copright';
const Footer = () => {
    return ( 
        <footer className='bg-white/15 text-white backdrop-blur-[1rem] px-24 py-10 large:px-10 relative overflow-hidden'>
        <div className=" grid grid-cols-3  gap-5 large:grid-cols-1 large:place-items-center">
            <h1 className="text-5xl font-semibold"><span className="text-5xl font-bold">NFT</span>me</h1>
            <div className="flex justify-between w-full items-center gap-5 large:justify-center">
                <a href=''>Explore</a>
                <a href=''>Marketplace</a>
                <a href=''>Artists</a>
                <a href=''>Contact</a>
            </div>

        <ul className='flex justify-evenly w-full items-center gap-5 large:justify-center py-4'>
            <li><FontAwesomeIcon icon={faFacebook} className='social'/></li>
            <li><FontAwesomeIcon icon={faInstagram} className='social'/></li>
            <li><FontAwesomeIcon icon={faTwitter} className='social'/></li>
        </ul>
        </div>
        <CopyRight />
        <div className=" w-[500px] h-[500px] bg-gradient-to-t from-[#5117F4] to-[#DD24E1]
        rounded-full absolute blur-[20px] top-0 right-10 large:w-[300px] large:top-40 -z-50"></div>
        </footer>
        
     );
}
 
export default Footer;