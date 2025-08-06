import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const StatCard = ({
  title,
  count,
  subtext1,
  subtext2,
  growth,
  growthText,
  chartData,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex justify-between items-start w-full max-w-xs">
      <div>
        <h3 className="text-sm text-gray-600 mb-1">{title}</h3>
        <p className="text-3xl font-bold text-blue-900">{count}</p>
        <p className="text-xs text-gray-500">{subtext1}</p>
        <p className="text-xs text-gray-500">{subtext2}</p>
      </div>

      <div className="flex flex-col items-end w-24">
        <ResponsiveContainer width="100%" height={40}>
          <LineChart data={chartData}>
            <Tooltip contentStyle={{ fontSize: "10px" }} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <span className="text-red-500 text-xs font-semibold">+{growth}% ↑</span>
        <span className="text-xs mt-1 bg-yellow-300/80 text-gray-800 px-2 py-0.5 rounded">
          +{growth}% {growthText}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
