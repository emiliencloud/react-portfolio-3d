import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.scss";

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
  });

  const variants = {
    default: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
    },
  };

  return <motion.div className="cursor" transition={{ type:"spring", bounce: 0.25 }} variants={variants} animate="default" />;
}

export default Cursor;
