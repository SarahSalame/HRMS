// import React, { useState } from "react";
// import AdminLayout from "../../Components/AdminLayout/AdminLayout";
// import { FaBookOpen, FaCheckCircle } from "react-icons/fa";
// const leaveSettings = Array(10).fill({
//   setting: "Maternity",
//   days: 60,
//   recall: "No",
// });
// function Vacations() {
//   const [active, setActive] = useState("setting");

//   const baseClass =
//     "w-[247px] bg-[#B89410]  text-white text-center p-[20px] rounded-[12px] transition duration-200";

//   const getButtonClass = (key) => {
//     return `${baseClass} ${
//       active === key ? "bg-blue-300 font-semibold" : "bg-[#B89410]"
//     }`;
//   };
//   return (
//     <AdminLayout>
//       <div>
//         <h1 className=" flex items-center text-[25px]">
//           <span className=" mr-[20px]">
//             <FaBookOpen size={24} className=" text-[#DAB943]" />
//           </span>{" "}
//           Leave Mangement
//         </h1>
//         <div className=" flex md:flex-row flex-col items-center justify-center gap-[20px] mt-[50px]">
//           <button
//             onClick={() => setActive("setting")}
//             className={getButtonClass("setting")}
//           >
//             Leave Setting
//           </button>
//           <button
//             onClick={() => setActive("recall")}
//             className={getButtonClass("recall")}
//           >
//             Leave Recall
//           </button>
//           <button
//             onClick={() => setActive("history")}
//             className={getButtonClass("history")}
//           >
//             Leave History
//           </button>
//         </div>
//         <div>
//           {active == "setting" && (
//             <div className=" flex gap-[30px] mt-[30px] md:flex-row flex-col ">
//               <div className=" md:w-[546px] w-[380px]  p-[10px] border-2 border-gray-400 rounded-[10px] ">
//                 {" "}
//                 <h2 className=" text-[24px]">Create Leave Setting</h2>
//                 <form className=" ">
//                   <div className=" flex items-center justify-between mt-[20px]">
//                     <input
//                       placeholder="Name"
//                       type="text"
//                       className=" bg-[#e4e4e4] border border-gray-400 rounded-[4px] outline-none md:w-[200px] w-[150px] p-[10px]"
//                     />
//                     <input
//                       placeholder="Number of days"
//                       type="number"
//                       className=" bg-[#e4e4e4] border border-gray-400 rounded-[4px] outline-none md:w-[200px] w-[150px] p-[10px]"
//                     />
//                   </div>
//                   <div className=" mt-[20px]">
//                     <label for="leave">
//                       Do you want to activate leaving the Recall for this
//                       employee?
//                     </label>
//                     <input
//                       type="text"
//                       id="leave"
//                       className=" outline-none md:w-[496px] w-[360px] p-[10px] bg-[#e4e4e4] border border-gray-400 rounded-[4px]"
//                     />
//                   </div>
//                   <div className=" mt-[20px] flex items-center justify-between">
//                     <div className="flex flex-col mb-4">
//                       {" "}
//                       <label for="reward" className=" text-[14px]">
//                         Would you like to give rewards?
//                       </label>
//                       <input
//                         id="reward"
//                         type="text"
//                         className=" bg-[#e4e4e4] border border-gray-400 rounded-[4px] outline-none md:w-[200px] w-[150px] p-[10px]"
//                       />
//                     </div>
//                     <div className="flex flex-col mb-4">
//                       {" "}
//                       <label for="bounus" className=" text-[14px]">
//                         How much percentage of leave bounus?
//                       </label>
//                       <input
//                         id="bounus"
//                         type="number"
//                         className=" bg-[#e4e4e4] border border-gray-400 rounded-[4px] outline-none md:w-[200px] w-[150px] p-[10px]"
//                       />
//                     </div>
//                   </div>
//                   <div className=" mt-[20px] flex flex-col mb-4 ">
//                     <label for="leave">
//                       Do you want to activate leaving the Recall for this
//                       employee?
//                     </label>
//                     <select className=" outline-none bg-[#e4e4e4] border border-gray-400 rounded-[4px]  md:w-[496px] w-[360px] p-[10px]">
//                       <option>ss</option>
//                       <option>ss</option>
//                       <option>tt</option>
//                       <option>ttss</option>
//                     </select>
//                   </div>
//                   <div className=" mt-[20px]">
//                     <label for="leave">Reason for leave</label>
//                     <textarea
//                       type="text"
//                       id="leave"
//                       className=" outline-none md:w-[496px] w-[360px] p-[10px] bg-[#e4e4e4] border border-gray-400 rounded-[4px]"
//                     />
//                   </div>
//                   <div className=" flex justify-center items-center">
//                     {" "}
//                     <button
//                       type="submit"
//                       className=" w-[294px] bg-[#61A3BA] p-[10px] text-center text-white rounded-[13px] mt-[10px]"
//                     >
//                       Create
//                     </button>
//                   </div>
//                 </form>
//               </div>
//               <div className="bg-white p-[10px] border-2 border-gray-400 rounded-[10px] shadow-md md:w-[546px] w-[380px] h-[615px]">
//                 <h2 className=" text-[24px] mb-[10px]">
//                   Manage Leave Settings
//                 </h2>

