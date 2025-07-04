import { ArrowRight, ExternalLink, Github } from "lucide-react";
import sellstream_img from "../assets/sellstream_img.png";

const projects = [
  {
    id: 1,
    title: "Expense Tracker Dashboard",
    description: "Dashboard for teacking personnel expenses.",
    image: "/projects/expense_tracker.png",
    tags: ["React js", "TailwindCSS", "Context API", "useReducer"],
    demoUrl: "https://expense-tracker-seven-orcin.vercel.app/",
    githubUrl: "https://github.com/navaneethk-000/Expense-Tracker",
  },
  {
    id: 2,
    title: "Trainer's Dashboard",
    description: "Dashboard for Trainers to add and display their  courses.",
    image: "/projects/project1.png",
    tags: ["React js", "TailwindCSS", "Radix UI", "Mantine UI"],
    demoUrl: "https://shareinfo-trainer-dashboard.vercel.app/",
    githubUrl: "https://github.com/navaneethk-000/shareinfo",
  },
  {
    id: 3,
    title: "Sellstream Landing Page",
    description: "A simple and standard Landing page",
    image: sellstream_img,
    tags: ["React", "Tailwind css"],
    demoUrl: "https://sellstream-landingpage.vercel.app/",
    githubUrl: "https://github.com/navaneethk-000/Sellstream-landingpage",
  },
  {
    id: 4,
    title: "Netflix Clone",
    description: "Netflix clone website using React js and Tailwind css",
    image: "/projects/project2.png",
    tags: ["React js", "Tailwind css"],
    demoUrl: "https://netflix-clone-website-lac.vercel.app/",
    githubUrl: "https://github.com/navaneethk-000/Netflix-clone-website",
  },
  {
    id: 5,
    title: "Portfolio website",
    description: "A classic and responsive portfolio website",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind css"],
    demoUrl: "https://navaneethk.vercel.app/",
    githubUrl: "https://github.com/navaneethk-000/portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="overflow-hidden">
                <a
                  className="w-fit flex items-center mx-auto gap-2"
                  target="_blank"
                  href={project.demoUrl}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      key={index}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/navaneethk-000"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
