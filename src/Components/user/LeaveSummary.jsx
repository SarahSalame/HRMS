import { mockLeaveData } from "../../data/mockLeaveData";
import { MoreVertical } from "lucide-react";

const LeaveSummary = () => {
  return (
    <div
      className="bg-white px-6 pt-4 pb-6 rounded-[10px] w-full md:w-[630px] md:h-auto space-y-6"
      style={{ boxShadow: "0px 4px 8px #0000001A" }}
    >
      {/* العنوان + أيقونة */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-nunito font-semibold text-[30px] leading-[100%]">
          Available Leave Days
        </h3>
        <MoreVertical className="w-6 h-6 text-gray-700" />
      </div>

      {/* الشرائط */}
      <div className="space-y-4">
        {Object.entries(mockLeaveData).map(([type, { used, total }]) => {
          const percentage = Math.round((used / total) * 100);
          return (
            <div key={type} className="space-y-2">
              {/* السطر: اسم الإجازة + العدد */}
              <div className="flex justify-between items-center">
                <span className="capitalize font-nunito text-gray-800 text-sm">
                  {type.replace(/([A-Z])/g, " $1")}
                </span>
                <span className="font-nunito text-gray-600 text-sm">
                  {used} of {total} day{total > 1 ? "s" : ""}
                </span>
              </div>

              {/* الشريط */}
              <div className="w-full bg-[#EDF5F5] rounded-[10px] h-[29px] overflow-hidden">
                <div
                  className="bg-[#327373] h-full rounded-[10px]"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaveSummary;