//                 <div className=" border-none  rounded-md border">
//                   <table className="w-full text-left border-collapse">
//                     <thead>
//                       <tr className="bg-[#4C9FB1] text-white text-[14px] font-normal">
//                         <th className="py-2 px-4">Leave setting</th>
//                         <th className="py-2 px-4">Days</th>
//                         <th className="py-2 px-4">Recall</th>
//                         <th className="py-2 px-4">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {leaveSettings.map((item, index) => (
//                         <tr
//                           key={index}
//                           className="text-[14px] border-b hover:bg-gray-50"
//                         >
//                           <td className="py-2 px-4">{item.setting}</td>
//                           <td className="py-2 px-4">{item.days}</td>
//                           <td className="py-2 px-4">{item.recall}</td>
//                           <td className="py-2 px-4 text-blue-600 cursor-pointer flex items-center gap-1">
//                             Action{" "}
//                             <FaCheckCircle className="text-yellow-500 text-[14px]" />
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//         <div>{active == "recall" && <div>recall</div>}</div>
//         <div>{active == "history" && <div>history</div>}</div>
//       </div>
//     </AdminLayout>
//   );
// }

// export default Vacations;
import React, { useState } from "react";
import AdminLayout from "../../../Components/AdminLayout/AdminLayout";
import { FaBookOpen, FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const leaveSettings = Array(10).fill({
  setting: "Maternity",
  days: 60,
  recall: "No",
});
const leaveRecall = Array(10).fill({
  name: "John d",
  duration: 60,
  startDate: 2 / 10 / 2024,
  endDate: 28 / 10 / 2024,
  type: "casual",
  Reason: "Personal",
  Action: "Recall",
});

function Vacations() {
  const [active, setActive] = useState("setting");

  const baseClass =
    "w-full md:w-[247px] bg-[#B89410] text-white text-center py-3 rounded-[12px] transition duration-200";

  const getButtonClass = (key) => {
    return `md:text-[16px] ${baseClass} ${
      active === key ? "bg-blue-300 font-semibold" : "bg-[#B89410]"
    }`;
  };

  return (
    <>
      <Helmet>
        <title>Leave Management | HR Dashboard</title>
        <meta
          name="description"
          content="Manage leave settings, recalls, and history for employees in the HR dashboard."
        />
      </Helmet>

      <AdminLayout>
        <div className="px-4 py-6 overflow-x-hidden">
          <h1 className="flex items-center text-[25px] mb-6">
            <span className="mr-[20px]">
              <FaBookOpen size={24} className="text-[#DAB943]" />
            </span>
            Leave Management
          </h1>

          <div
            className={`flex flex-col md:flex-row items-center justify-center gap-[20px] mb-10 ${
              active === "setting" ? "max-w-[92%]" : "max-w-[100%]"
            } `}
          >
            <button
              onClick={() => setActive("setting")}
              className={getButtonClass("setting")}
            >
              Leave Setting
            </button>
            <button
              onClick={() => setActive("recall")}
              className={getButtonClass("recall")}
            >
              Leave Recall
            </button>
            <button
              onClick={() => setActive("history")}
              className={getButtonClass("history")}
            >
              Leave History
            </button>
          </div>

          {active === "setting" && (
            <div className="block">
              {" "}
              <div className="flex flex-col lg:flex-row gap-[10px] justify-center  md:w-full  ">
                <div className="w-full   p-[10px] border-2 border-gray-400 rounded-[10px]">
                  <h2 className="text-[24px] mb-4">Create Leave Setting</h2>
                  <form className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                      <input
                        placeholder="Name"
                        type="text"
                        className="bg-[#e4e4e4] border border-gray-400 rounded-[4px] outline-none w-full sm:w-[48%] p-[10px]"
                      />
                      <input
                        placeholder="Number of days"
                        type="number"
                        className="bg-[#e4e4e4] border border-gray-400 rounded-[4px] outline-none w-full sm:w-[48%] p-[10px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="leave">
                        Do you want to activate leaving the Recall for this
                        employee?
                      </label>
                      <input
                        type="text"
                        id="leave"
                        className="outline-none w-full p-[10px] bg-[#e4e4e4] border border-gray-400 rounded-[4px] mt-1"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div className="flex flex-col w-full sm:w-[48%]">
                        <label htmlFor="reward" className="text-[14px]">
                          Would you like to give rewards?
                        </label>
                        <input
                          id="reward"
                          type="text"
                          className="bg-[#e4e4e4] border border-gray-400 rounded-[4px] outline-none p-[10px]"
                        />
                      </div>

                      <div className="flex flex-col w-full sm:w-[48%]">
                        <label htmlFor="bounus" className="text-[14px]">
                          How much percentage of leave bounus?
                        </label>
                        <input
                          id="bounus"
                          type="number"
                          className="bg-[#e4e4e4] border border-gray-400 rounded-[4px] outline-none p-[10px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="recall-select">
                        Do you want to activate leaving the Recall for this
                        employee?
                      </label>
                      <select
                        id="recall-select"
                        className="outline-none bg-[#e4e4e4] border border-gray-400 rounded-[4px] w-full p-[10px] mt-1"
                      >
                        <option>ss</option>
                        <option>ss</option>
                        <option>tt</option>
                        <option>ttss</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="reason">Reason for leave</label>
                      <textarea
                        id="reason"
                        className="outline-none w-full p-[10px] bg-[#e4e4e4] border border-gray-400 rounded-[4px] mt-1"
                      ></textarea>
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="w-[294px] bg-[#61A3BA] p-[10px] text-center text-white rounded-[13px] mt-[10px]"
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>

                <div className="bg-white p-[10px] border-2 border-gray-400 rounded-[10px] shadow-md w-full  max-h-[615px] ">
                  <h2 className="text-[24px] mb-[10px]">
                    Manage Leave Settings
                  </h2>
                  <div className="rounded-md border overflow-x-auto">
                    <table className="min-w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#4C9FB1] text-white text-[14px] font-normal">
                          <th className="py-2 px-4">Leave setting</th>
                          <th className="py-2 px-4">Days</th>
                          <th className="py-2 px-4">Recall</th>
                          <th className="py-2 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaveSettings.map((item, index) => (
                          <tr
                            key={index}
                            className="text-[14px] border-b hover:bg-gray-50"
                          >
                            <td className="py-2 px-4">{item.setting}</td>
                            <td className="py-2 px-4">{item.days}</td>
                            <td className="py-2 px-4">{item.recall}</td>
                            <td className="py-2 px-4 text-blue-600 cursor-pointer flex items-center gap-1">
                              Action{" "}
                              <FaCheckCircle className="text-yellow-500 text-[14px]" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === "recall" && (
            // <div className="mt-6">
            //   {" "}
            //   <table className="min-w-full text-left border-collapse">
            //     <thead>
            //       <tr className="bg-[#4C9FB1] text-white text-[14px] font-normal">
            //         <th className="py-2 px-4">Name</th>
            //         <th className="py-2 px-4">Duration</th>
            //         <th className="py-2 px-4">Start Date</th>
            //         <th className="py-2 px-4">End Date</th>
            //         <th className="py-2 px-4">Type</th>
            //         <th className="py-2 px-4">Reason</th>
            //         <th className="py-2 px-4">Action</th>
            //       </tr>
            //     </thead>
            //     <tbody>
            //       {leaveRecall.map((item, index) => (
            //         <tr
            //           key={index}
            //           className="text-[14px] border-b hover:bg-gray-50"
            //         >
            //           <td className="py-2 px-4">{item.name}</td>
            //           <td className="py-2 px-4">{item.duration}</td>
            //           <td className="py-2 px-4">{item.startDate}</td>
            //           <td className="py-2 px-4">{item.endDate}</td>
            //           <td className="py-2 px-4">{item.type}</td>
            //           <td className="py-2 px-4">{item.Reason}</td>

            //           <td className="py-2 px-4 text-blue-600 cursor-pointer flex items-center gap-1">
            //             Action{" "}
            //             <FaCheckCircle className="text-yellow-500 text-[14px]" />
            //           </td>
            //         </tr>
            //       ))}
            //     </tbody>
            //   </table>
            // </div>

            <div className="mt-6">
              {/* Table for medium and larger screens */}
              <div className="hidden md:block">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#4C9FB1] text-white text-[14px] font-normal">
                      <th className="py-2 px-4">Name</th>
                      <th className="py-2 px-4">Duration</th>
                      <th className="py-2 px-4">Start Date</th>
                      <th className="py-2 px-4">End Date</th>
                      <th className="py-2 px-4">Type</th>
                      <th className="py-2 px-4">Reason</th>
                      <th className="py-2 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveRecall.map((item, index) => (
                      <tr
                        key={index}
                        className="text-[14px] border-b hover:bg-gray-50"
                      >
                        <td className="py-2 px-4">{item.name}</td>
                        <td className="py-2 px-4">{item.duration}</td>
                        <td className="py-2 px-4">{item.startDate}</td>
                        <td className="py-2 px-4">{item.endDate}</td>
                        <td className="py-2 px-4">{item.type}</td>
                        <td className="py-2 px-4">{item.Reason}</td>
                        <td className="py-2 px-4 text-blue-600 cursor-pointer flex items-center gap-1">
                          Action{" "}
                          <FaCheckCircle className="text-yellow-500 text-[14px]" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cards for small screens */}
              <div className="block md:hidden space-y-4">
                {leaveRecall.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow p-4 border"
                  >
                    <p className="text-sm">
                      <span className="font-semibold">Name: </span> {item.name}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Duration: </span>{" "}
                      {item.duration}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Start Date: </span>{" "}
                      {item.startDate}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">End Date: </span>{" "}
                      {item.endDate}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Type: </span> {item.type}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Reason: </span>{" "}
                      {item.Reason}
                    </p>
                    <p className="text-sm text-blue-600 flex items-center gap-1 mt-2 cursor-pointer">
                      Action{" "}
                      <FaCheckCircle className="text-yellow-500 text-[14px]" />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {active === "history" && <div className="mt-6">history</div>}
        </div>
      </AdminLayout>
    </>
  );
}

export default Vacations;
