import { Link } from 'react-router-dom';
import image from '../../assets/Images/image.jpg'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="hero text-white lg:mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-40">
                <div className="avatar">
                    <div className="w-42 mask mask-squircle">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>
                <div className='lg:w-1/3'>
                    <h1 className="text-5xl font-bold text-center lg:text-start mt-5"><span className='text-sky-500'>MERN</span> Stack Developer</h1>
                    <p className="py-6">Hi, I'm Md Jannatul Ferdous Emon. A passionate MERN Stack Developer based in Dhaka, Bangladesh.📍</p>
                    <div className="flex gap-3 justify-center lg:justify-start">
                        <Link to="https://www.linkedin.com/in/md-jannatul-ferdous-emon-108100180/" className='text-3xl'><FaLinkedin /></Link>
                        <Link to="https://github.com/jfmemon" className='text-3xl'><FaGithub /></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100031330742154" className='text-3xl'><FaFacebook /> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;