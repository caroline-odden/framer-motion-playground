import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LF9 = () => {
  const [clicked, setClicked] = useState(0);
  const stroke = "#886F41";

  return (
    <div className="task-container">
      <div>
        <motion.svg
          width="300"
          height="300"
          viewBox={"0 0 300 300"}
          whileTap={{
            scale: 1.05,
          }}
          onClick={() => (clicked > 7 ? null : setClicked((prev) => prev + 1))}
          className="outline-none max-md:hidden"
        >
          <g>
            <ellipse
              ry="140"
              rx="140"
              id="svg_1"
              cy="150"
              cx="150"
              stroke={stroke}
              fill="none"
            />
            <motion.line
              style={{ originY: "50%" }}
              stroke={stroke}
              id="short"
              y2="160"
              x2="150"
              y1="40"
              x1="150"
              fill="none"
              animate={{
                rotate: clicked ? clicked * 1600 : [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear",
              }}
            />
            <motion.line
              stroke={stroke}
              style={{ originX: "50%" }}
              id="svg_4"
              y2="150"
              x2="215"
              y1="150"
              x1="140"
              fill="none"
              animate={{
                rotate: clicked ? clicked * 800 : [0, 360],
              }}
              transition={{
                duration: 180,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear",
              }}
            />
          </g>
        </motion.svg>
      </div>

      <Link to="/oppgaver/9">Tilbake til oppgaven </Link>
    </div>
  );
};
