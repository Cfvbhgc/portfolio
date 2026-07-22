import Image from "next/image";
import classNames from "classnames";
import { IProjectFlat } from "../model";

const isEn = process.env.NEXT_PUBLIC_LOCALE === "en";

type RawProps = IProjectFlat &
  React.HTMLAttributes<HTMLElement> & {
    setSlideRef?: (node: HTMLElement | null) => void;
    setMediaRef?: (node: HTMLDivElement | null) => void;
    active?: boolean;
  };

export const ProjectCard = ({
  id,
  setSlideRef,
  setMediaRef,
  name,
  category,
  summary,
  previewImg,
  href,
  github,
  active,
  className,
  ...props
}: RawProps) => {
  return (
    <article
      {...props}
      id={id}
      ref={setSlideRef}
      className={classNames("project-card", className, {
        "project-card--active": active,
      })}>
      <div className="project-card__inner">
        <div ref={setMediaRef} className="project-card__media">
          <div className="project-card__image-container">
            <Image
              className="project-card__image"
              src={previewImg.src}
              alt={name}
              fill
              draggable={false}
            />
          </div>
        </div>

        <div className="project-card__content">
          {category && <p className="project-card__category">{category}</p>}
          <h3 className="project-card__title h3">{name}</h3>
          {summary && <p className="project-card__summary">{summary}</p>}

          <div className="project-card__actions">
            {href && (
              <a
                className="project-card__btn"
                href={href}
                target="_blank"
                rel="noreferrer">
                {isEn ? "Demo" : "Демо"}
              </a>
            )}
            <a
              className="project-card__btn"
              href={github}
              target="_blank"
              rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
