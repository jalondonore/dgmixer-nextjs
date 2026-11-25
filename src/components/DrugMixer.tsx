"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { DrugSelect } from "@/components/DrugSelect";
import { HandsStage } from "@/components/HandsStage";
import { InteractionArticle } from "@/components/InteractionArticle";
import { ReturnButton } from "@/components/ReturnButton";
import { Shaker } from "@/components/Shaker";
import { getInteraction } from "@/content/interactions";
import type { DrugId } from "@/types";
import styles from "./DrugMixer.module.css";

type Phase = "idle" | "mixing" | "result";

export default function DrugMixer() {
  const [left, setLeft] = useState<DrugId | null>(null);
  const [right, setRight] = useState<DrugId | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [runId, setRunId] = useState(0);

  const interaction =
    left && right && left !== right ? getInteraction(left, right) : null;
  const showStage = Boolean(left || right);

  const scrollToTitle = useCallback(() => {
    const title = document.getElementById("interaction-title");
    if (title) {
      title.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    if (phase !== "result") {
      return;
    }

    const frame = window.requestAnimationFrame(() => scrollToTitle());

    return () => window.cancelAnimationFrame(frame);
  }, [phase, scrollToTitle]);

  const handleMixComplete = useCallback(() => setPhase("result"), []);

  const handleChange = (side: "left" | "right", value: DrugId | null) => {
    const nextLeft = side === "left" ? value : left;
    const nextRight = side === "right" ? value : right;

    if (side === "left") {
      setLeft(value);
    } else {
      setRight(value);
    }

    if (nextLeft && nextRight && nextLeft !== nextRight) {
      setPhase("mixing");
      setRunId((current) => current + 1);
    } else {
      setPhase("idle");
    }
  };

  const handleReset = useCallback(() => {
    setLeft(null);
    setRight(null);
    setPhase("idle");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section>
        <header className={styles.mixerHeader}>
          <Image
            src="/images/logo.png"
            alt="Drug Interaction Tool"
            width={1804}
            height={868}
            className={styles.logo}
            priority
          />
          <h1 className={styles.logotitle}>What happens when you mix...</h1>
        </header>

        <form
          className={styles.mixerForm}
          onSubmit={(event) => event.preventDefault()}
        >
          <div className={styles.field}>
            <label className={styles.srOnly} htmlFor="drug-left">
              First drug
            </label>
            <DrugSelect
              id="drug-left"
              value={left}
              other={right}
              disabled={phase === "mixing"}
              onChange={(value) => handleChange("left", value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.srOnly} htmlFor="drug-right">
              Second drug
            </label>
            <DrugSelect
              id="drug-right"
              value={right}
              other={left}
              disabled={phase === "mixing"}
              onChange={(value) => handleChange("right", value)}
            />
          </div>
        </form>

        <AnimatePresence>
          {showStage && (
            <motion.div
              key="stage"
              className={styles.stage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HandsStage left={left} right={right} />
              <Shaker
                runKey={runId}
                active={phase === "mixing"}
                onComplete={handleMixComplete}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <AnimatePresence>
        {phase === "result" && interaction && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <InteractionArticle interaction={interaction} />
            <ReturnButton onClick={handleReset} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
