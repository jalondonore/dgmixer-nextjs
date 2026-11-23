import type { Interaction } from "@/types";

interface InteractionArticleProps {
  interaction: Interaction;
}

export function InteractionArticle({ interaction }: InteractionArticleProps) {
  return (
    <article id="interaction-article" className="articleContainer">
      <div className="articleCard">
        <h1 id="interaction-title" className="ditTitle">
          {interaction.title}
        </h1>

        <p className="ditText">{interaction.intro}</p>

        <ul className="ditList">
          {interaction.bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="ditHeading">{interaction.interactionHeading}</h2>
        <p className="ditText">{interaction.interactionBody}</p>

        <div className="videoWrap">
          <iframe
            src={interaction.video.src}
            title={interaction.video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <h2 className="ditHeading">{interaction.statisticsHeading}</h2>
        <p className="ditText">{interaction.statisticsBody}</p>
      </div>
    </article>
  );
}
