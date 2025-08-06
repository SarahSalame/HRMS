import Navbar from "../../Components/Navbar/Navbar";
import UserCard from "../../Components/user/UserCard";
import LeaveSummary from "../../Components/user/LeaveSummary";
import ToDoList from "../../Components/user/ToDoList";
import Advertisements from "../../Components/user/Advertisements";
import MonthlyStatistics from "../../Components/user/MonthlyStatistics";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const EmployeeDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Employee Profile| HR Dashboard</title>
        <meta name="description" content="Page Show Emloyee Profile" />
      </Helmet>
      <div className="min-h-screen bg-[#fdf7ee]">
        <Navbar />
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-[#005c75]">Dashboard</h1>

          <UserCard />

          <div className="px-[80px] flex flex-wrap gap-[20px] justify-start">
            <button
              className="w-[227px] h-[55px] bg-white rounded-[16px] shadow-[0_4px_6px_#00000033] font-nunito font-medium"
              onClick={() => navigate("/user/leave-application")}
            >
              Apply for Leave
            </button>
            <button className="w-[227px] h-[55px] bg-white rounded-[16px] shadow-[0_4px_6px_#00000033] font-nunito font-medium">
              Take Appraisal
            </button>
            <button className="w-[227px] h-[55px] bg-white rounded-[16px] shadow-[0_4px_6px_#00000033] font-nunito font-medium">
              Update Profile
            </button>
            <button className="w-[227px] h-[55px] bg-white rounded-[16px] shadow-[0_4px_6px_#00000033] font-nunito font-medium">
              Events
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LeaveSummary />
            <ToDoList />
            <Advertisements />
            <MonthlyStatistics />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
