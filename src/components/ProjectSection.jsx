const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description for project one.',
    image: '/project/project1.PNG',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description for project two.',
    image: '/project/project2.PNG',
    tags: ['Vue', 'JavaScript', 'Bootstrap'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description for project three.',
    image: '/project/project3.PNG',
    tags: ['Angular', 'TypeScript', 'MaterialUI'],
    demoUrl: '#',
    githubUrl: '#',
  },
];
export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold md-4 text-center ">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          A selection of my recent work showcasing my skills and experience in
          web development.
        </p>
        <div className="grid grid-cols-1 md:grod-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6"> 
                <div className="flex flex-wrap gap-2 "> 
                    {project.tags.map((tag) =>(
                        <span className="px-2 py-1 text-xs font-medium border  rounded-full bg-secondary text-secondary-foreground ">{tag}</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
