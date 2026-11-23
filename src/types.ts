export type DrugId = "alcohol" | "cocaine" | "heroin" | "marijuana" | "meth";

export interface Drug {
  id: DrugId;
  label: string;
  image: string;
}

export interface InteractionVideo {
  src: string;
  title: string;
}

export interface Interaction {
  key: string;
  title: string;
  intro: string;
  bullets: string[];
  interactionHeading: string;
  interactionBody: string;
  statisticsHeading: string;
  statisticsBody: string;
  video: InteractionVideo;
}
