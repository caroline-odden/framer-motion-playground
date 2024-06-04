import { motion } from "framer-motion";
import { Car } from "../Car";
import { Link } from "react-router-dom";

export const LF1 = () => {
  return (
    <div>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      >
        <Car />
      </motion.div>
      <Link to="/oppgaver/1">Tilbake til oppgaven </Link>
    </div>
  );
};
