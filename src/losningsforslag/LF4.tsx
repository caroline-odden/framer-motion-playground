import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Car } from "../Car";
import { Link } from "react-router-dom";

export const LF4 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="task-container">
      <button onClick={() => setClicked(!clicked)}>Kjør bil</button>
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ x: -1500 }}
            animate={{
              x: 0,
            }}
            exit={{ y: 800, rotate: 720, opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <Car />
          </motion.div>
        )}
      </AnimatePresence>
      <Link to="/oppgaver/4">Tilbake til oppgaven </Link>
    </div>
  );
};
