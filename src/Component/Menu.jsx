import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Menu = ({ hideMobileMenu }) => {

    Menu.propTypes = {
        hideMobileMenu: PropTypes.func.isRequired,
    };

    return <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700 text-center">
        <Link
            to='/'
            className="block md:inline-block px-3 py-2 rounded-md text-white hover:text-sky-300 focus:outline-none focus:text-white focus:bg-gray-700"
            onClick={hideMobileMenu}
        >
            HOME
        </Link>
        <Link
            to='/about'
            className="block md:inline-block px-3 py-2 rounded-md text-white hover:text-sky-300 focus:outline-none focus:text-white focus:bg-gray-700"
            onClick={hideMobileMenu}
        >
            ABOUT
        </Link>
        <Link
            to='/skills'
            className="block md:inline-block px-3 py-2 rounded-md text-white hover:text-sky-300 focus:outline-none focus:text-white focus:bg-gray-700"
            onClick={hideMobileMenu}
        >
            SKILLS
        </Link>
        <Link
            to='/projects'
            className="block md:inline-block px-3 py-2 rounded-md text-white hover:text-sky-300 focus:outline-none focus:text-white focus:bg-gray-700"
            onClick={hideMobileMenu}
        >
            PROJECTS
        </Link>
        <Link
            to='/contact'
            className="block md:inline-block px-3 py-2 rounded-md text-white hover:text-sky-300 focus:outline-none focus:text-white focus:bg-gray-700"
            onClick={hideMobileMenu}
        >
            CONTACT
        </Link>

    </div>
}

export default Menu;