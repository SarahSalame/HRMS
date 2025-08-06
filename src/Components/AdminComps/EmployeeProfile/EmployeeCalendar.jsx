import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const upcomingEvents = [
  {
    id: 1,
    title: "Typography in UX/UI",
    category: "Design",
    time: "10:00 am",
    icon: "/icons/pencil.png",
    bgColor: "bg-yellow-200",
  },
  {
    id: 2,
    title: "Figma UI UX Design",
    category: "Design",
    time: "10:00 am",
    icon: "/icons/figma.png",
    bgColor: "bg-pink-200",
  },
];

const EventCard = ({ icon, title, category, time, bgColor }) => (
  <div className="flex items-center justify-between p-3 bg-[#f2f7ff] rounded-xl w-full">
    <div
      className={`w-10 h-10 flex items-center justify-center rounded-xl ${bgColor}`}
    >
      <img src={icon} alt="icon" className="w-5 h-5" />
    </div>
    <div className="flex-1 ml-3">
      <h3 className="text-xs font-semibold text-gray-800">{title}</h3>
      <p className="text-xs text-gray-500">
        {category} • {time}
      </p>
    </div>
  </div>
);

const EmployeeCalendar = () => {
  const [dateRange, setDateRange] = useState([]);
  const [hoverDate, setHoverDate] = useState(null);

  const isInRange = (date) => {
    if (dateRange.length === 2) {
      const [start, end] = dateRange;
      return date > start && date < end;
    } else if (dateRange.length === 1 && hoverDate) {
      const [start] = dateRange;
      return (
        (date > start && date < hoverDate) || (date > hoverDate && date < start)
      );
    }
    return false;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 w-[313px]">
      <Calendar
        selectRange={true}
        onChange={setDateRange}
        value={dateRange}
        tileClassName={({ date }) => {
          const isSelected =
            dateRange.length === 2 &&
            (date.getTime() === dateRange[0].getTime() ||
              date.getTime() === dateRange[1].getTime());
          if (isSelected) return "highlighted-day";
          if (isInRange(date)) return "in-range";
          return "";
        }}
        onMouseOver={({ target }) => {
          const day = target.getAttribute("aria-label");
          if (day) setHoverDate(new Date(day));
        }}
        onMouseLeave={() => setHoverDate(null)}
        locale="en-GB"
        prevLabel="‹"
        nextLabel="›"
        calendarType="gregory"
        formatMonthYear={(locale, date) =>
          date.toLocaleString("default", { month: "long" })
        }
      />

      {/* Events */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Upcoming Events
        </h3>
        <div className="space-y-2">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCalendar;
