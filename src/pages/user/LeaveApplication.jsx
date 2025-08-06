import { useRef, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { mockLeaveData } from "../../data/mockLeaveData";
import { BookOpen, ChevronDown } from "lucide-react";
import DataTable from "../../Components/shared/DataTable";
import { leaveTableData } from "../../data/leaveTableData";
import { useNavigate } from "react-router-dom";
const LeaveApplication = () => {
  const navigate = useNavigate();

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);
  const columns = [
    "Name(s)",
    "Duration(s)",
    "Start Date",
    "End Date",
    "Type",
    "Reason(s)",
    "Actions",
  ];

  const actionIcon = (
    <div className="flex items-center gap-2 cursor-pointer">
      <span>Action</span>
      <div className="w-[20px] h-[20px] bg-[#DAB943] rounded-full flex items-center justify-center">
        <ChevronDown size={20} color="white" strokeWidth={3} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDF7EE]">
      <Navbar />
      <div className="max-w-[1340px] mx-auto p-6 space-y-6">
        {/* Title */}
        <div className="mb-[40px]">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <BookOpen
                size={34}
                fill="#DAB943"
                stroke="#DAB943"
                className="min-w-[34px] min-h-[34px]"
              />
              <h2 className="text-[38px] font-[600] leading-[100%] text-[#00465F] font-nunito">
                Leave Application
              </h2>
            </div>
            <p className="text-[28px] font-[500] leading-[100%] text-[#00465F] font-nunito ml-[37px]">
              Apply for leave
            </p>
          </div>
        </div>

        {/* Draggable Cards */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`overflow-x-auto select-none scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <div className="flex gap-6 min-w-fit px-1 py-2 whitespace-nowrap">
            {Object.entries(mockLeaveData).map(([type, data], index) => (
              <div
                key={index}
                className="inline-block bg-[#61A3BA] min-w-[405px] h-[154px] rounded-[7px] px-6 pt-[18px] pb-[20px]"
                style={{ boxShadow: "0px 4px 8px #00000040" }}
              >
                <h3 className="text-white text-[28px] font-[600] font-nunito leading-[100%]">
                  {type.replace(/([a-z])([A-Z])/g, "$1 $2")}
                </h3>
                <div className="flex items-center justify-between mt-[20px]">
                  <p className="text-white text-[40px] font-bold font-nunito leading-[100%]">
                    {data.total - data.used}
                  </p>
                  <button
                    onClick={() => navigate("/user/leave-application-form")}
                    className="bg-[#DAB943] text-white w-[131px] h-[37px] rounded-md text-[20px] font-bold font-nunito leading-[100%]"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={leaveTableData}
          actionIcon={actionIcon}
        />
      </div>
    </div>
  );
};

export default LeaveApplication;
