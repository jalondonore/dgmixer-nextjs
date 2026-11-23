import type { InteractionDefinition } from "./types";

export const cocaineHeroin: InteractionDefinition = {
  a: "cocaine",
  b: "heroin",
  title: "What Happens When You Mix Cocaine and Heroin?",
  intro:
    "Cocaine and heroin, often called a speedball, combine a powerful stimulant with a powerful opioid. The stimulant can temporarily mask the sedative and respiratory effects of heroin, creating a false sense of safety while the opioid continues to suppress breathing. This masking effect is central to the danger: when the cocaine wears off, the opioid's effects can become overwhelming and lead to fatal overdose.",
  bullets: [
    "Cocaine can hide heroin's sedation, encouraging a dangerous overdose.",
    "Both substances strain the heart in different ways.",
    "The combination raises the risk of arrhythmia and cardiac arrest.",
    "Respiratory depression from heroin remains a leading cause of death.",
    "When the stimulant fades, overdose risk can spike.",
    "Fentanyl contamination makes street heroin even more lethal.",
    "Emergency help is essential for slow breathing or collapse.",
  ],
  interactionBody:
    "Heroin activates opioid receptors that reduce pain and depress breathing, while cocaine blocks the reuptake of dopamine and norepinephrine, producing intense stimulation. Because the stimulant counteracts some of the opioid's visible sedation, users may take more heroin than their body can safely handle. Once cocaine's effects decline, the opioid's respiratory depression is no longer offset, which is why speedball use is associated with a particularly high risk of sudden death.",
  statisticsBody:
    "Speedball use has long been associated with high mortality in overdose data, and the combination remains especially dangerous in the era of illicitly manufactured fentanyl. Because the stimulant can delay visible signs of opioid toxicity, bystanders may not recognize an overdose until it is advanced. There is no reliable way to balance the two substances, and potency varies from batch to batch. Harm-reduction guidance emphasizes never using alone, carrying naloxone, and calling emergency services at the first sign of slow or absent breathing.",
};
