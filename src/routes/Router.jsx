import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/login";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Unauthorized from "../pages/system/Unauthorized";
import ProtectedRoute from "./ProtectedRoute";
import EmployeeDashboard from "../pages/user/EmployeeDashboard";
import LeaveApplication from "../pages/user/LeaveApplication";
import LeaveApplicationForm from "../pages/user/LeaveApplicationForm";

import Vacations from "../pages/admin/Vacations/Vacations";
import EmployeeProfile from "../pages/admin/Employee/EmployeeProfile";
import AddEmployee from "../pages/admin/Employee/AddEmployee";
import AllEmployees from "../pages/admin/Employee/AllEmployees";
import Payroll from "../pages/admin/Payroll/Payroll";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      {/* Admin routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/employees"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AllEmployees />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/add-employee"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AddEmployee />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/vacations"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Vacations />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/payroll"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Payroll />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/employee-profile"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <EmployeeProfile />
          </ProtectedRoute>
        }
      />

      {/* User routes */}
      <Route
        path="/user/profile"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/leave-application"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <LeaveApplication />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/leave-application-form"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <LeaveApplicationForm />
          </ProtectedRoute>
        }
      />

      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
}

export default AppRoutes;
