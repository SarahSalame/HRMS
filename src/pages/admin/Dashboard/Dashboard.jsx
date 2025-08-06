// import React from "react";
// import StatCard from "../../Components/AdminComps/StatCard";
// import AdminLayout from "../../Components/AdminLayout/AdminLayout";
// import { FaUser, FaClock } from "react-icons/fa";
// const employeeChart = [
//   { name: "Week 1", value: 11111 },
//   { name: "Week 2", value: 1222 },
//   { name: "Week 3", value: 1110 },
//   { name: "Week 4", value: 12220 },
// ];

// const vacationChart = [
//   { name: "Week 1", value: 10 },
//   { name: "Week 2", value: 12 },
//   { name: "Week 3", value: 18 },
//   { name: "Week 4", value: 20 },
// ];
// const Dashboard = () => {
//   const today = new Date();
//   const formattedDate = today.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
//   const fullDateTime = today.toLocaleString("en-US", {
//     dateStyle: "long",
//     timeStyle: "short",
//   });
//   return (
//     <>
//       <AdminLayout>
//         <div className=" flex flex-row gap-[20px]">
//           <div className=" flex flex-col gap-[20px]">
//             <div className=" flex flex-row  w-[658px] h-[136px] gap-[10px] ">
//               <div className=" w-[204px] h-[136px] bg-[#FF515142] rounded-xl p-[10px]">
//                 <h3 className=" text-[18px]">New Employee</h3>
//                 <p className=" text-[16px] pt-[30px] flex items-center justify-between">
//                   30 <FaUser />
//                 </p>
//               </div>
//               <div className=" w-[204px] h-[136px] bg-[#61A3BA5C] rounded-xl p-[10px]">
//                 <h3 className=" text-[18px]">Jop Open</h3>
//                 <p className=" text-[16px] pt-[30px]">10 </p>
//               </div>
//               <div className=" w-[204px] h-[136px] bg-[#FF515142] rounded-xl p-[10px]">
//                 <h3 className=" text-[18px]">Late</h3>
//                 <p className="  text-[16px] pt-[30px] flex items-center justify-between">
//                   42 <FaClock />
//                 </p>
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
//               <StatCard
//                 title="Total Employee"
//                 count="450"
//                 subtext1="250 Men"
//                 subtext2="200 Women"
//                 growth={2}
//                 growthText="Past month"
//                 chartData={employeeChart}
//               />

//               <StatCard
//                 title="Vacation rate"
//                 count="20"
//                 subtext1="12 Men"
//                 subtext2="8 Women"
//                 growth={5}
//                 growthText="Past month"
//                 chartData={vacationChart}
//               />
//             </div>
//             <div className=" w-[640px]  p-[10px] shadow-xl">
//               <div className=" flex items-center justify-between bg-[#FFFFFF] p-[10px]">
//                 <h3 className=" text-[18px]">Advertisements</h3>
//                 <p className=" text-[12px] w-[145px] h-[27px] bg-[#C4C3C3] text-center p-1 text-gray-600 rounded-[8px]">
//                   {formattedDate}
//                 </p>
//               </div>
//               <div className=" flex flex-col gap-[10px]  ">
//                 <div className=" bg-[#e0e0e0] rounded-[8px] p-[10px]">
//                   <h3 className=" text-[16px] font-bold">
//                     Jop Opportunity in the field of graphic design
//                   </h3>
//                   <p className=" text-[#00000080]">5 min ago</p>
//                 </div>
//                 <div className=" bg-[#e0e0e0] rounded-[8px] p-[10px]">
//                   <h3 className=" text-[16px] font-bold">
//                     Jop Opportunity in the field of graphic design
//                   </h3>
//                   <p className=" text-[#00000080]">5 min ago</p>
//                 </div>
//                 <div className=" bg-[#e0e0e0] rounded-[8px] p-[10px]">
//                   <h3 className=" text-[16px] font-bold">
//                     Jop Opportunity in the field of graphic design
//                   </h3>
//                   <p className=" text-[#00000080]">5 min ago</p>
//                 </div>
//               </div>
//               <p className=" text-[#ED9B16] text-center cursor-pointer">
//                 View all ads
//               </p>
//             </div>
//           </div>
//           <div className=" flex flex-col gap-[20px] ">
//             <div className=" w-[427px] h-[274px]  bg-[#61A3BA] rounded-[8px]  ">
//               <h2 className=" text-center bg-[#00465F] text-[20px] text-white p-[10px] rounded-tl-[8px] rounded-tr-[8px] ">
//                 Recent activites
//               </h2>
//               <p className=" p-[10px] text-[#FFFFFF] text-[10px]">
//                 {fullDateTime}
//               </p>
//               <h2 className=" text-[18px] text-white p-[10px]">
//                 Latest job opportunity post
//               </h2>
//               <p className=" text-[14px] text-white p-[10px]">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Exercitationem fuga sunt excepturi hic voluptate recusandae
//               </p>
//               <div className=" text-end p-[10px]">
//                 {" "}
//                 <button className=" p-[10px] bg-[#EED889] rounded-[8px]">
//                   See All Job
//                 </button>
//               </div>
//             </div>
//             <div className=" w-[427px] h-[300px] bg-[#FFFFFF] rounded-[8px] p-[10px] shadow-xl">
//               <div className=" flex items-center justify-between">
//                 <h3 className=" text-[18px]">Next schedule</h3>
//                 <p className=" text-[12px] w-[145px] h-[27px] bg-[#C4C3C3] text-center p-1 text-gray-600 rounded-[8px]">
//                   {formattedDate}
//                 </p>
//               </div>
//               <div className=" flex flex-col gap-[20px]">
//                 <div className=" mt-[10px]">
//                   <p className=" text-[13px]">Priority</p>
//                   <div className=" bg-[#FAFAFA]">
//                     <h4 className=" text-[14px] font-bold rounded-xl">
//                       Check with the receiving legislator
//                     </h4>
//                     <p className=" text-[10px] text-[#0000004D]">
//                       {fullDateTime}
//                     </p>
//                   </div>
//                 </div>
//                 <div className=" mt-[10px]">
//                   <p className=" text-[13px]">Priority</p>
//                   <div className=" bg-[#FAFAFA]">
//                     <h4 className=" text-[14px] font-bold rounded-xl">
//                       Check with the receiving legislator
//                     </h4>
//                     <p className=" text-[10px] text-[#0000004D]">
//                       {fullDateTime}
//                     </p>
//                   </div>
//                 </div>
//                 <div className=" mt-[10px]">
//                   <p className=" text-[13px]">Priority</p>
//                   <div className=" bg-[#FAFAFA]">
//                     <h4 className=" text-[14px] font-bold rounded-xl">
//                       Check with the receiving legislator
//                     </h4>
//                     <p className=" text-[10px] text-[#0000004D]">
//                       {fullDateTime}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </AdminLayout>
//     </>
//   );
// };

