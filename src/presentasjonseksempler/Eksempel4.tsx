import { motion } from "framer-motion";
import { Car } from "../Car";
import { Link } from "react-router-dom";

export const Eksempel4 = () => {
  return (
    <div>
      <motion.div
        initial={{ x: -1500 }}
        animate={{ x: [-1500, 0, 0, 1500] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 0,
          ease: "easeInOut",
          times: [0, 0.3, 0.6, 1],
        }}
      >
        <Car />
      </motion.div>
      <Link to="/eksempel/5">Gå til neste</Link>
    </div>
  );
};
