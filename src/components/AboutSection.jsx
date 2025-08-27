import { Briefcase, Code, User } from 'lucide-react';
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">Aspiring Web Developer</h3>
            <p className="text-muted-foreground">
              Skilled in troubleshooting, frontend development, and
              collaborating in team environments. Eager to apply my academic
              knowledge and project experience to support organizational IT
              needs and grow in the industry.
            </p>
            <p className="text-muted-foreground">Text sample Here 2</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="/Sumalpong_CV.pdf"
                target='_blank'
                rel='noopener noreferrer'
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p className='text-muted-foreground'>
                    Proficient in HTML, CSS, JavaScript, and React to build
                    responsive and user-friendly web applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                 <div className='text-left'>
                  <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                  <p className='text-muted-foreground'>
                    Experienced in designing intuitive user interfaces and
                    enhancing user experience through thoughtful design
                    principles.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                 <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Projects</h4>
                  <p className='text-muted-foreground'>
                    Completed various academic and personal projects
                    demonstrating problem-solving skills and technical
                    proficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
