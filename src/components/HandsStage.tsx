"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { DRUGS } from "@/content/drugs";
import type { DrugId } from "@/types";
import styles from "./HandsStage.module.css";

interface HandProps {
  drug: DrugId | null;
  side: "left" | "right";
}

function Hand({ drug, side }: HandProps) {
  const direction = side === "left" ? -1 : 1;

  return (
    <div
      className={`${styles.handSlot} ${
        side === "left" ? styles.handSlotLeft : styles.handSlotRight
      }`}
      aria-hidden="true"
    >
      <AnimatePresence>
        {drug && (
          <motion.div
            key={drug}
            className={styles.handSlide}
            initial={{ x: `${direction * 100}%`, opacity: 0.4 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: `${direction * 100}%`, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={DRUGS[drug].image}
              alt=""
              fill
              sizes="(max-width: 767px) 0px, 42vw"
              className={
                side === "right"
                  ? `${styles.handImage} ${styles.handImageMirror}`
                  : styles.handImage
              }
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface HandsStageProps {
  left: DrugId | null;
  right: DrugId | null;
}

export function HandsStage({ left, right }: HandsStageProps) {
  return (
    <>
      <Hand drug={left} side="left" />
      <Hand drug={right} side="right" />
    </>
  );
}
