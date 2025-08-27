const skills = [
    {name: "HTML/CSS", level: "Expert", category: "Frontend"},
    {name: "JavaScript", level: "Expert", category: "Frontend"},
    {name: "React.js", level: "Advanced", category: "Frontend"},
    {name: "Vue.js", level: "Intermediate", category: "Frontend"},

    {name: "Node.js", level: "Intermediate", category: "Backend"},
    {name: "Laravel", level: "Intermediate", category: "Backend"},
    {name: "Python", level: "Intermediate", category: "Backend"},
    {name: "Django", level: "Beginner", category: "Backend"},


    {name: "Github", level: "Advanced", category: "Tools"},
    {name: "Figma", level: "Intermediate", category: "Tools"},
    {name: "VS Code", level: "Expert", category: "Tools"},
    {name: "Adobe XD", level: "Intermediate", category: "Tools"},

];

export const SkillsSection = () => {
    return (
        <section
        id="skills"
        className="py-24 px-4 relative bg-secondary/30 "
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div key = {key} className="bg-card p-6 rounded-lg shadow-xs card-hover"> 

                        </div>
                    ))}

                </div>

            </div>

        </section>);
};