import TextBox from "../components/TextBox";

function SkillsPage() {
  return (
    <section className="page">
      <TextBox
        heading="Frontend"
        text="React, Typescript, Tailwind CSS, HTML5, Material UI, Chakra UI"
      />
      <TextBox
        heading="Design"
        text="Design Systems, Responsive & Adaptive, Mobile-first, Web, User Experience"
      />
      <TextBox
        heading="Tools & Methodology"
        text="Vite, Agile, AWS (EC2, Route53, Cloudfront, S3, Amplify), CI/CD, Figma (Prototypes to Code, AI), Git/GitHub, Google Gemini, VS Copilot"
      />
      <TextBox
        heading="Data & Backend"
        text="Apollo Client, C#, GraphQL, Prisma, REST APIs"
      />
      <TextBox heading="Testing & QA" text="Cypress, Jest" />
    </section>
  );
}

export default SkillsPage;
