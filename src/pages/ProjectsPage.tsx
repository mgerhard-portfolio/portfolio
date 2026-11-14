import SideBarText from "../components/SideBarText";

function ProjectsPage() {
  return (
    <section className="page flex flex-col">
      <div className="flex flex-col gap-4 px-8 ">
        <SideBarText
          heading="Personal Portfolio"
          subtitle="Personal Portfolio"
        />
        <SideBarText heading="GoldenToppers.com" subtitle="Goldentoppers.com" />
      </div>
    </section>
  );
}

export default ProjectsPage;
