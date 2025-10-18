import ProjectDialog from "@/components/pages/projects-page/project-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProjectsJson } from "@/data/projects/projects";
import { projectComponents } from "@/data/projects/projects-comps";
import { useLocale } from "next-intl";

const FeaturesPage = () => {
  const locale = useLocale();
  return (
    <main className="w-screen h-screen">
      <div className="mx-auto w-7xl h-screen pt-20">
        <ScrollArea
          className="w-full h-[calc(100vh-80px)]"
          shadowStyle="radial"
          showScrollbar={false}
        >
          <div className="flex flex-col gap-8 items-center justify-center py-8">
            {ProjectsJson.map((project) => {
              const ProjectComponent =
                projectComponents[project.component][locale];
              if (!ProjectComponent) return null;

              return (
                <ProjectDialog
                  key={project.id}
                  titleKey={project.titleKey}
                  descriptionKey={project.descriptionKey}
                  date={project.date}
                  imageUrl={project.imageUrl}
                  badges={project.badges}
                  article={<ProjectComponent />}
                />
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </main>
  );
};
export default FeaturesPage;
