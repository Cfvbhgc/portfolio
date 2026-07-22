import DefaultLayout from "@/shared/ui/DefaultLayout";
import {
  ProjectsSlider,
  ProjectsSliderRawProps,
} from "@/widgets/ProjectsSlider";
import {
  SeriousProjects,
  SeriousProjectsRawProps,
} from "@/widgets/SeriousProjects";

export type RawProps = {
  h1: string;
  seriousSectionData: SeriousProjectsRawProps;
  landingsHeading: string;
  projectsSectionData: ProjectsSliderRawProps;
};

const IndexPageView = ({
  h1,
  seriousSectionData,
  landingsHeading,
  projectsSectionData,
}: RawProps) => {
  return (
    <DefaultLayout>
      <div className="index__content">
        <h1 className="visually-hidden">{h1}</h1>

        <SeriousProjects {...seriousSectionData} />

        <section className="landings">
          <div className="wrapper landings__head">
            <h2 className="landings__title h2">{landingsHeading}</h2>
          </div>

          <ProjectsSlider {...projectsSectionData} />
        </section>
      </div>
    </DefaultLayout>
  );
};

export default IndexPageView;
