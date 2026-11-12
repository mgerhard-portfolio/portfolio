import TextBox from "../components/TextBox";

function ProjectsPage() {
  return (
    <section className="page flex flex-col">
      <div className="flex flex-col gap-4 px-8 ">
        <TextBox heading="Personal Portfolio" subtitle="Personal Portfolio" />
        <TextBox heading="GoldenToppers.com" subtitle="Goldentoppers.com" />
      </div>
    </section>
  );
}

export default ProjectsPage;
