// Countdown.tsx
import  { useState, useEffect, useRef } from "react";
import "./hero.css"
import gsap from "gsap";
interface CountdownProps {
  targetDate: Date;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const remainingTimeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(remainingTimeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 1.2 });
    }, []);
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div ref={remainingTimeRef}>
      <div className="flex items-center font-semibold">
        <div className="flex items-center mx-2">
          <span className="text-2xl fade-in">{timeLeft.hours}</span>
          <span className="text-sm inline-flex">h</span>
        </div>
        <span>:</span>
        <div className="flex items-center mx-2">
          <span className="text-2xl fade-in">{timeLeft.minutes}</span>
          <span className="text-sm">m</span>
        </div>
        <span>:</span>
        <div className="flex items-center mx-2">
          <span className="text-2xl fade-in">{timeLeft.seconds}</span>
          <span className="text-sm">s</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
