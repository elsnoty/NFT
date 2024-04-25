import Spastian from "../../assets/Spastian.png";
import Javier from "../../assets/Javier.png";
import Milad from "../../assets/Milad.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export interface Item {
  image: string;
  title: string;
  disc: string;
  nft: string;
}

const LeftTrend = () => {
  const Data: Item[] = [
    {
      image: Spastian,
      title: "Spastian",
      disc: "Golden Flower",
      nft: "2.3 ETH",
    },
    {
      image: Javier,
      title: "Javier",
      disc: "Golden Flower",
      nft: "2.3 ETH",
    },
    {
      image: Milad,
      title: "Milad",
      disc: "Golden Flower",
      nft: "2.3 ETH",
    },
  ];

  return (
    <div>
    {
      Data.map((value, index) => (
        <Compo item={value} key={index}/>
      ))
    }
    </div>
  );
};

export default LeftTrend;

export const Compo = (props: {item:Item}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
    className={`py-5 z-20 `}
    ref={ref}
    style={{
      scale: scaleProgress,
      opacity: opacityProgress,
    }}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl py-1">{props.item.title}</h1>
          <p>{props.item.disc}</p>
        </div>
        <p className="font-bold text-fuchsia-600">{props.item.nft}</p>
      </div>
      <img src={props.item.image} alt="" className="mt-2 rounded-lg" />
    </motion.div>
  );
};
