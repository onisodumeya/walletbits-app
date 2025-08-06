import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FaUser } from 'react-icons/fa';

function UsersActivity() {
  const [userStats, setUserStats] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(' ') 
      .then((res) => res.json())
      .then((data) => {
        setUserStats(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user stats:', error);
        setLoading(false);
      });
  }, []);

  if (loading || !userStats)  {
    return (
      <div className="p-4 bg-white rounded-xl shadow-md">
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    );
  }

  
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaUser className="text-gray-800" />
          <h2 className="font-semibold text-lg">Users & Activities</h2>
          <span className="text-green-600 text-sm font-medium">▲ {userStats.overallGrowth}%</span>
        </div>
        <button className="text-gray-400">✎</button>
      </div>

      <p className="text-sm text-gray-500 mt-1">Monitor how users interact with the platform</p>

      <div className="mt-4 bg-gray-50 p-4 rounded-xl">
        <div className="flex justify-between items-end text-center">
          <div>
            <p className="font-bold text-xl">{userStats.registeredUsers.toLocaleString()}</p>
            <p className="text-green-500 text-xs font-medium">+{userStats.registeredGrowth}% Registered Users</p>
          </div>
          <div>
            <p className="font-bold text-xl">{userStats.activeUsers}</p>
            <p className="text-green-500 text-xs font-medium">+{userStats.activeGrowth}% Active Users</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-pink-500 rounded-full"></span>
            July users login percentage
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-purple-600 rounded-full"></span>
            July platform Feature Usage
          </div>
        </div>

        <div className="h-40 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userStats.chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="login" fill="#ec4899" barSize={30} radius={[6, 6, 0, 0]} />
              <Bar dataKey="featureUsage" fill="#8b5cf6" barSize={30} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default UsersActivity;
