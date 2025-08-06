import React, { useState, useRef, useEffect } from "react";
import { CalendarDays, Camera, ChevronDown } from "lucide-react";

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
        placeholder="Date of Birth"
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

const PersonalInfoForm = () => {
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF6]">
      <div className="max-w-[850px] mx-auto bg-white p-10 mt-12 rounded-md shadow-md">
        <form className="space-y-4">
          <div className="flex justify-start mb-4">
            <label
              htmlFor="profilePhoto"
              className="cursor-pointer w-20 h-20 rounded-full bg-white border border-gray-300 flex items-center justify-center overflow-hidden"
            >
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-gray-500 text-xl">
                  <Camera />
                </span>
              )}
              <input
                type="file"
                id="profilePhoto"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="input-style h-[48px]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input-style h-[48px]"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="input-style h-[48px]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input-style h-[48px]"
            />

            <DateInput value={birthDate} setValue={setBirthDate} />

            <DropdownInput
              placeholder="Gender"
              value={gender}
              setValue={setGender}
              options={["Male", "Female"]}
            />

            <DropdownInput
              placeholder="Marital Status"
              value={status}
              setValue={setStatus}
              options={["Single", "Married", "Divorced"]}
            />

            <input
              type="text"
              placeholder="Religion"
              className="input-style h-[48px]"
            />
            <input
              type="text"
              placeholder="Address"
              className="input-style md:col-span-2 h-[48px]"
            />
            <input
              type="text"
              placeholder="City"
              className="input-style h-[48px]"
            />
            <input
              type="text"
              placeholder="ID Number"
              className="input-style h-[48px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
