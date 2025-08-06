const DataTable = ({ columns, data, actionIcon }) => {
  return (
    <div className="overflow-x-auto rounded-[7px] bg-[#FFFAEA] border border-gray-300 shadow-sm">
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-[#9AC4D3] h-[60px] font-nunito">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-4 lg:px-6 py-3 text-left text-white text-[18px] font-semibold leading-[100%]"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[#000000] font-nunito bg-[#FFFAEA]">
          {data.map((row, idx) => (
            <tr key={idx}>
              {Object.values(row).map((value, i) => (
                <td
                  key={i}
                  className="px-4 lg:px-6 py-3 text-[16px] font-medium"
                >
                  {value}
                </td>
              ))}
              {actionIcon && (
                <td className="px-4 lg:px-6 py-3 text-[16px] font-medium text-[#00465F]">
                  {actionIcon}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
