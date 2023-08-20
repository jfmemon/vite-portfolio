
const Skills = () => {
    return (
        <div className="text-white p-5">
            <h3 className="text-3xl text-center font-semibold underline decoration-sky-500">My Skills</h3>
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 mt-8 gap-5">
                <div className="flex flex-col items-center">
                    <p className="font-semibold text-2xl mb-5 underline decoration-sky-500">Frontend</p>
                    <div>
                        <p>Html</p>
                        <progress className="progress progress-error w-56 bg-white" value="95" max="100"></progress>
                    </div>
                    <div>
                        <p>CSS</p>
                        <progress className="progress progress-error w-56 bg-white" value="80" max="100"></progress>
                    </div>
                    <div>
                        <p>Bootstrap</p>
                        <progress className="progress progress-error w-56 bg-white" value="70" max="100"></progress>
                    </div>
                    <div>
                        <p>Tailwind CSS</p>
                        <progress className="progress progress-error w-56 bg-white" value="75" max="100"></progress>
                    </div>
                    <div>
                        <p>JavaScript</p>
                        <progress className="progress progress-error w-56 bg-white" value="75" max="100"></progress>
                    </div>
                    <div>
                        <p>React JS</p>
                        <progress className="progress progress-error w-56 bg-white" value="85" max="100"></progress>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-semibold text-2xl mb-5 underline decoration-sky-500">Backend</p>
                    <div>
                        <p>Express JS</p>
                        <progress className="progress progress-warning bg-white w-56" value="85" max="100"></progress>
                    </div>
                    <div>
                        <p>RestFul APIs</p>
                        <progress className="progress progress-warning bg-white w-56" value="85" max="100"></progress>
                    </div>
                    <div>
                        <p>JWT</p>
                        <progress className="progress progress-warning bg-white w-56" value="65" max="100"></progress>
                    </div>
                    <div>
                        <p>Node JS</p>
                        <progress className="progress progress-warning w-56 bg-white" value="25" max="100"></progress>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-semibold text-2xl mb-5 underline decoration-sky-500">Database</p>
                    <div>
                        <p>Mongo DB</p>
                        <progress className="progress progress-primary w-56 bg-white" value="85" max="100"></progress>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-semibold text-2xl mb-5 underline decoration-sky-500">Tools</p>
                    <div>
                        <p>VS Code</p>
                        <progress className="progress progress-accent bg-white w-56" value="85" max="100"></progress>
                    </div>
                    <div>
                        <p>Figma</p>
                        <progress className="progress progress-accent bg-white w-56" value="85" max="100"></progress>
                    </div>
                    <div>
                        <p>Git</p>
                        <progress className="progress progress-accent bg-white w-56" value="85" max="100"></progress>
                    </div>
                    <div>
                        <p>Github</p>
                        <progress className="progress progress-accent bg-white w-56" value="85" max="100"></progress>
                    </div>
                    <div>
                        <p>Firebase</p>
                        <progress className="progress progress-accent bg-white w-56" value="85" max="100"></progress>
                    </div>
                    <div>
                        <p>Vercel</p>
                        <progress className="progress progress-accent w-56 bg-white" value="90" max="100"></progress>
                    </div>
                    <div>
                        <p>Netlify</p>
                        <progress className="progress progress-accent bg-white w-56" value="85" max="100"></progress>
                    </div>
                    <div>
                        <p>Chrome Dev Tool</p>
                        <progress className="progress progress-accent bg-white w-56" value="60" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;