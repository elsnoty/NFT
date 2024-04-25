import Her1o from "../../assets/img.png";
import Her2o from "../../assets/Hero.png";
import ico1n from "../../assets/Ellipse 426.png";
import elrtherem from "../../assets/ethereum.png";
import ico2n from "../../assets/Ellipse.png";
import Countdown from "./countdown";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const RightHero = () => {
    const imageRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);


    const targetDate = new Date("2025-12-31T23:59:59");

    //floating and render info
    useEffect(() => {
    const float = gsap.timeline({ defaults: { ease: 'power1.inOut', repeat: -1, yoyo: true } });
    if (imageRef.current) {
        float.to(imageRef.current, { duration: 1, y: 10 });
    }
    gsap.fromTo(div1Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 1 });

    gsap.fromTo(div2Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 });


    }, []);

    return (
    <div className="relative w-full h-[60vh] small:max-w-[230px] small:-right-[42px]">
      <div className="relative" ref={imageRef}>
        <div ref={div1Ref} className="absolute w-[400px] h-[600px] small:max-w-[230px] right-0 -top-10 z-10 pointer-events-none">
            <img src={Her1o} alt="" className=" " />
            <div className="grid grid-cols-2 max-w-[380px] gap-5 p-5 small:grid-cols-1 bg-white/20 text-white backdrop-blur-[1rem] font-semibold pointer-events-auto">
            <div className="flex gap-1">
                <img src={ico1n} alt="" className="object-contain" />
                <div >
                <p className="">Lura</p>
                <p className="">0.21 WETH</p>
                </div>
            </div>
            <Countdown targetDate={targetDate}/>
            <div>
                <p >Current Bid</p>
                <div>
                <img src={elrtherem} alt="" className="inline-grid items-center w-[20px] " />
                <span className="text-xl">2.8 ETH</span>
                </div>
            </div>
            <button className="bg-white text-black p-2 w-36 rounded-lg btns">
                PLACE A BID
            </button>
            </div>
        </div>

        <div ref={div2Ref} className="absolute w-[370px] h-[600px] small:max-w-[230px] -right-[150px] top-0 transform z-0 -translate-x-48 -rotate-[8deg] pointer-events-none">
            <img src={Her2o} alt="" className="" />
            <div className="grid grid-cols-2 max-w-[380px] gap-5 small:grid-cols-1  p-5 bg-white/20 text-white backdrop-blur-[1rem] font-semibold pointer-events-auto">
            <div className="flex gap-1">
                <img src={ico2n} alt="" className="object-contain" />
                <div className="">
                <p className="">Lura</p>
                <p className="">0.21 WETH</p>
              </div>
            </div>
            <Countdown targetDate={targetDate} />
            <div >
              <p>Current Bid</p>
              <div>
                <img src={elrtherem} alt="" className="inline-grid items-center w-[20px] " />
                <span className="text-xl">2.8 ETH</span>
              </div>
            </div>
            <button className="bg-white text-black p-2 w-36 rounded-lg">
              PLACE A BID
            </button>
          </div>
        </div>
      </div>
      <div className=" w-[800px] h-[600px] bg-gradient-to-t from-purple-950 to-fuchsia-700 rounded-full absolute blur-[150px] top-0 right-10 large:w-[300px] -z-50"></div>
    </div>
  );
};

export default RightHero;
