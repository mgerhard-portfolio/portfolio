import { ResumeExperienceSection } from "../components/ResumeExperienceSection";

function ExperiencePage() {
  return (
    <section className="page">
      <div className="flex flex-col gap-4 px-8 ">
        <ResumeExperienceSection
          jobTitle="Client Engineer"
          companyName="PENN INTERACTIVE"
          startDate="Apr 2024"
          endDate="Nov 2025"
          location="Greenfield, MA"
          description={[
            "Engineered complex React-based internal tools to streamline high-stakes gaming client management and user access control systems.",
            "Connected REST and GraphQL APIs using Axios and React Hooks to handle real-time data securely.",
            "Translated Figma mockups into accessible UI components optimized for mobile and desktop viewports cleanly.",
            "Led cross-functional codebase migration from JavaScript to TypeScript, proactively eliminating runtime errors.",
            "Utilized Jira to track technical debt and sprint tasks; partnered closely with design and tech leads to solve edge cases early",
          ]}
        />
        <ResumeExperienceSection
          jobTitle="Software Engineer"
          companyName="ONEHOPEWINE"
          startDate="Apr 2022"
          endDate="Dec 2023"
          location="Napa, CA (Remote)"
          description={[
            "Implemented responsive frontend systems for a high-scale e-commerce platform using React and TypeScript, seamlessly supporting thousands of concurrent users.",
            "Collaborated tightly with design teams to deploy pixel-perfect, mobile-responsive features for subscription service workflows.",
            "Optimized client-side data architecture using GraphQL and Apollo Client, significantly improving customer perceived load times.",
            "Built an interactive custom web configuration design tool empowering users to personalize products with real-time visual canvas feedback.",
          ]}
        />
        <ResumeExperienceSection
          jobTitle="Software Developer"
          companyName="REDIKER SOFTWARE"
          startDate="Sep 2018"
          endDate="Apr 2022"
          location="Hampden, MA"
          description={[
            "Built modular, accessible React components for a flagship Student Information System (SIS), guaranteeing enterprise-grade security and compliance.",
            "Architected clean Postgres database structures using Prisma ORM to efficiently process and map nested student records.",
            "Developed and integrated a bulletproof secure user login application layer employing IdentityServer and C#.",
            "Stepped up as Scrum Master to steer daily syncs, refine backlogs, eliminate workflow impediments, and guarantee on-time shipping.",
          ]}
        />
        <ResumeExperienceSection
          jobTitle="Software Engineer"
          companyName="TICKETNETWORK"
          startDate="May 2015"
          endDate="Sep 2018"
          location="South Windsor, CT"
          description={[
            "Developed and scaled e-commerce ticket ticketing platforms serving high-volume inventory utilizing Orchard CMS and Razor pages.",
            "Created efficient internal API endpoints to seamlessly process, transform, and serve real-time high-throughput product payloads.",
            "Refactored legacy web layers into modern semantic HTML5, CSS3, and clean JavaScript/jQuery to modernize cross-browser compatibility and responsiveness.",
          ]}
        />
      </div>
    </section>
  );
}

export default ExperiencePage;
