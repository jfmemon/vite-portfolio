import image1 from '../../assets/ProjectsImages/image1.PNG';
import image2 from '../../assets/ProjectsImages/image2.PNG';
import image3 from '../../assets/ProjectsImages/image3.PNG';
import image4 from '../../assets/ProjectsImages/image4.PNG';
import image5 from '../../assets/ProjectsImages/image5.PNG';
import image6 from '../../assets/ProjectsImages/image6.PNG';
import image7 from '../../assets/ProjectsImages/image7.PNG';
import image8 from '../../assets/ProjectsImages/image8.PNG';
const Projects = () => {
    return (
        <div>
            <h3 className='text-2xl text-center text-white font-bold my-10 underline decoration-sky-500'>Some of my projects</h3>
            <div className='m-5 flex flex-col items-center text-white gap-10'>
                <div className="card card-side border shadow-xl w-3/4 grid lg:grid-cols-2 grid-cols-1 ">
                    <figure><img className='object-contain w-94 h-auto p-3 rounded-3xl' src={image1} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-white outline-offset-2 hover:text-white hover:bg-sky-500">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side border shadow-xl w-3/4 grid lg:grid-cols-2 grid-cols-1 ">
                    <figure><img className='object-contain w-94 h-auto p-3 rounded-3xl' src={image2} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-white outline-offset-2 hover:text-white hover:bg-sky-500">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side border shadow-xl w-3/4 grid lg:grid-cols-2 grid-cols-1 ">
                    <figure><img className='object-contain w-94 h-auto p-3 rounded-3xl' src={image3} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-white outline-offset-2 hover:text-white hover:bg-sky-500">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side border shadow-xl w-3/4 grid lg:grid-cols-2 grid-cols-1 ">
                    <figure><img className='object-contain w-94 h-auto p-3 rounded-3xl' src={image4} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-white outline-offset-2 hover:text-white hover:bg-sky-500">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side border shadow-xl w-3/4 grid lg:grid-cols-2 grid-cols-1 ">
                    <figure><img className='object-contain w-94 h-auto p-3 rounded-3xl' src={image5} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-white outline-offset-2 hover:text-white hover:bg-sky-500">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side border shadow-xl w-3/4 grid lg:grid-cols-2 grid-cols-1 ">
                    <figure><img className='object-contain w-94 h-auto p-3 rounded-3xl' src={image6} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-white outline-offset-2 hover:text-white hover:bg-sky-500">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side border shadow-xl w-3/4 grid lg:grid-cols-2 grid-cols-1 ">
                    <figure><img className='object-contain w-94 h-auto p-3 rounded-3xl' src={image7} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-white outline-offset-2 hover:text-white hover:bg-sky-500">Watch</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side border shadow-xl w-3/4 grid lg:grid-cols-2 grid-cols-1 ">
                    <figure><img className='object-contain w-94 h-auto p-3 rounded-3xl' src={image8} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline bg-white outline-offset-2 hover:text-white hover:bg-sky-500">Watch</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;