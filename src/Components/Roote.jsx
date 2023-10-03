import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "react-hot-toast";


const Roote = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Roote;