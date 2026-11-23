import type { InteractionDefinition } from "./types";

export const alcoholCocaine: InteractionDefinition = {
  a: "alcohol",
  b: "cocaine",
  title: "Mixing Alcohol and Cocaine",
  intro:
    "Alcohol and cocaine are often used together, yet the combination is far more dangerous than either substance alone. Cocaine is a powerful stimulant that speeds up the heart and nervous system, while alcohol is a depressant that slows them down. Because the stimulant can hide how intoxicated a person feels, they may drink more than intended and underestimate serious risks to the heart, brain, and liver.",
  bullets: [
    "Cocaine can mask alcohol's sedative effects, encouraging heavier drinking.",
    "The liver forms cocaethylene, a longer-lasting and more cardiotoxic compound.",
    "Heart rate and blood pressure rise, increasing the risk of arrhythmia.",
    "The combination raises the chance of heart attack, stroke, and seizure.",
    "Anxiety, paranoia, and agitation are more likely.",
    "Judgment and impulse control are impaired, increasing accidents.",
    "Emergency care is often needed for chest pain, overheating, or collapse.",
  ],
  interactionBody:
    "When cocaine and alcohol are present at the same time, the liver combines them into cocaethylene. This metabolite prolongs cocaine's stimulant effects and places extra strain on the heart and blood vessels. The result is a longer period of elevated heart rate and blood pressure, which helps explain why this pairing is linked to a higher risk of sudden cardiac events and severe complications than cocaine alone.",
  statisticsBody:
    "Emergency department data consistently show that alcohol is one of the most common substances found alongside cocaine in people seeking urgent care. The pairing is associated with a greater likelihood of cardiac emergencies, seizures, and serious injuries than either drug on its own, and cocaethylene is thought to contribute to that elevated risk. Because effects vary with dose, purity, tolerance, and individual health, there is no reliable way to predict a safe combination. Harm-reduction guidance stresses that mixing stimulants with alcohol increases the danger of overdose and long-term damage, and that anyone experiencing chest pain, difficulty breathing, confusion, or a seizure should receive emergency medical help immediately.",
};