// export default Dashboard;
import { Helmet } from "react-helmet-async";
import React from "react";
import StatCard from "../../../Components/AdminComps/StatCard";
import AdminLayout from "../../../Components/AdminLayout/AdminLayout";
import { FaUser, FaClock } from "react-icons/fa";

const employeeChart = [
  { name: "Week 1", value: 11111 },
  { name: "Week 2", value: 1222 },
  { name: "Week 3", value: 1110 },
  { name: "Week 4", value: 12220 },
];

const vacationChart = [
  { name: "Week 1", value: 10 },
  { name: "Week 2", value: 12 },
  { name: "Week 3", value: 18 },
  { name: "Week 4", value: 20 },
];

const Dashboard = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const fullDateTime = today.toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  });

  return (
    <>
      <Helmet>
        <title>Dashboard | HR Dashboard</title>
        <meta
          name="description"
          content="Overview of employee performance, events, and updates."
        />
      </Helmet>

      <AdminLayout>
        <div className="min-h-screen flex flex-col lg:flex-row gap-6 p-4">
          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#FF515142] rounded-xl p-4">
                <h3 className="text-lg">New Employee</h3>
                <p className="text-md pt-6 flex items-center justify-between">
                  30 <FaUser />
                </p>
              </div>
              <div className="bg-[#61A3BA5C] rounded-xl p-4">
                <h3 className="text-lg">Job Open</h3>
                <p className="text-md pt-6">10</p>
              </div>
              <div className="bg-[#FF515142] rounded-xl p-4">
                <h3 className="text-lg">Late</h3>
                <p className="text-md pt-6 flex items-center justify-between">
                  42 <FaClock />
                </p>
              </div>
            </div>

            {/* Stat Chart Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatCard
                title="Total Employee"
                count="450"
                subtext1="250 Men"
                subtext2="200 Women"
                growth={2}
                growthText="Past month"
                chartData={employeeChart}
              />
              <StatCard
                title="Vacation rate"
                count="20"
                subtext1="12 Men"
                subtext2="8 Women"
                growth={5}
                growthText="Past month"
                chartData={vacationChart}
              />
            </div>

            {/* Ads Section */}
            <div className="bg-white p-4 shadow-xl rounded-xl">
              <div className="flex justify-between items-center">
                <h3 className="text-lg">Advertisements</h3>
                <p className="text-xs bg-gray-300 px-3 py-1 rounded text-gray-700">
                  {formattedDate}
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="bg-[#e0e0e0] rounded-lg p-4">
                    <h3 className="text-md font-bold">
                      Job Opportunity in the field of graphic design
                    </h3>
                    <p className="text-gray-600 text-sm">5 min ago</p>
                  </div>
                ))}
              </div>
              <p className="text-[#ED9B16] text-center mt-4 cursor-pointer">
                View all ads
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[400px] flex-shrink-0 flex flex-col gap-6">
            <div className="bg-[#61A3BA] rounded-xl">
              <h2 className="bg-[#00465F] text-white text-center text-lg p-3 rounded-t-xl">
                Recent Activities
              </h2>
              <div className="p-4 text-white">
                <p className="text-xs mb-2">{fullDateTime}</p>
                <h2 className="text-md font-semibold mb-1">
                  Latest job opportunity post
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem fuga sunt excepturi hic voluptate recusandae
                </p>
                <div className="text-right mt-4">
                  <button className="bg-[#EED889] px-4 py-2 rounded">
                    See All Job
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 shadow-xl rounded-xl">
              <div className="flex justify-between items-center">
                <h3 className="text-lg">Next Schedule</h3>
                <p className="text-xs bg-gray-300 px-3 py-1 rounded text-gray-700">
                  {formattedDate}
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium">Priority</p>
                    <div className="bg-[#FAFAFA] rounded p-3">
                      <h4 className="font-semibold text-sm">
                        Check with the receiving legislator
                      </h4>
                      <p className="text-xs text-gray-400">{fullDateTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Dashboard;
