import type { InteractionDefinition } from "./types";

export const cocaineMeth: InteractionDefinition = {
  a: "cocaine",
  b: "meth",
  title: "What Happens When You Mix Cocaine and Meth?",
  intro:
    "Cocaine and methamphetamine are both potent stimulants, and combining them multiplies the strain on the body. Each raises heart rate, blood pressure, and body temperature, and together they can push the cardiovascular and nervous systems to dangerous extremes. Rather than producing a controlled high, the pairing is associated with severe agitation, overheating, seizures, and a markedly higher risk of heart attack and stroke.",
  bullets: [
    "Two stimulants together sharply increase heart rate and blood pressure.",
    "The risk of arrhythmia, heart attack, and stroke rises significantly.",
    "Overheating, dehydration, and seizures become more likely.",
    "Anxiety, agitation, and violent behavior can intensify.",
    "Psychosis and paranoia are more probable at high doses.",
    "Exhaustion and sleep deprivation accumulate quickly.",
    "Emergency care is needed for chest pain, fever, or confusion.",
  ],
  interactionBody:
    "Cocaine and methamphetamine both increase dopamine and norepinephrine signaling, but through somewhat different mechanisms: cocaine mainly blocks reuptake, while methamphetamine also triggers release. When combined, these actions can produce a prolonged and exaggerated sympathetic response. The heart works harder, blood vessels constrict, and body temperature climbs, creating conditions that favor dangerous rhythms, seizures, and organ damage.",
  statisticsBody:
    "Stimulant-related emergency visits have risen in many regions, and polysubstance use involving more than one stimulant is a recognized risk factor for severe outcomes. Because both drugs can be adulterated and their potency is unpredictable, the combined cardiovascular and psychiatric burden is difficult to gauge. Harm-reduction guidance warns against stacking stimulants, recommends cooling and hydration during use, and stresses that chest pain, severe headache, high fever, or altered mental status require immediate medical attention.",
};
