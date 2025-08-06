import { performanceData } from "../../../data/admin/performanceData";
import checkin from "../../../assets/icons/check-in.svg";
import checkout from "../../../assets/icons/check-out.svg";
import timer from "../../../assets/icons/timer.svg";

const PerformanceCard = () => {
  const { lastUpdate, general, behavior } = performanceData;

  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-md border border-[#CFCFCF]">
      {/* Title */}
      <h2 className="text-lg font-bold text-[#111827]">
        Attendance Performance This Month
      </h2>
      <p className="text-sm text-gray-400 mb-4">Last Update {lastUpdate}</p>
      {/* General description */}
      <h3 className="text-[#61A3BA] text-sm font-semibold mb-2">
        General description
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {general.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: item.color, opacity: 0.2 }}
              />
              <svg
                viewBox="0 0 48 48"
                className="w-full h-full rotate-[-90deg]"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#E5E7EB"
                  strokeWidth="5"
                  fill="none"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke={item.color}
                  strokeWidth="5"
                  strokeDasharray={2 * Math.PI * 20}
                  strokeDashoffset={(1 - item.percent / 100) * 2 * Math.PI * 20}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              ٍ
            </div>

            <div>
              <p className="text-sm font-bold text-[#111827]">{item.value}</p>
              <p className="text-xs text-[#6B7280]">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Behaviour Analysis */}
      <h3 className="text-[#61A3BA] text-sm font-semibold mb-2">
        Behaviour Analysis
      </h3>
      <div className="bg-[#F8F8F8] rounded-xl px-4 py-3 flex flex-col gap-3 text-sm text-[#111827]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#E8F0F7] rounded-md flex items-center justify-center">
            <img src={checkin} alt="Check-in" className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">{behavior.checkIn}</p>
            <p className="text-[13px] text-[#111827]">Average check-in time</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#F6E1E0] rounded-md flex items-center justify-center">
            <img src={checkout} alt="Check-out" className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">{behavior.checkOut}</p>
            <p className="text-[13px] text-[#111827]">Average check-out time</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#F0E9F7] rounded-md flex items-center justify-center">
            <img src={timer} alt="Timer" className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">{behavior.avgDuration}</p>
            <p className="text-[13px] text-[#111827]">
              Average working duration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
