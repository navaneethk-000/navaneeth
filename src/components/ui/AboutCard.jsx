import { Briefcase, Code, User } from "lucide-react";

export const AboutCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-lg"> Web Development</h4>
            <p className="text-muted-foreground">
              Creating responsive websites and web applications with modern
              frameworks.
            </p>
          </div>
        </div>
      </div>
      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-lg">UI/UX Design</h4>
            <p className="text-muted-foreground">
              Designing intuitive user interfaces and seamless user experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>

          <div className="text-left">
            <h4 className="font-semibold text-lg">Project Management</h4>
            <p className="text-muted-foreground">
              Leading projects from conception to completion with agile
              methodologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
