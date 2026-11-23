"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ReturnButtonProps {
  onClick: () => void;
}

export function ReturnButton({ onClick }: ReturnButtonProps) {
  return (
    <div className="returnWrap">
      <motion.button
        type="button"
        className="returnButton"
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
          className="returnImage"
        />
      </motion.button>
      <p className="returnLabel">
        <i>RETURN</i>
      </p>
    </div>
  );
}
