import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LF7 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="task-container">
      <button onClick={() => setClicked(!clicked)}>Lag boblebad</button>
      <div>
        <AnimatePresence>
          {clicked &&
            [...Array(60)].map((_x, i) => {
              const offsetX = (Math.random() * 95).toFixed();
              const scale = Math.random() * 0.6 + 0.4;
              return (
                <motion.div
                  key={i}
                  className="bubble-div"
                  style={{ x: `${offsetX}vw`, scale }}
                  initial={{ y: 100 }}
                  animate={{ y: "-100vh" }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    delay: Math.random() * 4,
                  }}
                >
                  <img src="/bubble.png" width={40} height={40} />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
      <Link to="/oppgaver/7">Tilbake til oppgaven </Link>
    </div>
  );
};
