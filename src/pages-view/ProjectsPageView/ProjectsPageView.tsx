import { useMemo, useRef } from "react";
import { Directions, DirectionsRawProps } from "../AboutPageView/sections";
import { useHeaderColorObserver } from "@/shared/lib/use-header-color";
import { DEFAULT_HEADER_CLASS } from "@/shared/сonfig/const";
import DefaultLayout from "@/shared/ui/DefaultLayout";

export type RawProps = {
  h1: string;
  directionsSectionData: DirectionsRawProps;
};

const ProjectsPageView = ({ h1, directionsSectionData }: RawProps) => {
  const directionsRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = useMemo(() => [directionsRef], []);

  useHeaderColorObserver(sectionRefs, DEFAULT_HEADER_CLASS);

  return (
    <DefaultLayout>
      <div className="projects">
        <h1 className="visually-hidden">{h1}</h1>

        <Directions
          ref={directionsRef}
          {...directionsSectionData}
          data-header-class={DEFAULT_HEADER_CLASS}
        />
      </div>
    </DefaultLayout>
  );
};

export default ProjectsPageView;
