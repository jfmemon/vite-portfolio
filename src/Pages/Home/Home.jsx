import { Link } from 'react-router-dom';
import image from '../../assets/Images/image.jpg'
import { FaLinkedin, FaGithub, FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="hero text-white lg:mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-40">
                <div className="avatar">
                    <div className="w-42 mask mask-squircle">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>
                <div className='w-1/3'>
                    <h1 className="text-5xl font-bold">MERN Stack Developer</h1>
                    <p className="py-6">Hi, I'm Md Jannatul Ferdous Emon. A passionate MERN Stack Developer based in Dhaka, Bangladesh.📍</p>
                    <div className="flex gap-3">
                        <Link to="https://www.linkedin.com/in/md-jannatul-ferdous-emon-108100180/" className='text-3xl'><FaLinkedin /></Link>
                        <Link to="https://github.com/jfmemon" className='text-3xl'><FaGithub /></Link>
                    </div>
                    <div className='mt-20 flex'>
                        <h3>Tech Stack <span className='text-indigo-400 lg:ms-5'>|</span></h3>
                        <div className='ms-5'>
                            <ul className='flex gap-5'>
                                <li className='text-3xl'><FaHtml5></FaHtml5></li>
                                <li className='text-3xl'><FaCss3></FaCss3></li>
                                <li className='text-3xl'><FaJs></FaJs></li>
                                <li className='text-3xl'><FaReact></FaReact></li>
                                <li className='text-3xl'><FaBootstrap></FaBootstrap></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;