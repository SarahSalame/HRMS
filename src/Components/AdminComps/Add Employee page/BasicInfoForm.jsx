import { useState, useRef, useEffect } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";

// DropdownInput component
const DropdownInput = ({ placeholder, options, value, setValue }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        type="text"
        readOnly
        value={value}
        placeholder={placeholder}
        className="input-style h-[48px] cursor-default text-black/90 placeholder:text-black/50"
        onClick={() => setOpen(!open)}
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <ChevronDown size={20} className="text-black" />
      </div>
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-[#cfcfcf] rounded-[12px] shadow-sm max-h-48 overflow-auto">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setValue(option);
                setOpen(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm text-black"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// DateInput component
const DateInput = ({ value, setValue }) => {
  const hiddenInputRef = useRef(null);

  const handleIconClick = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.showPicker();
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        readOnly
        placeholder="Hire Data"
        className="input-style h-[48px] w-full text-black/90 placeholder:text-black/50 cursor-default"
        onClick={handleIconClick}
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
        onClick={handleIconClick}
      >
        <CalendarDays size={20} className="text-black" />
      </div>
      <input
        type="date"
        ref={hiddenInputRef}
        className="hidden"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const BasicInfoForm = () => {
  const [birthDate, setBirthDate] = useState("");

  const [status, setStatus] = useState("");

  return (
    <div className="min-h-screen bg-[#FFFDF6] pt-7">
      <div className="max-w-[850px] mx-auto bg-white p-10 mt-12 rounded-md shadow-md">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <input
            type="text"
            placeholder="Employee id"
            className="input-style h-[48px]"
          />
          <input
            type="text"
            placeholder="User Name"
            className="input-style h-[48px]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="input-style h-[48px]"
          />
          <DropdownInput
            placeholder="Select Department"
            value={status}
            setValue={setStatus}
            options={[
              "Front End Developer",
              "Back End Developer",
              "UI UX Designer",
            ]}
          />
          <DateInput value={birthDate} setValue={setBirthDate} />
          <input
            type="text"
            placeholder="Worked For"
            className="input-style h-[48px]"
          />
        </form>
      </div>
    </div>
  );
};

export default BasicInfoForm;
