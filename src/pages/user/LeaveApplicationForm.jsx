import React, { useRef } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { BookOpen, CalendarDays, ChevronsUpDown } from "lucide-react";

const LeaveApplicationForm = () => {
  const dateInputRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#FFFAEA]">
      <Navbar />
      <div className="max-w-[700px] mx-auto bg-white p-10 mt-12 rounded-md shadow-md">
        {/* العنوان */}
        <div className="mb-10 text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <BookOpen size={32} fill="#DAB943" stroke="#DAB943" />
            <h2 className="text-[28px] font-bold text-[#00465F] font-nunito">
              Leave Application
            </h2>
          </div>
          <p className="text-[22px] text-[#00465F] font-nunito">
            Type of leave
          </p>
        </div>

        {/* النموذج */}
        <form className="space-y-6">
          <div>
            <label className="block text-[#00465F] mb-1 font-semibold">
              Leave Type
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#00465F] mb-1 font-semibold">
                Start Date
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
            </div>

            <div>
              <label className="block text-[#00465F] mb-1 font-semibold">
                End Date
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#00465F] mb-1 font-semibold">
                Duration
              </label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded px-3 py-2 appearance-none">
                  <option>30</option>
                  <option>25</option>
                  <option>20</option>
                  <option>15</option>
                  <option>10</option>
                  <option>5</option>
                </select>
                <ChevronsUpDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={24}
                />
              </div>
            </div>

            <div>
              <label className="block text-[#00465F] mb-1 font-semibold">
                Resumption Date
              </label>
              <div className="relative">
                <input
                  ref={dateInputRef}
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2 pr-10 appearance-none [&::-webkit-calendar-picker-indicator]:hidden "
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                  onClick={() => dateInputRef.current?.showPicker()}
                >
                  <CalendarDays size={24} className="text-[#9C9C9C]" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[#00465F] mb-1 font-semibold">
              Reason for leave
            </label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
              rows="3"
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#DAB943] text-white w-full py-3 rounded-md text-[18px] font-bold font-nunito"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveApplicationForm;
