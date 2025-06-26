import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/login";
import Dashboard from "./pages/admin/Dashboard";
import Unauthorized from "./pages/system/Unauthorized";
import ProtectedRoute from "./routes/ProtectedRoute";
import EmployeeDashboard from "./pages/user/EmployeeDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/user/profile"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
}

export default App;
