import { motion } from "framer-motion";
import { Car } from "../Car";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Eksempel6 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <motion.div
        onClick={() => setClicked(!clicked)}
        initial={false}
        animate={{
          x: clicked ? -200 : 200,
          rotate: clicked ? [0, -10, 10, 0] : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <Car />
      </motion.div>
      <Link to="/eksempel/7">Gå til neste</Link>
    </div>
  );
};
