import { Upload } from "lucide-react";

const DocumentUpload = () => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
  };

  return (
    <div className="bg-[#FFFDF6] p-6 rounded-xl border border-[#E5E5E5] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Download CV
            </label>
            <label className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-[#D9D9D9] rounded-md h-40 text-center px-4 relative group">
              <input
                type="file"
                accept=".jpeg,.jpg,.pdf"
                className="hidden"
                onChange={handleFileChange}
              />

              <div className="bg-[#61A3BA] p-3 rounded-2xl mb-2">
                <Upload className="text-[#fff] w-5 h-5" />
              </div>

              <p className="text-sm text-gray-600">
                Drag & Drop or{" "}
                <span className="text-[#029fae] underline">choose file</span> to
                upload
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Supported formats: jpeg, pdf
              </p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentUpload;
