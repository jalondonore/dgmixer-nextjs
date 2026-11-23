import { DRUGS } from "@/content/drugs";
import type { DrugId, Interaction, InteractionVideo } from "@/types";
import type { InteractionDefinition } from "./types";

const VIDEO: InteractionVideo = {
  src: "https://www.youtube.com/embed/RR2EI8EEOOw?list=PLp2zTInxCVPSO4f1RxgVnUUTgnarc8f2e",
  title: "4K Computer Codes Long Loop Half Hour",
};

const INTERACTION_HEADING = "How They Interact";

export function buildInteraction(
  definition: InteractionDefinition,
): Interaction {
  const { a, b, title, intro, bullets, interactionBody, statisticsBody } =
    definition;

  return {
    key: pairKey(a, b),
    title,
    intro,
    bullets,
    interactionHeading: INTERACTION_HEADING,
    interactionBody,
    statisticsHeading: `${DRUGS[a].label} and ${DRUGS[b].label}: The Statistics`,
    statisticsBody,
    video: VIDEO,
  };
}

export function pairKey(a: DrugId, b: DrugId): string {
  return [a, b].sort().join("|");
}
