import { Outlet } from "react-router-dom";
import SidebarMain from "../../components/sidebars/SidebarMain";

const MainLayout = () => {
    return (
        <section className="h-screen w-screen font-Montserrat">
            <div className="flex h-full w-full">
                {/* sidebar */}
                <SidebarMain />
                <Outlet />
            </div>
        </section>
    );
};

export default MainLayout;
