import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { taskHints } from "../oppgaver/utils/taskHints";

export const LF6 = () => {
  return (
    <div className="task-container">
      <h1 style={{ display: "flex" }}>
        Framer Motion
        <motion.div
          className="workshop-box"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.8,
            type: "spring",
            stiffness: 200,
            duration: 0.1,
          }}
        >
          <p>Workshop</p>
        </motion.div>
      </h1>
      <div className="links">
        {Object.entries(taskHints).map(([task], i) => {
          if (i < 9) {
            return (
              <Link to={`/oppgaver/${task}`}>
                <motion.div
                  key={i}
                  className="card"
                  whileHover={{ scale: 1.1, rotate: [0, -2, 0, 2, 0] }}
                  initial={{ y: 20, opacity: 0, rotate: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0 + i * 0.15,
                    ease: "easeInOut",
                    rotate: { delay: 0, duration: 0.2 },
                    scale: { delay: 0 },
                  }}
                >
                  Oppgave {task}
                </motion.div>
              </Link>
            );
          }
        })}
      </div>
      <motion.div
        className="links-two-grid"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.5,
          ease: "easeInOut",
          rotate: { delay: 0, duration: 0.2 },
          scale: { delay: 0 },
        }}
      >
        <Link to={"/oppgaver/9"}>
          <motion.div
            className="card"
            initial={{ rotate: 0 }}
            whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
            transition={{
              rotate: { duration: 0.2 },
            }}
          >
            Oppgave 9
          </motion.div>
        </Link>
        <Link to={"/oppgaver/10"}>
          <motion.div
            className="card"
            initial={{ rotate: 0 }}
            whileHover={{ scale: 1.1, rotate: [0, -2, 0, 2, 0] }}
            transition={{
              rotate: { duration: 0.2 },
            }}
          >
            Oppgave 10
          </motion.div>
        </Link>
      </motion.div>
      <Link to="/oppgaver/6">Tilbake til oppgaven </Link>
    </div>
  );
};
