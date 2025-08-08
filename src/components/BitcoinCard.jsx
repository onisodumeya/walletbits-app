import { useEffect, useState, useRef } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
} from 'recharts';

// Helper function to format dates
function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function PriceChart() {
  const [data, setData] = useState([]);
  const ws = useRef(null);

  // Initialize last 21 days with dummy prices
  useEffect(() => {
    const today = new Date();
    const last21Days = Array.from({ length: 21 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - (20 - i));
      return {
        date: formatDate(date),
        price: 0,
      };
    });

    setData(last21Days);
  }, []);

  // Live updates via WebSocket
  useEffect(() => {
    ws.current = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const price = parseFloat(message.p);

      setData(prev => {
        const today = formatDate(new Date());
        const updated = [...prev];

        // Find today's index
        const todayIndex = updated.findIndex(entry => entry.date === today);

        if (todayIndex !== -1) {
          updated[todayIndex] = {
            ...updated[todayIndex],
            price,
          };
        } else {
          // Shift data to include today if it's a new day
          updated.shift();
          updated.push({ date: today, price });
        }

        return updated;
      });
    };

    return () => ws.current.close();
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl border border-pink-300 shadow-md w-full max-w-5xl min-h-[150px]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">Bitcoin Price ()</h2>
        <span className="bg-pink-400 text-white px-3 py-1 rounded-full text-sm">Live</span>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => `$${value}`} />
          <Bar dataKey="price" fill="#ec4899" barSize={8} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
