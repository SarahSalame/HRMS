import { mockStats } from "../../data/mockStats";

const MonthlyStatistics = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-[#545559]">
        Monthly statistics
      </h3>

      <div className="space-y-[13px]">
        {/* Header Row */}
        <div className="flex bg-[#DDEBF0] text-[#545559] font-medium px-4 py-3 rounded">
          <div className="w-1/4">Profits</div>
          <div className="w-1/4">Amount</div>
          <div className="w-1/4">Discounts</div>
          <div className="w-1/4">Total</div>
        </div>

        {/* Data Rows */}
        {mockStats.map((item, index) => (
          <div
            key={index}
            className="flex bg-[#DDEBF0] text-[#545559] px-4 py-3 rounded"
          >
            <div className="w-1/4">{item.label}</div>
            <div className="w-1/4">{formatNumber(item.amount)}</div>
            <div className="w-1/4">{formatNumber(item.discount)}</div>
            <div className="w-1/4">{formatNumber(item.total)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

function formatNumber(num) {
  return num.toLocaleString("de-DE"); // يفصل مثل 90.000
}

export default MonthlyStatistics;
