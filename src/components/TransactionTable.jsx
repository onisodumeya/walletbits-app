
const TransactionTable = ({allTransactions, filteredTransaction}) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full text-sm text-center text-gray-800 border-collapse shadow-md bg-white rounded-lg overflow-hidden">
            <thead className="text-xs py-5 text-[#000000B2] uppercase [background:linear-gradient(90deg,_rgba(212,112,183,0.5)_0%,_rgba(110,58,95,0.2)_100%)]">
            <tr>
            <th className="px-6 py-5 text-[15px]">Assets</th>
            <th className="px-6 py-5 text-[15px]">Type</th>
            <th className="px-6 py-5 text-[15px]">Amount</th>
            <th className="px-6 py-5 text-[15px]">Status</th>
            <th className="px-6 py-5 text-[15px]">Date</th>
            <th className="px-6 py-5 text-[15px]">References ID</th>
            <th className="px-6 py-5 text-[14px]">Action</th>
          </tr>
        </thead>
        <tbody className='font-semibold'>
          {filteredTransaction.map((e) => (
            <tr key={e.id} className="hover:bg-gray-50 border-1 border-[#D470B7] border-l-0 border-r-0 border-t-0 transition">
              <td className="px-6 py-4">
                <img
                  src={e.assets}
                  alt="asset"
                  className="w-8 h-8 mx-auto object-contain"
                />
              </td>
              <td
                className={`px-6 py-4 text-[16px] font-semibold ${
                  e.type === 'Sent' ? 'text-red-600' : 'text-green-600'
                }`}
              >
                {e.type}
              </td>
              <td
                className={`px-6 py-4 text-[16px] font-semibold ${
                  e.type === 'Sent' ? 'text-red-600' : 'text-green-600'
                }`}
              >
                {e.amount}
              </td>
              <td
                className={`px-6 py-4 text-[16px] font-medium ${
                  e.status === 'Completed'
                    ? 'text-green-600'
                    : e.status === 'Pending'
                    ? 'text-amber-600'
                    : 'text-red-600'
                }`}
              >
                {e.status}
              </td>
              <td className="px-6 py-4 text-[16px]">{e.date}</td>
              <td className="px-6 py-4 text-[16px]">{e.reference}</td>
              <td className="px-6 py-4 text-[16px] text-blue-600 hover:underline cursor-pointer">
                {e.action}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable
