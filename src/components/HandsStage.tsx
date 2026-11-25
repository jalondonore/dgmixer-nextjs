"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DRUGS, DRUG_ORDER } from "@/content/drugs";
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
      {DRUG_ORDER.map((drugId) => {
        const selected = drug === drugId;

        return (
          <motion.div
            key={drugId}
            className={styles.handSlide}
            style={{ zIndex: selected ? 1 : 0 }}
            initial={
              selected ? { x: `${direction * 100}%`, opacity: 0.4 } : false
            }
            animate={{
              x: selected ? "0%" : `${direction * 100}%`,
              opacity: selected ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={DRUGS[drugId].image}
              alt=""
              fill
              sizes="(max-width: 767px) 0px, 42vw"
              className={
                side === "right"
                  ? `${styles.handImage} ${styles.handImageMirror}`
                  : styles.handImage
              }
              loading="eager"
              unoptimized
            />
          </motion.div>
        );
      })}
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
