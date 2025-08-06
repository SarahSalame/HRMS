import React from "react";

const EmoloyeeCard = ({ avt, name, email, role, basic, personal }) => {
  return (
    <div className="bg-white border border-[#CFCFCF] rounded-[8px] w-full max-w-[350px] shadow-md hover:shadow-lg duration-200 p-[16px] mx-auto">
      {/* القسم العلوي: صورة واسم ووظيفة */}
      <div className="text-center border-b border-[#DADADA] pb-4">
        <img
          src={avt}
          alt={name}
          className="w-[80px] h-[80px] rounded-full mx-auto mb-2 object-cover"
        />
        <p className="text-[18px] font-bold text-[#00465F]">{name}</p>
        <p className="text-[14px] text-[#888888]">{email}</p>
        <p className="text-[13px] bg-[#DAB943] text-white inline-block px-3 py-1 rounded-full mt-2">
          {role}
        </p>
      </div>

      {/* Basic Information */}
      <div className="mt-4">
        <h4 className="text-[14px] font-semibold text-[#61A3BA] mb-2">
          Basic Information{" "}
          <span className="text-[10px] text-[#888]">(Non-Editable)</span>
        </h4>
        <div className="space-y-2">
          {basic?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-[13px] text-[#333]"
            >
              <span>{item.label}</span>
              <span className="border border-[#DADADA] px-2 py-[2px] rounded-md bg-[#FAFAFA] text-[#00465F] text-[12px]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Information */}
      <div className="mt-4">
        <h4 className="text-[14px] font-semibold text-[#61A3BA] flex justify-between items-center">
          Personal Information
          <span className="text-[20px] text-[#DAB943] cursor-pointer">...</span>
        </h4>
        <div className="space-y-2 mt-2">
          {personal?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-[13px] text-[#333]"
            >
              <span>{item.label}</span>
              <span className="text-[#9BA1B2] text-[12px]">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmoloyeeCard;
