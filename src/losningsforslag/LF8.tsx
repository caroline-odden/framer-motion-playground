import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PathProps {
  d: string;
  stroke: string;
  variants: {
    closed?: { opacity: number };
    open: { d: string; stroke: string } | { opacity: number };
  };
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path fill="transparent" strokeWidth="2" {...props} />
);
const duration = 0.3;

export const LF8 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="task-container">
      <motion.button
        onClick={() => setClicked(!clicked)}
        animate={clicked ? "open" : "closed"}
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            stroke="#000000"
            d="M 1 2.5 L 20 2.5"
            variants={{
              open: { d: "M 3 16.5 L 17 2.5", stroke: "red" },
            }}
            transition={{ duration: duration }}
          />
          <Path
            d="M 1 9.423 L 20 9.423"
            stroke="#000000"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: duration }}
          />
          <Path
            stroke="#000000"
            d="M 1 16.346 L 20 16.346"
            variants={{
              open: { d: "M 3 2.5 L 17 16.346", stroke: "red" },
            }}
            transition={{ duration: duration }}
          />
        </svg>
      </motion.button>
      <Link to="/oppgaver/8">Tilbake til oppgaven </Link>
    </div>
  );
};
