import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, FileText, BriefcaseBusiness } from "lucide-react";
import PersonalInfoForm from "../../../Components/AdminComps/Add Employee page/PersonalInfoForm";
import BasicInfoForm from "../../../Components/AdminComps/Add Employee page/BasicInfoForm";
import DocumentUpload from "../../../Components/AdminComps/Add Employee page/DocumentUpload";
import AdminLayout from "../../../Components/AdminLayout/AdminLayout";

const tabs = [
  { label: "Personal information", icon: <User size={16} /> },
  { label: "Basic information", icon: <BriefcaseBusiness size={16} /> },
  { label: "Documents", icon: <FileText size={16} /> },
];

const AddEmployee = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  const path = location.pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" / ");

  return (
    <>
      <Helmet>
        <title>Add Employee | HR Dashboard</title>
        <meta name="description" content="Add Employee" />
      </Helmet>

      <AdminLayout>
        <div className="p-6 min-h-screen">
          {/* Title & Path */}
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-semibold text-[#000] mb-1">
              Add Employee
            </h1>
            <p className="text-sm text-gray-400">{path}</p>
          </div>

          {/* Card Container */}
          <div className="bg-[#FFFDF6] rounded-xl border border-[#CFCFCF] p-6 shadow-sm">
            {/* Tabs */}
            <div className="flex space-x-6 border-b border-gray-200 mb-6">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-2 px-2 pb-2 text-sm font-medium ${
                    index === activeTab
                      ? "border-b-2 border-[#029fae] text-[#029fae]"
                      : "text-gray-500 hover:text-[#029fae]"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Tab Content */}
            {activeTab === 0 && <PersonalInfoForm />}
            {activeTab === 1 && <BasicInfoForm />}
            {activeTab === 2 && <DocumentUpload />}

            {/* Button */}
            <div className="flex justify-end space-x-3 mt-3">
              <button
                onClick={() => navigate("/admin/employees")}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1))
                }
                className="bg-[#029fae] hover:bg-[#027c89] text-white font-medium px-6 py-2 rounded-md"
              >
                {activeTab === tabs.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AddEmployee;
