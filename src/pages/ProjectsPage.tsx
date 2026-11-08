import TextBox from "../components/TextBox";

function ProjectsPage() {
  return (
    <section className="page flex flex-col gap-6">
      <TextBox heading="Personal Portfolio" text="Personal Portfolio" />
      <TextBox heading="GoldenToppers.com" text="Goldentoppers.com" />
    </section>
  );
}

export default ProjectsPage;
