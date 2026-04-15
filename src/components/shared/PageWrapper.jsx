import { motion } from "framer-motion";

const PageWrapper = ({ children }) => (
  <motion.main
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="min-h-screen"
  >
    {children}
  </motion.main>
);

export default PageWrapper;