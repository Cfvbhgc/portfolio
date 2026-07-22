import DefaultLayout from "@/shared/ui/DefaultLayout";
import {
  ProjectsSlider,
  ProjectsSliderRawProps,
} from "@/widgets/ProjectsSlider";
import {
  LandingsSection,
  LandingsSectionRawProps,
} from "@/widgets/LandingsSection";

export type RawProps = {
  h1: string;
  projectsSectionData: ProjectsSliderRawProps;
  landingsSectionData: LandingsSectionRawProps;
};

const IndexPageView = ({
  h1,
  projectsSectionData,
  landingsSectionData,
}: RawProps) => {
  return (
    <DefaultLayout>
      <div className="index__content">
        <h1 className="visually-hidden">{h1}</h1>
        <ProjectsSlider {...projectsSectionData} />
        <LandingsSection {...landingsSectionData} />
      </div>
    </DefaultLayout>
  );
};

export default IndexPageView;
