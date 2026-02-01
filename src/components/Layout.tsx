import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-purple/30">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default Layout;
