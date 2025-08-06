// import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

// const AdminHeader = () => {
//   return (
//     <header className="md:w-full flex justify-between items-center bg-white shadow px-6 py-3 mb-4">
//       <div className="relative w-[20%]">
//         <input
//           type="text"
//           placeholder="Search...🔍"
//           className="border rounded-[5px] pl-4 pr-10 py-1 w-[80%] text-sm focus:outline-none focus:w-[100%] duration-200"
//         />
//       </div>

//       <div className="flex items-center gap-4">
//         <FaBell className="text-xl text-gray-600 cursor-pointer" />
//         <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
//       </div>
//     </header>
//   );
// };

// export default AdminHeader;
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const AdminHeader = () => {
  return (
    <header className="w-full flex flex-col sm:flex-row justify-between items-center bg-white shadow px-4 py-3 gap-3 sm:gap-0">
      {/* Search Box */}
      <div className="relative w-full sm:w-[300px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border rounded-md pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
        />
        <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <FaBell className="text-xl text-gray-600 cursor-pointer" />
        <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
};

export default AdminHeader;
