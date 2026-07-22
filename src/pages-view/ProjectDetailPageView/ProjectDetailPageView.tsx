import { useMemo, useRef } from "react";
import Image from "next/image";
import { IProjectFlat } from "@/entities/project";
import { useHeaderColorObserver } from "@/shared/lib/use-header-color";
import { DEFAULT_HEADER_CLASS } from "@/shared/сonfig/const";
import DefaultLayout from "@/shared/ui/DefaultLayout";
import Link from "@/shared/ui/Link";

const isEn = process.env.NEXT_PUBLIC_LOCALE === "en";

export type RawProps = {
  project: IProjectFlat;
};

const ProjectDetailPageView = ({ project }: RawProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useMemo(() => [rootRef], []);

  useHeaderColorObserver(sectionRefs, DEFAULT_HEADER_CLASS);

  return (
    <DefaultLayout>
      <div
        className="project-detail"
        ref={rootRef}
        data-header-class={DEFAULT_HEADER_CLASS}>
        <div className="wrapper project-detail__wrapper">
          <Link href="/" className="project-detail__back text-xs">
            {isEn ? "← Home" : "← Главная"}
          </Link>

          <div className="project-detail__head">
            {project.category && (
              <p className="project-detail__category text-xs">
                {project.category}
              </p>
            )}
            <h1 className="project-detail__title h1">{project.name}</h1>
          </div>

          <div className="project-detail__media">
            <Image
              className="project-detail__image"
              src={project.previewImg.src}
              alt={project.name}
              fill
              sizes="100vw"
              draggable={false}
            />
          </div>

          <div className="project-detail__body">
            {project.summary && (
              <p className="project-detail__summary text-l">
                {project.summary}
              </p>
            )}

            <div className="project-detail__actions">
              {project.href && (
                <a
                  className="project-detail__btn"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer">
                  {isEn ? "Live demo" : "Демо"}
                </a>
              )}
              <a
                className="project-detail__btn"
                href={project.github}
                target="_blank"
                rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProjectDetailPageView;
