import { motion } from "framer-motion";
import { Car } from "../Car";
import { Link } from "react-router-dom";

export const Eksempel5 = () => {
  return (
    <div>
      <motion.div
        initial={{ rotate: 0, scale: 1 }}
        whileHover={{ scale: 1.4, rotate: 180 }}
        transition={{
          duration: 3,
        }}
      >
        <Car />
      </motion.div>
      <Link to="/eksempel/6">Gå til neste</Link>
    </div>
  );
};
