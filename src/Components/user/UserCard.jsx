import { mockProfile } from "../../data/mockProfile";

const UserCard = () => {
  return (
    <div className="w-full mx-auto bg-gradient-to-r from-[#61A3BA] to-[#D3CEC7] rounded-[10px] p-6 flex flex-col md:flex-row items-center md:justify-between relative overflow-hidden">
      {/* يسار: الصورة والمعلومات */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[30px]">
        <img
          src={mockProfile.image}
          alt="User"
          className="w-[100px] h-[100px] md:w-[145px] md:h-[145px] rounded-full object-cover border-4 border-white"
        />

        <div className="text-center md:text-left">
          <h2 className="text-white text-[20px] md:text-[28px] font-bold font-nunito leading-tight">
            {mockProfile.name}
          </h2>
          <p className="text-white text-[14px] md:text-[18px] leading-tight">
            {mockProfile.jobTitle}
          </p>
        </div>
      </div>

      {/* يمين: الزر والسهم */}
      <div className="relative mt-6 md:mt-0 flex flex-col md:flex-row items-center justify-end w-full md:w-auto pr-[70px]">
        <div className="text-center md:text-right">
          <button className="bg-[#FFC727] text-white text-[16px] md:text-[20px] px-6 py-2 rounded-[17px] font-medium font-nunito shadow">
            Edit Profile
          </button>
        </div>

        {/* السهم */}
        <img
          src="/src/assets/imgs/arrow.png"
          alt="arrow"
          className="hidden md:block absolute -top-[90px] right-[-39px] w-[257px] h-[192px] opacity-50 rotate-[-18deg] pointer-events-none"
        />
      </div>
    </div>
  );
};

export default UserCard;
