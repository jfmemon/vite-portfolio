import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet className="relative"></Outlet>
        </div>
    );
};

export default Main;