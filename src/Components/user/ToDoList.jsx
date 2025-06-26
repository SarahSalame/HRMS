import { mockTodos } from "../../data/mockTodos";
import { MoreVertical } from "lucide-react";

const ToDoList = () => {
  return (
    <div
      className="bg-white px-6 pt-4 pb-[82px] rounded-[10px] w-full md:w-[630px] md:h-[446px] overflow-auto"
      style={{ boxShadow: "0px 4px 8px #0000001A" }}
    >
      {/* العنوان + أيقونة */}
      <div className="flex items-center justify-between mb-6">
        <h3
          className="font-nunito font-semibold text-[30px] leading-[100%] tracking-[0]"
        >
          To-dos
        </h3>
        <MoreVertical className="w-6 h-6 text-gray-700 cursor-pointer" />
      </div>

      {/* القائمة */}
      <ul className="space-y-3">
        {mockTodos.map((task, index) => (
          <li
            key={index}
            className="bg-[#DDEBF0] h-[50px] px-4 flex items-center justify-between rounded-md border border-[#c6d9de] text-sm"
          >
            <span className="font-nunito text-gray-800">{task}</span>

            {/* سهم صغير */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
