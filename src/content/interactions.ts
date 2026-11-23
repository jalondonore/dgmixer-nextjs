import type { DrugId, Interaction, InteractionVideo } from "@/types";
import { DRUGS } from "@/content/drugs";

const VIDEO: InteractionVideo = {
  src: "https://www.youtube.com/embed/RR2EI8EEOOw?list=PLp2zTInxCVPSO4f1RxgVnUUTgnarc8f2e",
  title: "4K Computer Codes Long Loop Half Hour",
};

const INTERACTION_HEADING = "How They Interact";

interface InteractionDefinition {
  a: DrugId;
  b: DrugId;
  title: string;
  intro: string;
  bullets: string[];
  interactionBody: string;
  statisticsBody: string;
}

const DEFINITIONS: InteractionDefinition[] = [
  {
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
  },
  {
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
  },
  {
    a: "alcohol",
    b: "marijuana",
    title: "What Happens When You Mix Alcohol and Marijuana?",
    intro:
      "Alcohol and marijuana are two of the most commonly combined substances, especially among young adults. Both impair coordination, reaction time, and judgment, and together their effects are often stronger than either produces alone. Many people assume the combination is low-risk because both are widely used, but the pairing increases the chance of accidents, risky decisions, and unpleasant reactions such as severe nausea, anxiety, or panic.",
    bullets: [
      "Combined use worsens coordination, balance, and reaction time.",
      "Driving and operating machinery become substantially more dangerous.",
      "Judgment and impulse control are impaired, raising accident risk.",
      "High doses can trigger anxiety, panic, or paranoia.",
      "Nausea, dizziness, and vomiting are more common.",
      "Alcohol may be consumed more heavily when cannabis blunts its sedative feel.",
      "Effects vary widely with dose, potency, and individual tolerance.",
    ],
    interactionBody:
      "Alcohol and cannabis affect overlapping systems involved in movement, memory, and reward. Alcohol enhances the calming effects of GABA while suppressing glutamate, and THC, the main psychoactive compound in cannabis, acts on cannabinoid receptors that influence mood, perception, and coordination. Together they can amplify sedation and mental impairment, and because cannabis can change how intoxication is perceived, people may misjudge how much alcohol they have consumed.",
    statisticsBody:
      "Surveys of substance use show that alcohol and cannabis are frequently used on the same occasion, particularly among younger adults. Research links combined use to higher rates of traffic injuries, falls, and emergency visits than either substance alone, and the impairment can persist longer than users expect. Because cannabis potency has risen in recent decades and edible products can delay onset, the combined effects are harder to predict than ever. Harm-reduction advice emphasizes planning transportation in advance, avoiding driving entirely, and starting with much lower amounts when substances are mixed.",
  },
  {
    a: "alcohol",
    b: "meth",
    title: "What Happens When You Mix Alcohol With Meth?",
    intro:
      "Alcohol and methamphetamine sit at opposite ends of the stimulant-depressant spectrum, yet that contrast is exactly what makes the combination risky. Meth sharply increases alertness, heart rate, and blood pressure, while alcohol slows the body down. The stimulant can disguise how drunk a person really is, leading to heavier drinking, and the combination places unusual strain on the heart, blood vessels, and brain.",
    bullets: [
      "Meth can mask alcohol's sedative effects, encouraging overconsumption.",
      "Heart rate and blood pressure can rise to dangerous levels.",
      "The risk of arrhythmia, heart attack, and stroke increases.",
      "Dehydration, overheating, and seizures are more likely.",
      "Anxiety, agitation, and paranoia can intensify.",
      "Judgment and impulse control are impaired.",
      "Emergency care may be needed for chest pain, confusion, or collapse.",
    ],
    interactionBody:
      "Methamphetamine floods the brain with dopamine and norepinephrine, producing sustained sympathetic activation, while alcohol depresses the central nervous system. Although their immediate sensations seem to pull in different directions, the body still experiences a combined burden: the cardiovascular system is stressed by the stimulant while the liver and brain must process both substances. This mismatch can hide intoxication and delay the recognition of serious warning signs.",
    statisticsBody:
      "Emergency and treatment data show that methamphetamine is often used alongside alcohol, and the pairing is associated with a higher rate of cardiac events, injuries, and psychiatric crises than meth alone. Because the stimulant can temporarily offset the sedative effects of alcohol, people may keep drinking past the point where their body would normally signal that it is time to stop. There is no dependable way to balance the two, and harm-reduction guidance warns that the combination increases the risk of stroke, seizure, and overdose. Seek emergency care for severe chest pain, difficulty breathing, high fever, or altered consciousness.",
  },
  {
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
  },
  {
    a: "marijuana",
    b: "heroin",
    title: "What Happens When You Mix Marijuana and Heroin?",
    intro:
      "Marijuana and heroin are both sedating, and combining them can dangerously deepen that sedation. Heroin is an opioid that slows breathing and consciousness, while cannabis can add to drowsiness, impaired coordination, and poor judgment. Users sometimes combine them to intensify relaxation, but the pairing increases the risk of respiratory depression, overdose, and death, especially when street heroin contains fentanyl.",
    bullets: [
      "Both substances can increase sedation and drowsiness.",
      "Combined use raises the risk of slowed breathing.",
      "Judgment and coordination are impaired, increasing falls and injuries.",
      "Cannabis may encourage heavier or more frequent opioid use.",
      "Fentanyl contamination makes overdose far more likely.",
      "Loss of consciousness and choking on vomit are serious risks.",
      "Call emergency services for slow breathing or unresponsiveness.",
    ],
    interactionBody:
      "Heroin binds to opioid receptors that suppress pain and blunt the drive to breathe, while cannabis affects cannabinoid receptors that influence mood, memory, and coordination. Although they act through different pathways, both can depress the central nervous system. When taken together, their sedative effects can combine, and cannabis may alter a person's perception of how impaired they are, making it harder to recognize the warning signs of overdose.",
    statisticsBody:
      "Overdose surveillance consistently shows that opioids are rarely the only substance involved; alcohol, benzodiazepines, and cannabis are often present as well. The combination of an opioid with another depressant or sedative increases the likelihood of fatal respiratory depression, and the spread of illicitly manufactured fentanyl has made potency impossible to judge. There is no safe way to estimate a dose from appearance or prior experience. Harm-reduction guidance urges never using alone, having naloxone available, and calling emergency services immediately if breathing slows or the person cannot be woken.",
  },
  {
    a: "marijuana",
    b: "meth",
    title: "What Happens When You Mix Marijuana and Meth?",
    intro:
      "Marijuana and methamphetamine combine a calming, perception-altering substance with a powerful stimulant. The two push the body and mind in opposite directions, which can make the overall effect unpredictable. Meth raises heart rate, blood pressure, and body temperature, while cannabis can intensify anxiety, paranoia, and distorted thinking. Together they increase the risk of panic, cardiovascular strain, and dangerous decisions.",
    bullets: [
      "Meth sharply raises heart rate, blood pressure, and body temperature.",
      "Cannabis can amplify anxiety, paranoia, and confusion.",
      "The combination increases the risk of palpitations and chest pain.",
      "Dehydration, overheating, and seizures are more likely.",
      "Impaired judgment raises the risk of accidents and risky behavior.",
      "Sleep deprivation and exhaustion can build up quickly.",
      "High doses may contribute to psychotic symptoms.",
    ],
    interactionBody:
      "Methamphetamine increases the release and blocks the reuptake of dopamine and norepinephrine, creating sustained stimulation, while THC alters perception, memory, and emotional regulation through cannabinoid receptors. The stimulant can mask fatigue and hunger, and cannabis can distort how intense or dangerous the experience feels. This combination of heightened arousal and altered perception can overwhelm the nervous system and make self-monitoring difficult.",
    statisticsBody:
      "Treatment and emergency data link methamphetamine use to cardiovascular emergencies, agitation, and psychosis, and cannabis is often present alongside it. Because the stimulant can hide exhaustion and the cannabinoid can distort perception, people may underestimate how much strain their body is under. Potency and purity vary widely, and adulterants add further risk. Harm-reduction guidance advises avoiding stimulant-cannabis combinations, staying hydrated and cool, and seeking emergency care for severe chest pain, overheating, confusion, or hallucinations.",
  },
  {
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
  },
  {
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
  },
  {
    a: "meth",
    b: "heroin",
    title: "What Happens When You Mix Meth and Heroin?",
    intro:
      "Methamphetamine and heroin, sometimes called a goofball, pair a strong stimulant with a strong opioid. The stimulant can mask the opioid's sedation and breathing suppression, while the opioid can soften the stimulant's intensity. That apparent balance is deceptive: as each drug rises and falls at different rates, the body can swing between dangerous stimulation and dangerous respiratory depression, and overdose risk remains high throughout.",
    bullets: [
      "Meth can hide heroin's sedation and respiratory effects.",
      "When the stimulant fades, opioid overdose risk increases.",
      "The heart is strained by stimulation while breathing is depressed.",
      "Fentanyl contamination makes street heroin especially lethal.",
      "Judgment and coordination are impaired, increasing injuries.",
      "Overheating, dehydration, and seizures are possible.",
      "Call emergency services for slow breathing or unresponsiveness.",
    ],
    interactionBody:
      "Heroin depresses the central nervous system and breathing through opioid receptors, while methamphetamine drives the release of dopamine and norepinephrine and sustains arousal. Because the stimulant counteracts some of the opioid's visible effects, people may use more heroin than they can tolerate. Once methamphetamine's effects subside, the opioid's respiratory depression can dominate, which helps explain the high overdose risk associated with this combination.",
    statisticsBody:
      "Overdose data show that opioid deaths frequently involve multiple substances, and stimulants are increasingly found alongside opioids. The combination of respiratory depression and cardiovascular strain is especially dangerous, and the presence of illicitly manufactured fentanyl makes potency impossible to predict. There is no reliable way to self-balance the two drugs. Harm-reduction guidance recommends never using alone, having naloxone available, and seeking emergency care immediately for slow breathing, blue lips, chest pain, or loss of consciousness.",
  },
];

export function pairKey(a: DrugId, b: DrugId): string {
  return [a, b].sort().join("|");
}

function buildInteraction(definition: InteractionDefinition): Interaction {
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

export const INTERACTIONS: Record<string, Interaction> = Object.fromEntries(
  DEFINITIONS.map((definition) => {
    const interaction = buildInteraction(definition);
    return [interaction.key, interaction];
  }),
);

export function getInteraction(a: DrugId, b: DrugId): Interaction | null {
  return INTERACTIONS[pairKey(a, b)] ?? null;
}
