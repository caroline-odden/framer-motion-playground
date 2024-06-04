import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export const LF11 = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "850px"]);
  const h1Opacity = useTransform(scrollYProgress, [0, 0.055], [1, 0]);

  return (
    <div className="task-container">
      <div className="parallax-container">
        <motion.h1 className="parallax-title" style={{ opacity: h1Opacity }}>
          Sjekk ut denne kule effekten!
        </motion.h1>
        <motion.div style={{ y }} className="parallax-image-wrapper">
          <img
            src={"/norge1.jpeg"}
            style={{ objectFit: "cover" }}
            width={900}
            height={700}
          />
          <img
            src={"/norge2.jpeg"}
            style={{ objectFit: "cover" }}
            width={900}
            height={700}
          />
          <img
            src={"/norge3.jpeg"}
            style={{ objectFit: "cover" }}
            width={900}
            height={700}
          />
        </motion.div>
        <div>
          {[...Array(8)].map(() => (
            <motion.p
              className="scroll-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ut ex lacinia, tempus nisi nec, laoreet quam. Nulla eget nulla
              vehicula, porta libero nec, vehicula tortor. Pellentesque
              ultricies nisl vel mi mattis, et sollicitudin felis suscipit.
              Quisque convallis arcu id mauris sodales semper. Maecenas
              tincidunt odio vitae odio vehicula iaculis. Pellentesque
              sollicitudin efficitur dui in pellentesque.
            </motion.p>
          ))}
        </div>
      </div>

      <Link to="/oppgaver/11">Tilbake til oppgaven</Link>
    </div>
  );
};
