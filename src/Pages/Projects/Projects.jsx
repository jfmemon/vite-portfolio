import { Link } from 'react-router-dom';
import image1 from '../../assets/ProjectsImages/image1.PNG';
const Projects = () => {
    return (
        <div>
            <h3 className='text-2xl text-center text-white font-bold my-10 underline decoration-sky-500'>Fullstack project</h3>
            <div className='m-5 flex flex-col items-center text-white gap-10'>
                <div className="card card-side border shadow-xl w-3/4 grid lg:grid-cols-2 grid-cols-1 rounded-none">
                    <img className='object-contain w-94 h-auto p-3' src={image1} alt="Movie" />
                    <div className="card-body">
                        <h2 className="card-title text-red-400 text-2xl font-bold">Vromon (Tour & travel management system)</h2>
                        <ul className='list-disc'>
                            <li><p>Vromon is a travel agency website.</p></li>
                            <li><p>There have 2 types of users. These are tourist and admin or agency.</p></li>
                            <li><p>By using this website, Tourist will be able to book hotel and also will able to book bus and plane tickets. Also they will be able to make custom tour package.</p></li>
                            <li><p>Admin will be able to manage all the features. They will be able to add, modify and delete any features.</p></li>
                        </ul>
                        <p className='mt-5'><span className='text-sky-500 font-semibold'>Technology used:</span> React JS || Express JS || Axios || Tanstack || RESTful APIs || Tailwind || JWT || React Icon || Firebase || MongoDb || React Router || Vs Code</p>
                        <div className="card-actions">
                            <Link to="https://github.com/jfmemon/vromon-client" className="btn btn-outline bg-white outline-offset-2 hover:text-white hover:bg-sky-500">Client side</Link>
                            <Link to="https://github.com/jfmemon/vromon-server" className="btn btn-outline bg-white outline-offset-2 hover:text-white hover:bg-sky-500">Server side</Link>
                            <Link to="https://vromon-client-78a09.web.app/" className="btn btn-outline bg-white outline-offset-2 hover:text-white hover:bg-sky-500">Live</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;