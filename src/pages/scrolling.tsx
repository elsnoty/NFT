import React, { useEffect, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger)
function SmoothScrolling({ children }: { children: React.ReactNode }) {

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = contentRef.current?.querySelectorAll(".animate");

    if (elements) {
      elements.forEach((element) => {
        // blurness 
        gsap.from(element, {
          opacity: 0.6,
          y: 50,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            // start: "top 80%", 
            // end: "bottom 20%", 
          },
        });

        // remove blurness after 2s
        gsap.to(element, {
          opacity: 1,
          y: 0, 
          duration: 1, //to do smoth after gsap effect
          delay: 2, // delay for gsap blurness
          ease: "power3.out",
        });
      });
    }
  }, []);


  const lenisOptions = {
    lerp: 0.1,
    duration: 5,
    smoothTouch: false, 
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <div ref={contentRef}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className="animate">
            {child}
          </div>
        ))}
      </div>
    </ReactLenis>
  );
}

export default SmoothScrolling;
