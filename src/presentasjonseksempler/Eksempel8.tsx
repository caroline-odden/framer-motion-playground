import { motion } from "framer-motion";
import { useState } from "react";

const variant = {
  hidden: { pathLength: 0, opacity: 0 },
  clicked: (i: number) => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 1.5 * 0.5 * i,
          bounce: 0,
        },
        opacity: { duration: 0.01 },
      },
    };
  },
};

export const Eksempel8 = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="task-container">
      <button onClick={() => setClicked(!clicked)}>Test</button>

      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate={clicked ? "clicked" : "hidden"}
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke="#ff0055"
          fill="none"
          variants={variant}
          custom={1}
        />
        <motion.line
          x1="220"
          y1="30"
          x2="360"
          y2="170"
          stroke="#00cc88"
          variants={variant}
          custom={2}
        />
      </motion.svg>
    </div>
  );
};
