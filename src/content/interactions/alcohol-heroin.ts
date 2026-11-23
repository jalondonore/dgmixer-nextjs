import type { InteractionDefinition } from "./types";

export const alcoholHeroin: InteractionDefinition = {
  a: "alcohol",
  b: "heroin",
  title: "Mixing Alcohol and Heroin",
  intro:
    "Alcohol and heroin are both depressants, meaning they slow the central nervous system and breathing. Used together, their effects add up in ways that can quickly become life-threatening. Alcohol can deepen heroin's sedation and impair the ability to judge how much has been taken, while heroin can intensify alcohol's effects. This combination is strongly linked to slowed breathing, loss of consciousness, and fatal overdose.",
  bullets: [
    "Both substances suppress breathing, and together the effect is additive.",
    "Alcohol can increase sedation and reduce the ability to judge risk.",
    "Loss of consciousness and choking on vomit become more likely.",
    "The combination significantly raises the risk of fatal overdose.",
    "Illegal heroin may contain fentanyl, making overdose even more likely.",
    "Mixing increases confusion, poor coordination, and falls.",
    "Emergency help is essential for slow breathing or unresponsiveness.",
  ],
  interactionBody:
    "Alcohol and heroin both act on brain pathways that regulate alertness and breathing. Opioids like heroin bind to receptors that blunt the body's urge to breathe, while alcohol enhances the calming neurotransmitter GABA and further depresses the nervous system. When the two are combined, these effects reinforce each other, so breathing can become dangerously slow even at doses that would otherwise seem moderate.",
  statisticsBody:
    "Public health surveillance repeatedly finds alcohol among the substances present in opioid-related overdoses. Because alcohol and opioids both depress breathing, even small amounts of each can produce severe outcomes, and the growing presence of illicitly manufactured fentanyl has made street heroin far more unpredictable. There is no way to know a drug's potency or contamination from appearance alone, and combining depressants removes many of the body's warning signs. Harm-reduction organizations advise never using alone, carrying naloxone where available, and calling emergency services at the first sign of slow breathing, blue lips, or unresponsiveness.",
};
