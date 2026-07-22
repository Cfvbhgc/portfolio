import { ISeriousProjectFlat } from "@/entities/project";
import Reveal from "@/shared/ui/Reveal";
import { SeriousProjectCard } from "./SeriousProjectCard";

export type RawProps = {
  header: string;
  projects: ISeriousProjectFlat[];
};

type Props = React.HTMLAttributes<HTMLElement> & RawProps;

export const SeriousProjects = ({ header, projects, ...props }: Props) => {
  return (
    <section {...props} className="serious">
      <div className="wrapper serious__wrapper">
        <h2 className="serious__header h2">{header}</h2>

        <ul className="serious__grid list-unstyled">
          {projects.map((project, index) => (
            <Reveal
              as="li"
              key={project.id}
              className="serious__item"
              delay={(index % 3) * 90}>
              <SeriousProjectCard {...project} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};
