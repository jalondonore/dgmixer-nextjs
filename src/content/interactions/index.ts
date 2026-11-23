import type { DrugId, Interaction } from "@/types";
import { alcoholCocaine } from "./alcohol-cocaine";
import { alcoholHeroin } from "./alcohol-heroin";
import { alcoholMarijuana } from "./alcohol-marijuana";
import { alcoholMeth } from "./alcohol-meth";
import { cocaineHeroin } from "./cocaine-heroin";
import { cocaineMeth } from "./cocaine-meth";
import { marijuanaCocaine } from "./marijuana-cocaine";
import { marijuanaHeroin } from "./marijuana-heroin";
import { marijuanaMeth } from "./marijuana-meth";
import { methHeroin } from "./meth-heroin";
import { buildInteraction, pairKey } from "./shared";
import type { InteractionDefinition } from "./types";

export { pairKey } from "./shared";

const DEFINITIONS: InteractionDefinition[] = [
  alcoholCocaine,
  alcoholHeroin,
  alcoholMarijuana,
  alcoholMeth,
  marijuanaCocaine,
  marijuanaHeroin,
  marijuanaMeth,
  cocaineHeroin,
  cocaineMeth,
  methHeroin,
];

export const INTERACTIONS: Record<string, Interaction> = Object.fromEntries(
  DEFINITIONS.map((definition) => {
    const interaction = buildInteraction(definition);
    return [interaction.key, interaction];
  }),
);

export function getInteraction(a: DrugId, b: DrugId): Interaction | null {
  return INTERACTIONS[pairKey(a, b)] ?? null;
}
