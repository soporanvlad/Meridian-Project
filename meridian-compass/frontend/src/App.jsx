import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Departments from "./pages/Departments/Departments";
import Employees from "./pages/Employees/Employees";
import Resources from "./pages/Resources/Resources";
import FAQ from "./pages/FAQ/FAQ";
import Schedule from "./pages/Schedule/Schedule";
import Admin from "./pages/Admin/Admin";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/departments" element={<Departments />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;