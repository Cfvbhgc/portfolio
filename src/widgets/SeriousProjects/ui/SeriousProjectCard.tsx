import { ISeriousProjectFlat } from "@/entities/project";

const isEn = process.env.NEXT_PUBLIC_LOCALE === "en";

export const SeriousProjectCard = ({
  name,
  category,
  summary,
  github,
  demo,
}: ISeriousProjectFlat) => {
  return (
    <article className="serious-card">
      <p className="serious-card__category">{category}</p>
      <h3 className="serious-card__title h3">{name}</h3>
      <p className="serious-card__summary text-m">{summary}</p>

      <div className="serious-card__actions">
        {demo && (
          <a
            className="serious-card__btn serious-card__btn--accent"
            href={demo}
            target="_blank"
            rel="noreferrer">
            {isEn ? "Demo" : "Демо"}
          </a>
        )}
        <a
          className="serious-card__btn"
          href={github}
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  );
};
