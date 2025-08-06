import React, { useState } from "react";
import AdminLayout from "../../../Components/AdminLayout/AdminLayout";
import DataTable from "../../../Components/shared/DataTable";
import { employeeTableData } from "../../../data/employeeTableData";
import { ChevronLeft, ChevronRight, Search } from "lucide-react"; // أضفنا Search هنا
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const columns = [
  "Name(s)",
  "Duration(s)",
  "Start Date",
  "End Date",
  "Type",
  "Reason(s)",
  "Actions",
];

const AllEmployees = () => {
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(employeeTableData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = employeeTableData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const RecallButton = () => (
    <button
      onClick={() => navigate("/admin/employee-profile")}
      className="bg-[#DAB943] text-white px-4 py-1 rounded-md font-semibold"
    >
      View
    </button>
  );

  return (
    <>
      <Helmet>
        <title>Employees | HR Dashboard</title>
        <meta
          name="description"
          content="Browse and manage all registered employees."
        />
      </Helmet>

      <AdminLayout>
        <div className="min-h-screen bg-[#FDF7EE] py-10 px-6">
          <div className="max-w-[1300px] mx-auto bg-white shadow-md rounded-[8px] p-6">
            <h2 className="text-[28px] font-bold text-[#000] mb-6 font-nunito">
              All Employees
            </h2>

            {/* Search & Actions */}
            <div className="relative w-full md:w-[300px] mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-[40px] pl-4 pr-10 border border-gray-300 rounded-[7px] focus:outline-none focus:ring-2 focus:ring-[#DAB943]"
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              />
            </div>

            {/* Table */}
            <DataTable
              columns={columns}
              data={currentData}
              actionIcon={<RecallButton />}
            />

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="text-[#00465F] p-1 disabled:opacity-30"
              >
                <ChevronLeft size={20} />
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                const isActive = page === currentPage;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-[28px] h-[28px] flex items-center justify-center rounded-[4px] font-medium text-sm border transition ${
                      isActive
                        ? "bg-white text-black border border-gray-300 hover:bg-gray-100"
                        : "bg-white text-black border-none hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="text-[#00465F] p-1 disabled:opacity-30"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AllEmployees;
