"use client";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function Motion({ children }: Props) {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          className="motion"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ delay: 0.3, duration: 0.3, type: "ease" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
