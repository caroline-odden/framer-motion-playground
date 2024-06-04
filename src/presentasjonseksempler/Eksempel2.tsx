import { motion } from "framer-motion";
import { Car } from "../Car";
import { Link } from "react-router-dom";

export const Eksempel2 = () => {
  return (
    <div>
      <motion.div
        initial={{ x: -500, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <Car />
      </motion.div>
      <Link to="/eksempel/3">Gå til neste</Link>
    </div>
  );
};
