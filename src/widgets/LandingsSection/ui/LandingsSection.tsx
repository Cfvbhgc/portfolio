import React from "react";
import { IProjectFlat, ProjectCard } from "@/entities/project";
import Reveal from "@/shared/ui/Reveal";

export type RawProps = {
  header: string;
  projects: IProjectFlat[];
};

type Props = React.HTMLAttributes<HTMLElement> & RawProps;

export const LandingsSection = ({ header, projects, ...props }: Props) => {
  return (
    <section {...props} className="landings">
      <div className="wrapper landings__wrapper">
        <h2 className="landings__title h2">{header}</h2>
        <ul className="landings__grid list-unstyled">
          {projects.map((project, index) => (
            <Reveal
              as="li"
              key={project.id}
              className="landings__item"
              delay={(index % 4) * 80}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};
