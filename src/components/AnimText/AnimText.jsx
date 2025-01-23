import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import HeroTextAnimation from "../HeroTextAnimation/HeroTextAnimation";
import CursorBlinker from "../CursorBlinker/CursorBlinker";

export default function AnimText({ delay }) {
  const [done, setDone] = useState(false);
  const baseText = "AI for Safer ";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      }
    });
    return controls.stop;
  }, [delay]);

  return (
    <span className="">
      {/* <motion.span>{displayText}</motion.span>
      {done && (
        <>
          <br /> <br />
        </>
      )} */}
      <HeroTextAnimation delay={delay + 1} />
      <CursorBlinker />
    </span>
  );
}
