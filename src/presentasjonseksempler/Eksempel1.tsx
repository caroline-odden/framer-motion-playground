import { motion } from "framer-motion";
import { Car } from "../Car";
import { Link } from "react-router-dom";

export const Eksempel1 = () => {
  return (
    <div>
      <motion.div animate={{ x: 250 }}>
        <Car />
      </motion.div>
      <Link to="/eksempel/2">Gå til neste</Link>
    </div>
  );
};
