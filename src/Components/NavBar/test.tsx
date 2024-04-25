import { useEffect, useRef } from "react";
const Test = ()=>{
const imageRef = useRef(null);
const bidInfoRef = useRef(null);
const remainingTimeRef = useRef(null);
const bidButtonRef = useRef(null);

useEffect(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power1.inOut', repeat: -1, yoyo: true } });

  // Animation for the image
  tl.to(imageRef.current, { duration: 0.8, y: 10 });

  // Animation for bid information
  gsap.fromTo(bidInfoRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 });

  // Animation for remaining time
  gsap.fromTo(remainingTimeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 1 });

  // Animation for bid button
  gsap.fromTo(bidButtonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 1.5 });
}, []);

return (
  <section className="bg-white py-16">
  <div className="container mx-auto text-center">
    <div className="max-w-lg mx-auto">
      {/* Placeholder image */}
      <img ref={imageRef} src="https://via.placeholder.com/400x300" alt="Artwork" className="mb-8" />
      <div ref={bidInfoRef} className="text-lg font-bold mb-4">Current Bid</div>
      <div ref={remainingTimeRef} className="text-purple-700 mb-4">18h : 57m : 14s</div>
      <button ref={bidButtonRef} className="bg-purple-700 hover:bg-purple-800 px-8 py-3 rounded-full text-lg font-bold mt-8">
        Place a Bid
      </button>
    </div>
  </div>
</section>
);
}
export default Test;