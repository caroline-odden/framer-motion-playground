import { AnimatePresence, motion } from "framer-motion";
import { Car } from "../Car";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Eksempel7 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
      <Link to="/eksempel/8" style={{ marginTop: "100px" }}>
        Gå til neste
      </Link>
    </div>
  );
};
