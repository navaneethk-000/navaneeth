export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> */}
        <div className="flex md:flex-col gap-12 items-center">
          {/* <div className="space-y-6"> */}
          <div className="space-y-6 md:w-3xl">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              In my web development journey, I specialize in creating
              responsive, accessible, and performant web applications using
              modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/navaneeth/public/NAVANEETH_K_SOFTWARE_DEVELOPER.pdf"
                download={"NAVANEETH_K_SOFTWARE_DEVELOPER.pdf"}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
