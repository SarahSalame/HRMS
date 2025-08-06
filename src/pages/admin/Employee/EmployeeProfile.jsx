import { Helmet } from "react-helmet-async";
import AdminLayout from "../../../Components/AdminLayout/AdminLayout";
import EmployeeCard from "../../../Components/AdminComps/EmployeeProfile/EmployeeCard";
import HotNewsCard from "../../../Components/AdminComps/EmployeeProfile/HotNewsCard";
import PerformanceCard from "../../../Components/AdminComps/EmployeeProfile/PerformanceCard";
import EmployeeCalendar from "../../../Components/AdminComps/EmployeeProfile/EmployeeCalendar";
import MeetingsList from "../../../Components/AdminComps/EmployeeProfile/MeetingsList";
import { employeeProfileData } from "../../../data/admin/employeeProfileData";
import { performanceData } from "../../../data/admin/performanceData";

const EmployeeProfile = () => {
  return (
    <>
      <Helmet>
        <title>Employee Profile | HR Dashboard</title>
        <meta
          name="description"
          content="View and manage employee profile details."
        />
      </Helmet>

      <AdminLayout>
        <div className="p-4 md:p-6">
          <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6 items-start">
            <div className="w-full">
              <EmployeeCard
                avt={employeeProfileData.avatar}
                name={employeeProfileData.name}
                email={employeeProfileData.email}
                role={employeeProfileData.role}
                basic={employeeProfileData.basicInfo}
                personal={employeeProfileData.personalInfo}
              />
            </div>

            <div className="w-full flex flex-col space-y-6">
              <HotNewsCard news={employeeProfileData.hotNews} />
              <PerformanceCard data={performanceData} />
            </div>

            <div className="w-full flex flex-col space-y-6">
              <div className="flex justify-center xl:justify-start">
                <EmployeeCalendar />
              </div>
              <MeetingsList meetings={employeeProfileData.meetings} />
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default EmployeeProfile;
