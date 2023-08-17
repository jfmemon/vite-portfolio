import aboutImage from '../../assets/Images/about.jpg';
const About = () => {
    return (
        <div className="text-white">
            <div className="hero lg:mt-14">
                <div className="hero-content flex-col lg:flex-row lg:gap-20">
                    <img src={aboutImage} className="max-w-md rounded-lg shadow-2xl hover:scale-110 transition duration-500 cursor-pointer" />
                    <div className='lg:w-1/3 sm:text-center lg:text-start'>
                        <h3 className="text-2xl font-bold text-red-400">About Me</h3>
                        <h3 className='text-3xl font-bold mt-4'>A dedicated MERN Stack Developer
                            based in Dhaka, Bangladesh 📍</h3>
                        <p className="py-6">As a Junior MERN Stack Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Bootstrap, Tailwind, Node JS, Express JS, Next JS, MongoDB, Firebase, JWT. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;