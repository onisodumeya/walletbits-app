import { useEffect, useState } from 'react';

function RecentOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);


  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Orders</h2>
        <button className="text-gray-500">⋮</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Card name</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="py-4 px-4" colSpan="5">Loading...</td>
              </tr>
            ) : (
              orders.map((order, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{order.orderId}</td>
                  <td className="py-2 px-4">{order.cardName}</td>
                  <td className="py-2 px-4">{order.date}</td>
                  <td className="py-2 px-4">${order.price}</td>
                  <td className="py-2 px-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${order.status === 'Pending' ? 'bg-green-500' : 'bg-gray-400'}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
