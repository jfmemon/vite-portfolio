import { Link } from "react-router-dom";

const Menu = () => {
    return <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700 text-center">
        <Link
            to='/'
            className="block md:inline-block px-3 py-2 rounded-md text-white hover:text-sky-300 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            HOME
        </Link>
        <Link
            to='/about'
            className="block md:inline-block px-3 py-2 rounded-md text-white hover:text-sky-300 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            ABOUT
        </Link>
        <Link
            to='/skills'
            className="block md:inline-block px-3 py-2 rounded-md text-white hover:text-sky-300 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            SKILLS
        </Link>
        <Link
            to='/projects'
            className="block md:inline-block px-3 py-2 rounded-md text-white hover:text-sky-300 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            PROJECTS
        </Link>
        <Link
            to='/contact'
            className="block md:inline-block px-3 py-2 rounded-md text-white hover:text-sky-300 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            CONTACT
        </Link>

    </div>
}

export default Menu;