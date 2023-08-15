import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Resume from "../Pages/Resume/Resume";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "skills",
                element: <Skills></Skills>
            },
            {
                path: "resume",
                element: <Resume></Resume>
            },
            {
                path: "portfolio",
                element: <Portfolio></Portfolio>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
        ]
    }
])