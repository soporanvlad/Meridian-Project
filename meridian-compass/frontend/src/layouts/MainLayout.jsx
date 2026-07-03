import Sidebar from "../components/layout/Sidebar";
import "../styles/layout.css";

function MainLayout({ children }) {
    return (
        <div className="app-layout">
            <Sidebar />
            <main className="app-main">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;