
const Skills = () => {
    return (
        <div className="text-white p-5">
            <h3 className="text-3xl font-semibold">My Skills</h3>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-3">
                <div>
                    <p className="font-semibold text-2xl mb-2 underline">Frontend</p>
                    <div>
                        <p>Html</p>
                        <progress className="progress progress-error w-56" value="95" max="100"></progress>
                    </div>
                    <div>
                        <p>CSS</p>
                        <progress className="progress progress-error w-56" value="70" max="100"></progress>
                    </div>
                    <div>
                        <p>Bootstrap</p>
                        <progress className="progress progress-error w-56" value="100" max="100"></progress>
                    </div>
                    <div>
                        <p>Tailwind</p>
                        <progress className="progress progress-error w-56" value="100" max="100"></progress>
                    </div>
                    <div>
                        <p>React JS</p>
                        <progress className="progress progress-error w-56" value="100" max="100"></progress>
                    </div>
                </div>
                <div>Backend</div>
                <div>Database</div>
            </div>
        </div>
    );
};

export default Skills;