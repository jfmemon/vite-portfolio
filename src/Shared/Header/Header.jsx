import { useState } from 'react';
import Menu from '../../Component/Menu';
import { Link } from 'react-router-dom';


const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const hideMobileMenu = () => {
        setShowMobileMenu(false); // Function to hide the mobile menu
    };


    return (
        <nav className="bg-black sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
                <div className="flex-shrink-0 font-bold tracking-wider">
                    <Link to="/" className='text-white text-2xl'><span className='text-sky-500'>EMON</span>.dev</Link>
                </div>
                <div className="hidden md:block">
                    <Menu />
                </div>
                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-sky-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="md:hidden">
                {showMobileMenu && <Menu hideMobileMenu={hideMobileMenu} />}
            </div>
        </nav>
    );
};

export default Header;
