import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
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
                path: "projects",
                element: <Projects></Projects>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
        ]
    }
])