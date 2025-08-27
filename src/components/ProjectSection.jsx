const  project  = [
    {
        id: 1,
        title: 'Project One',
        description: 'Description for project one.',
        image: "/project/project1.png",
        tags: ['React', 'TypeScript', 'TailwindCSS'],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Description for project two.',
        image: "/project/project2.png",
        tags: ['Vue', 'JavaScript', 'Bootstrap'],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'Description for project three.',
        image: "/project/project3.png",
        tags: ['Angular', 'TypeScript', 'MaterialUI'],
        demoUrl: "#",
        githubUrl: "#",
    },
]
export const ProjectSection = () => {
    return (
        <section id="projects"></section>
    );

};