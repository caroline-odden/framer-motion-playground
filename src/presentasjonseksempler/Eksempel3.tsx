import { motion } from "framer-motion";
import { Car } from "../Car";
import { Link } from "react-router-dom";

export const Eksempel3 = () => {
  return (
    <div>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeOut",
        }}
      >
        <Car />
      </motion.div>
      <Link to="/eksempel/4">Gå til neste</Link>
    </div>
  );
};
