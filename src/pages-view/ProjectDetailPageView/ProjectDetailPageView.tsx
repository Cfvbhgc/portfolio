import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
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
  const [mounted, setMounted] = useState(false);

  useHeaderColorObserver(sectionRefs, DEFAULT_HEADER_CLASS);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <DefaultLayout>
      <div
        className="project-detail"
        ref={rootRef}
        data-header-class={DEFAULT_HEADER_CLASS}>
        <section className="project-detail__hero">
          <div
            className={classNames("project-detail__hero-media", {
              "project-detail__hero-media--mounted": mounted,
            })}>
            <Image
              className="project-detail__hero-image"
              src={project.previewImg.src}
              alt={project.name}
              fill
              priority
              sizes="100vw"
              draggable={false}
            />
            <div className="project-detail__scrim" />
          </div>

          <div className="wrapper project-detail__hero-inner">
            <Link href="/" className="project-detail__back text-xs">
              {isEn ? "← Home" : "← Главная"}
            </Link>

            <div className="project-detail__hero-content">
              {project.category && (
                <p className="project-detail__category text-xs">
                  {project.category}
                </p>
              )}
              <h1 className="project-detail__title h1">{project.name}</h1>
            </div>
          </div>
        </section>

        <section className="project-detail__body">
          <div className="wrapper project-detail__body-inner">
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
        </section>
      </div>
    </DefaultLayout>
  );
};

export default ProjectDetailPageView;
