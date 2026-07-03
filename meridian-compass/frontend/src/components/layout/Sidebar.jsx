import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const navigationItems = [
    { path: "/dashboard", label: "Dashboard", icon: "🏠" },
    { path: "/departments", label: "Departments", icon: "🏢" },
    { path: "/employees", label: "Team", icon: "👥" },
    { path: "/resources", label: "Resources", icon: "📚" },
    { path: "/faq", label: "FAQ", icon: "❓" },
    { path: "/schedule", label: "Schedule", icon: "📅" },
    { path: "/admin", label: "Admin", icon: "⚙️" }
];

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__brand">
                <div className="sidebar__logo">M</div>
                <div>
                    <h2>Meridian</h2>
                    <p>Compass</p>
                </div>
            </div>

            <nav className="sidebar__nav">
                {navigationItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar__link sidebar__link--active"
                                : "sidebar__link"
                        }
                    >
                        <span>{item.icon}</span>
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;