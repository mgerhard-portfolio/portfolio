export const DownloadTemplate = () => {
  return (
    <>
      {/* --- HIDDEN PRINT VIEW CONTAINER --- */}
      <div
        className="p-8 hidden text-left font-sans print:m-0 print:block text-[#2c3e50] 
          print:w-full"
      >
        <header>
          <div className="flex flex-row justify-between">
            <div
              className="font-logo font-bold flex flex-col"
              aria-label={`Maxine Gerhard, UX Engineer`}
            >
              <div className="text-3xl tracking-wide sm:text-4xl">
                Maxine Gerhard
              </div>
              <div className="mt-2 text-lg tracking-wide sm:text-xl">
                UX Engineer
              </div>
            </div>
            <ul className="text-right">
              <li>
                <a href="mailto:maxinegerhard@gmail.com">
                  maxinegerhard@gmail.com
                </a>
              </li>
              <li>413-265-8249</li>
              <li>Orange, MA</li>
              <li>
                <a href="https://mgerhard.com/" target="_blank" rel="noopener">
                  https://mgerhard.com/
                </a>
              </li>
              <li>
                <a
                  href="https://goldentoppers.com"
                  target="_blank"
                  rel="noopener"
                >
                  https://goldentoppers.com
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://www.linkedin.com/in/maxinegerhard/"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.linkedin.com/in/maxinegerhard/
                </a>
              </li>
            </ul>
          </div>
        </header>

        <main>
          <section id="summary" aria-label="Summary">
            <p className="p-4 pt-8">
              UX Engineer with 8 years of software engineering experience
              specializing in the intersection of user interface design and
              robust frontend implementation. Translating high-fidelity Figma
              prototypes into highly accessible, component-architected web
              applications using React, TypeScript, Tailwind CSS, and AI
              tooling. Experienced in collaborating across design and
              engineering teams to establish reusable component systems,
              optimize frontend performance, and ensure design fidelity.
              Combining a user-centered design mindset with deep technical
              execution to deliver intuitive, seamless digital product workflow.
            </p>
          </section>

          <section id="experience">
            <h2 className="pt-4">Experience</h2>

            <article className="pt-2 px-4">
              <div className="entry-header">
                <h3 className="font-black">Client Engineer</h3>
                <span className="entry-meta">Apr 2024 – Nov 2025</span>
              </div>
              <p className="company-name">PENN Interactive — Greenfield, MA</p>
              <ul>
                <li>
                  Engineered complex React-based internal tools to streamline
                  high-stakes gaming client management and user access control
                  systems.
                </li>
                <li>
                  Connected REST and GraphQL APIs using Axios and React Hooks to
                  handle real-time data securely.
                </li>
                <li>
                  Translated Figma mockups into accessible UI components
                  optimized for mobile and desktop viewports cleanly.
                </li>
                <li>
                  Partnered closely with design and tech leads to solve edge
                  cases early using Jira to track technical debt and sprint
                  tasks.
                </li>
              </ul>
            </article>

            <article className="p-4">
              <div className="entry-header">
                <h3 className="font-black">Software Engineer</h3>
                <span className="entry-meta">Apr 2022 – Dec 2023</span>
              </div>
              <p className="company-name">ONEHOPE Wine — Napa, CA</p>
              <ul>
                <li>
                  Implemented responsive frontend systems for a high-scale
                  e-commerce platform using React and TypeScript, seamlessly
                  supporting thousands of concurrent users.
                </li>
                <li>
                  Collaborated tightly with design teams to deploy
                  pixel-perfect, mobile-responsive features for subscription
                  service workflows.
                </li>
                <li>
                  Optimized client-side data architecture using GraphQL and
                  Apollo Client, significantly improving customer perceived load
                  times.
                </li>
                <li>
                  Built an interactive custom web configuration design tool
                  empowering users to personalize products with real-time visual
                  canvas feedback.
                </li>
              </ul>
            </article>

            <article className="p-4">
              <div className="entry-header">
                <h3 className="font-black">Software Developer</h3>
                <span className="entry-meta">Sep 2018 – Apr 2022</span>
              </div>
              <p className="company-name">Rediker Software — Hampden, MA</p>
              <ul>
                <li>
                  Built modular, accessible React components for a flagship
                  Student Information System (SIS), guaranteeing
                  enterprise-grade security and compliance.
                </li>
                <li>
                  Architected clean Postgres database structures using Prisma
                  ORM to efficiently process and map nested student records.
                </li>
                <li>
                  Developed and integrated a bulletproof secure user login
                  application layer employing IdentityServer and C#.
                </li>
                <li>
                  Stepped up as Scrum Master to steer daily syncs, refine
                  backlogs, eliminate workflow impediments, and guarantee
                  on-time shipping.
                </li>
              </ul>
            </article>

            <article className="p-4">
              <div className="entry-header">
                <h3 className="font-black">Software Engineer II</h3>
                <span className="entry-meta">May 2015 – Sep 2018</span>
              </div>
              <p className="company-name">TicketNetwork — South Windsor, CT</p>
              <ul>
                <li>
                  Developed and scaled e-commerce ticket ticketing platforms
                  serving high-volume inventory utilizing Orchard CMS and Razor
                  pages.
                </li>
                <li>
                  Created efficient internal API endpoints to seamlessly
                  process, transform, and serve real-time high-throughput
                  product payloads.
                </li>
                <li>
                  Refactored legacy web layers into modern semantic HTML5, CSS3,
                  and clean JavaScript/jQuery to modernize cross-browser
                  compatibility and responsiveness.
                </li>
              </ul>
            </article>
          </section>

          <section id="projects" className="pt-6">
            <h2>Featured Projects</h2>
            <article className="p-4 pt-2">
              <div className="entry-header">
                <h3 className="font-black">Developer & UI Architect</h3>
                <span className="entry-meta">May 2026</span>
              </div>
              <p className="project-name">
                <a href="https://mgerhard.com/" target="_blank" rel="noopener">
                  Personal Portfolio (https://mgerhard.com/)
                </a>
              </p>
              <ul>
                <li>
                  Engineered an interactive, state-driven React web application
                  using Vite, TypeScript, and Tailwind CSS calculating
                  veterinary-approved wholefood recipe configurations.
                </li>
                <li>
                  Optimized component state lifecycle and deep routing
                  persistence with an efficient React Context architecture,
                  ensuring a 0ms transition latency.
                </li>
                <li>
                  Deployed automated CI/CD infrastructure via AWS Amplify linked
                  to GitHub, integrating automated SVGO vector compressions to
                  slim production bundles.
                </li>
              </ul>
            </article>
            <article className="p-4 pt-2">
              <div className="entry-header">
                <h3 className="font-black">Developer & UI Architect</h3>
                <span className="entry-meta">May 2026</span>
              </div>
              <p className="project-name">
                <a
                  href="https://goldentoppers.com"
                  target="_blank"
                  rel="noopener"
                >
                  Golden Toppers (https://goldentoppers.com)
                </a>
              </p>
              <ul>
                <li>
                  Engineered an interactive, state-driven React web application
                  using Vite, TypeScript, and Tailwind CSS calculating
                  veterinary-approved wholefood recipe configurations.
                </li>
                <li>
                  Optimized component state lifecycle and deep routing
                  persistence with an efficient React Context architecture,
                  ensuring a 0ms transition latency.
                </li>
                <li>
                  Deployed automated CI/CD infrastructure via AWS Amplify linked
                  to GitHub, integrating automated SVGO vector compressions to
                  slim production bundles.
                </li>
              </ul>
            </article>
          </section>

          <section id="skills" className="p-4">
            <h2>Technical Skills</h2>
            <div className="p-4">
              <div className="skills-category">
                <span className="category-name">Frontend</span>
                <span>
                  React, TypeScript, Next.js, JavaScript, HTML5, CSS3, Tailwind
                  CSS, Material UI, Chakra UI, Storybook
                </span>
              </div>
              <div className="skills-category">
                <span className="category-name">Data & Backend</span>
                <span>
                  GraphQL, Apollo Client, RESTful APIs, C#, Postgres, Prisma
                  ORM, Axios
                </span>
              </div>
              <div className="skills-category">
                <span className="category-name">Tools & Methods</span>
                <span>
                  Agile/Scrum, Git/GitHub, Jira, Figma, Vite, AWS (Amplify,
                  Route53, S3, EC2), Docker
                </span>
              </div>
              <div className="skills-category">
                <span className="category-name">Testing & AI</span>
                <span>
                  Cypress (E2E), Jest, Vitest, Google Gemini, GitHub Copilot
                </span>
              </div>
            </div>
          </section>

          <section id="education">
            <h2>Education</h2>
            <div className="p-4">
              <h3 className="entry-title">University of Massachusetts</h3>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
