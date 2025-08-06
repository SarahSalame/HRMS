import meetingsData from "../../../data/admin/meetingsData";

const MeetingsList = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#029fae] text-base font-semibold">Meetings</h2>
        <button className="bg-gray-100 hover:bg-gray-200 text-sm px-3 py-1 rounded-full">
          Create new
        </button>
      </div>

      {/* Meetings List */}
      <ul className="space-y-4">
        {meetingsData.map((meeting, index) => (
          <li key={index} className="flex items-center justify-between">
            {/* Date */}
            <div className="bg-yellow-100 text-yellow-700 text-xs font-bold w-10 h-10 flex flex-col items-center justify-center rounded-md">
              <span>{meeting.day}</span>
              <span className="text-sm">{meeting.date}</span>
            </div>

            {/* Info */}
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-semibold text-gray-800">
                {meeting.title}
              </h3>
              <p className="text-xs text-gray-500">{meeting.time}</p>
            </div>

            {/* Options */}
            <div className="text-gray-400 hover:text-gray-600 text-lg cursor-pointer">
              &#x22EE;
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingsList;
