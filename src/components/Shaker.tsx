"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Shaker.module.css";

type Stage = "hidden" | "delay" | "enter" | "shake" | "exit" | "success";

interface ShakerProps {
  active: boolean;
  runKey: number;
  onComplete: () => void;
}

const wrapVariants: Variants = {
  hidden: { opacity: 0, y: 120, scale: 0.5 },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 16 },
  },
  shake: { opacity: 1, y: 0, scale: 1 },
  exit: {
    opacity: 0,
    y: 140,
    scale: 0.5,
    transition: { duration: 0.2 },
  },
};

export function Shaker({ active, runKey, onComplete }: ShakerProps) {
  const [stage, setStage] = useState<Stage>("hidden");

  useEffect(() => {
    if (!active) {
      setStage("hidden");
      return;
    }

    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => {
      timers.push(window.setTimeout(fn, ms));
    };

    setStage("delay");
    at(2000, () => setStage("enter"));
    at(2500, () => setStage("shake"));
    at(4500, () => setStage("exit"));
    at(4650, () => setStage("success"));
    at(5650, () => onComplete());

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [active, runKey, onComplete]);

  const bottleVisible =
    stage === "enter" || stage === "shake" || stage === "exit";

  return (
    <div className={styles.shakerLayer} aria-hidden="true">
      {bottleVisible && (
        <motion.div
          className={styles.shakerBottleWrap}
          variants={wrapVariants}
          initial="hidden"
          animate={
            stage === "exit" ? "exit" : stage === "shake" ? "shake" : "enter"
          }
        >
          <motion.div
            className={styles.shakerBottleInner}
            animate={
              stage === "shake"
                ? { rotate: [-8, 8, -8, 8, -8, 8, 0] }
                : { rotate: 0 }
            }
            transition={
              stage === "shake"
                ? { duration: 0.5, repeat: 3, ease: "easeInOut" }
                : { duration: 0.2 }
            }
          >
            <Image
              src="/images/shaker.png"
              alt=""
              width={676}
              height={644}
              className={styles.shakerImage}
              priority
            />
          </motion.div>

          <div className={styles.meter}>
            <motion.span
              className={styles.meterFill}
              initial={false}
              animate={{ width: stage === "shake" ? "100%" : "0%" }}
              transition={
                stage === "shake"
                  ? { duration: 2, ease: "linear" }
                  : { duration: 0 }
              }
            />
          </div>
        </motion.div>
      )}

      {stage === "success" && (
        <motion.div
          className={styles.successWrap}
          initial={{ opacity: 0, scale: 0.4, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 14 }}
        >
          <Image
            src="/images/success.png"
            alt=""
            width={257}
            height={218}
            className={styles.successImage}
            priority
          />
        </motion.div>
      )}
    </div>
  );
}
