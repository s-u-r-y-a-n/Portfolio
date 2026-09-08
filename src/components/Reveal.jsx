import { motion } from "framer-motion";

const Reveal = ({ children, className = "", delay = 0, direction = "up" }) => {
  const offset = direction === "left" ? { x: -36 } : direction === "right" ? { x: 36 } : { y: 32 };

  return (
    <motion.div
      className={className}
      initial={{ ...offset, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
