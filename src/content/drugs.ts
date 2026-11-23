import type { Drug, DrugId } from "@/types";

export const DRUG_ORDER: DrugId[] = [
  "alcohol",
  "marijuana",
  "cocaine",
  "heroin",
  "meth",
];

export const DRUGS: Record<DrugId, Drug> = {
  alcohol: {
    id: "alcohol",
    label: "Alcohol",
    image: "/images/drugs/alcohol.png",
  },
  marijuana: {
    id: "marijuana",
    label: "Marijuana",
    image: "/images/drugs/marijuana.png",
  },
  cocaine: {
    id: "cocaine",
    label: "Cocaine",
    image: "/images/drugs/cocaine.png",
  },
  heroin: {
    id: "heroin",
    label: "Heroin",
    image: "/images/drugs/heroin.png",
  },
  meth: {
    id: "meth",
    label: "Meth",
    image: "/images/drugs/meth.png",
  },
};

export function isDrugId(value: string): value is DrugId {
  return value in DRUGS;
}
