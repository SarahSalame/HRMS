// import { MdOutlineSpaceDashboard } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import {
//   FaUser,
//   FaUsers,
//   FaUserTie,
//   FaUserAlt,
//   FaUserFriends,
// } from "react-icons/fa";
// import { FaUmbrellaBeach, FaHandshake } from "react-icons/fa";
// import { MdAttachMoney } from "react-icons/md";
// import { RiUserReceived2Line } from "react-icons/ri";
// import { FiSettings } from "react-icons/fi";
// const AdminSidebar = () => {
//   const linkClass = ({ isActive }) =>
//     `  flex items-center gap-[20px]  px-4 py-2 rounded-md transition ${
//       isActive ? "bg-blue-200 font-semibold" : "hover:bg-gray-100"
//     }`;

//   return (
//     <div className="min-h-screen flex">
//       {" "}
//       <aside className="md:w-64  bg-yellow-100 p-4">
//         <h2 className="text-xl font-bold mb-8">Logo HRM</h2>
//         <nav className="space-y-2 mt-[100px]">
//           <NavLink to="/admin/dashboard" className={linkClass}>
//             <MdOutlineSpaceDashboard /> Dashboard
//           </NavLink>
//           <NavLink to="/admin/employees" className={linkClass}>
//             <FaUsers /> Employees
//           </NavLink>
//           <NavLink to="/admin/vacations" className={linkClass}>
//             <FaUmbrellaBeach /> Vacations
//           </NavLink>
//           <NavLink to="/admin/payroll" className={linkClass}>
//             <MdAttachMoney /> Payroll
//           </NavLink>
//           <NavLink to="/admin/meetings" className={linkClass}>
//             <FaHandshake /> Meetings
//           </NavLink>
//           <p className=" text-gray-400 text-center mt-[50px]">OTHER</p>
//           <NavLink to="/admin/payroll" className={linkClass}>
//             <RiUserReceived2Line /> Request to HR
//           </NavLink>
//           <NavLink to="/admin/meetings" className={linkClass}>
//             <FiSettings /> Settings
//           </NavLink>
//         </nav>
//       </aside>
//     </div>
//   );
// };

// export default AdminSidebar;
import React, { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaUsers, FaUmbrellaBeach, FaHandshake } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { RiUserReceived2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

const AdminSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-[20px] px-4 py-2 rounded-md transition ${
      isActive ? "bg-blue-200 font-semibold" : "hover:bg-gray-100"
    }`;

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-yellow-200"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <HiMenu size={24} />
      </button>

      {/* Overlay behind sidebar on mobile when open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-white opacity-60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div className="min-h-screen flex">
        <aside
          className={`bg-yellow-100 p-4 fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 z-50
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:w-64`}
        >
          <h2 className="text-xl font-bold mb-8">Logo HRM</h2>
          <nav className="space-y-2 mt-[100px]">
            <NavLink
              to="/admin/dashboard"
              className={linkClass}
              onClick={() => setSidebarOpen(false)}
            >
              <MdOutlineSpaceDashboard /> Dashboard
            </NavLink>
            <NavLink
              to="/admin/employees"
              className={linkClass}
              onClick={() => setSidebarOpen(false)}
            >
              <FaUsers /> Employees
            </NavLink>
            <NavLink
              to="/admin/vacations"
              className={linkClass}
              onClick={() => setSidebarOpen(false)}
            >
              <FaUmbrellaBeach /> Vacations
            </NavLink>
            <NavLink
              to="/admin/payroll"
              className={linkClass}
              onClick={() => setSidebarOpen(false)}
            >
              <MdAttachMoney /> Payroll
            </NavLink>
            <NavLink
              to="/admin/meetings"
              className={linkClass}
              onClick={() => setSidebarOpen(false)}
            >
              <FaHandshake /> Meetings
            </NavLink>
            <p className="text-gray-400 text-center mt-[50px]">OTHER</p>
            <NavLink
              to="/admin/payroll"
              className={linkClass}
              onClick={() => setSidebarOpen(false)}
            >
              <RiUserReceived2Line /> Request to HR
            </NavLink>
            <NavLink
              to="/admin/meetings"
              className={linkClass}
              onClick={() => setSidebarOpen(false)}
            >
              <FiSettings /> Settings
            </NavLink>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default AdminSidebar;
