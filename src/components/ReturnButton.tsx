"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ReturnButton.module.css";

interface ReturnButtonProps {
  onClick: () => void;
}

export function ReturnButton({ onClick }: ReturnButtonProps) {
  return (
    <div className={styles.returnWrap}>
      <motion.button
        type="button"
        className={styles.returnButton}
        onClick={onClick}
        aria-label="Return to the beginning"
        whileHover={{ rotate: -360 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Image
          src="/images/return.png"
          alt=""
          width={201}
          height={201}
          className={styles.returnImage}
        />
      </motion.button>
      <p className={styles.returnLabel}>
        <i>RETURN</i>
      </p>
    </div>
  );
}
