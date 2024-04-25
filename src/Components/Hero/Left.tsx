import "./hero.css"
const LeftHero = () => {
    
    return ( 
        <>
        <div className="flex flex-col medium:items-center py-8">
            <h1 className="text-7xl font-bold w-3/4 py-5 medium:text-5xl">Discover Rare Collection Of Art <span>&</span> NFT's</h1>
            <p className="text-gray-400">Create, Explore & Digital Art NFTs</p>
            <button className="bg-gradient-to-tl from-fuchsia-900 to-purple-900 p-2 w-36 btn-hero btns">EXPLORE</button>
            <div className="flex gap-5 mt-28 flex-wrap">
                <span className="text-5xl font-bold">32K+ <span className="text-lg block">ArtWork</span></span>
                <span className="text-5xl font-bold">20+ <span className="text-lg block">Auctions</span></span>
                <span className="text-5xl font-bold">10+ <span className="text-lg block">Aritists</span></span>
            </div>
        </div>
            <div className="w-[600px] h-[300px] small:max-w-[180px] bg-gradient-to-t from-fuchsia-900 to-purple-900 rounded-full blur-[220px] absolute -z-20 -top-10 left-0"></div>
            </>
            
     );
}
 
export default LeftHero;