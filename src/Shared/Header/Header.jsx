import { useState } from 'react';
import Menu from '../../Component/Menu';


const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <nav className="bg-black">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
                <div className="flex-shrink-0 font-bold tracking-wider">
                    <h3 className='text-white text-2xl'>EMON.dev</h3>
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
                {showMobileMenu && <Menu />}
            </div>
        </nav>
    );
};

export default Header;
