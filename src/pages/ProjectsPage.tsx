import TextBox from "../components/TextBox";

function ProjectsPage() {
  return (
    <section className="page flex flex-col ">
      <div className="flex flex-col gap-4 px-4 sm:px-12 md:px-32 lg:px-52">
        <TextBox heading="Personal Portfolio" text="Personal Portfolio" />
        <TextBox heading="GoldenToppers.com" text="Goldentoppers.com" />
      </div>
    </section>
  );
}

export default ProjectsPage;
