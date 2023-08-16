import React from "react";
import { Navbar, MobileNav, Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                className="p-1 font-semibold"
            >
                <Link to="/" className="flex items-center justify-center">
                    HOME
                </Link>
            </Typography>
            <Typography
                className="p-1 font-semibold"
            >
                <Link to="/about" className="flex items-center justify-center">
                    ABOUT
                </Link>
            </Typography>
            <Typography
                className="p-1 font-semibold"
            >
                <Link to="/skills" className="flex items-center justify-center">
                    SKILLS
                </Link>
            </Typography>
            <Typography
                className="p-1 font-semibold"
            >
                <Link to="/projects" className="flex items-center justify-center">
                    PROJECTS
                </Link>
            </Typography>
            <Typography
                className="p-1 font-semibold"
            >
                <Link to="/contact" className="flex items-center justify-center">
                    CONTACT
                </Link>
            </Typography>
        </ul>
    );

    return (
        <div className="mx-auto bg-black font-mono lg:px-8">
            <Navbar className="sticky z-10 rounded-none py-5 px-4 lg:px-4 lg:py-4">
                <div className="flex items-center justify-between">
                    <Typography
                        className="py-1.5 text-2xl font-bold text-white"
                    >
                        EMON.dev
                    </Typography>
                    <div className="flex items-center text-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    <div className="flex flex-col items-center" onClick={() => setOpenNav(!openNav)}>
                        {navList}
                    </div>
                </MobileNav>
            </Navbar>
        </div>
    );
}

export default Header;