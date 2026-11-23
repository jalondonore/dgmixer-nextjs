import type { InteractionDefinition } from "./types";

export const marijuanaCocaine: InteractionDefinition = {
  a: "marijuana",
  b: "cocaine",
  title: "What Happens When You Mix Marijuana and Cocaine?",
  intro:
    "Marijuana and cocaine are sometimes combined for their contrasting effects: one calming and the other energizing. The result is unpredictable. Cocaine drives up heart rate and blood pressure, while cannabis can also increase heart rate and intensify anxiety or paranoia. Rather than smoothing out the experience, the combination can amplify stress on the cardiovascular system and the mind, raising the risk of panic, dangerous heart rhythms, and risky behavior.",
  bullets: [
    "Both substances can raise heart rate and blood pressure.",
    "The combination increases the risk of chest pain and arrhythmia.",
    "Anxiety, paranoia, and panic are more likely.",
    "High doses may contribute to psychotic symptoms.",
    "Judgment and coordination are impaired, raising accident risk.",
    "Sleep and appetite can be disrupted afterward.",
    "Effects depend heavily on dose, potency, and tolerance.",
  ],
  interactionBody:
    "Cocaine blocks the reuptake of dopamine and norepinephrine, producing intense stimulation, while THC acts on cannabinoid receptors that alter perception, memory, and mood. When used together, the stimulant and the cannabinoid can push the nervous system in conflicting directions. The stimulant raises cardiovascular demand, and cannabis can heighten sensitivity to that arousal, which helps explain the increased likelihood of panic and cardiac symptoms.",
  statisticsBody:
    "Substance-use surveys indicate that cannabis and cocaine are frequently co-used, particularly in social settings. Emergency data link the pairing to chest pain, palpitations, panic attacks, and injuries, and long-term stimulant use carries additional risks for the heart and mental health. Because cannabis potency varies widely and cocaine may be adulterated, the combined effects are difficult to predict. Harm-reduction guidance recommends avoiding stimulant and cannabis combinations, especially for people with heart conditions or a history of anxiety or psychosis, and seeking help for persistent chest pain or severe agitation.",
};
