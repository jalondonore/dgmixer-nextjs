import type { DrugId } from "@/types";

export interface InteractionDefinition {
  a: DrugId;
  b: DrugId;
  title: string;
  intro: string;
  bullets: string[];
  interactionBody: string;
  statisticsBody: string;
}
