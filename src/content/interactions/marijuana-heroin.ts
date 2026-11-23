import type { InteractionDefinition } from "./types";

export const marijuanaHeroin: InteractionDefinition = {
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
};
