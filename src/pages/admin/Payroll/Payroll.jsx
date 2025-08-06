import React, { useState } from "react";
import AdminLayout from "../../../Components/AdminLayout/AdminLayout";
import DataTable from "../../../Components/shared/DataTable";
import { Upload, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { payrollData } from "../../../data/admin/payrollData";

const columns = ["Name(s)", "CTC", "Salary per month", "Deduction", "Status"];

const Payroll = () => {
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const totalPages = Math.ceil(payrollData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const filteredData = payrollData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const renderStatus = (status) => {
    const baseStyle = "px-3 py-1 rounded-full text-white text-sm font-semibold";
    const color = status === "Pending" ? "#DAB943" : "#61A3BA";
    return (
      <span className={baseStyle} style={{ color: color }}>
        {status}
      </span>
    );
  };

  const rows = currentData.map((item) => [
    item.name,
    item.ctc,
    item.salary,
    item.deduction,
    renderStatus(item.status),
  ]);

  return (
    <>
      <Helmet>
        <title>Payroll | HR Dashboard</title>
        <meta name="description" content="View and manage employee payrolls." />
      </Helmet>
      <AdminLayout>
        <div className="min-h-screen bg-[#FDF7EE] py-10 px-6">
          <div className="max-w-[1300px] mx-auto bg-white shadow-md rounded-[8px] p-6">
            <h2 className="text-[28px] font-bold text-[#000] mb-6 font-nunito">
              Payroll
            </h2>

            {/* Search & Actions */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-[32px]">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-[300px] h-[40px] px-4 border border-gray-300 rounded-[7px] focus:outline-none focus:ring-2 focus:ring-[#DAB943]"
              />
              <button className="bg-[#61A3BA] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#4b8ba0] transition text-[16px] flex items-center gap-2">
                <Upload size={18} />
                Export
              </button>
            </div>

            {/* Data Table */}
            <DataTable columns={columns} data={rows} />

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

export default Payroll;
