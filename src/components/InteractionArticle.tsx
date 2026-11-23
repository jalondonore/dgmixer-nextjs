import type { Interaction } from "@/types";
import styles from "./InteractionArticle.module.css";

interface InteractionArticleProps {
  interaction: Interaction;
}

export function InteractionArticle({ interaction }: InteractionArticleProps) {
  return (
    <article id="interaction-article" className={styles.articleContainer}>
      <div className={styles.articleCard}>
        <h2 id="interaction-title" className={styles.ditTitle}>
          {interaction.title}
        </h2>

        <p className={styles.ditText}>{interaction.intro}</p>

        <ul className={styles.ditList}>
          {interaction.bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className={styles.ditHeading}>{interaction.interactionHeading}</h3>
        <p className={styles.ditText}>{interaction.interactionBody}</p>

        <div className={styles.videoWrap}>
          <iframe
            src={interaction.video.src}
            title={interaction.video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <h3 className={styles.ditHeading}>{interaction.statisticsHeading}</h3>
        <p className={styles.ditText}>{interaction.statisticsBody}</p>
      </div>
    </article>
  );
}
