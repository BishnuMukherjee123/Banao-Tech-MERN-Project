import { useState, useEffect } from 'react';
import { Users as UsersIcon, Building2, Mail, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function DashboardPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Calculate stats from API data
  const totalUsers = users.length;
  const uniqueCompanies = new Set(users.map(u => u.company.name)).size;
  
  const stats = [
    {
      title: 'Total Users',
      value: loading ? '...' : totalUsers.toString(),
      change: '+12%',
      icon: UsersIcon,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Companies',
      value: loading ? '...' : uniqueCompanies.toString(),
      change: '+5%',
      icon: Building2,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Active Sessions',
      value: '8',
      change: '+18%',
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Messages',
      value: '24',
      change: '+23%',
      icon: Mail,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const recentActivity = users.slice(0, 4).map(user => ({
    user: user.name,
    action: ['Updated profile', 'Logged in', 'Changed settings', 'Added new post'][Math.floor(Math.random() * 4)],
    time: ['2 hours ago', '3 hours ago', '5 hours ago', '1 day ago'][Math.floor(Math.random() * 4)]
  }));

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="dark:bg-[#18181C] dark:border-gray-800 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <Icon size={16} className="text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold dark:text-white">{stat.value}</div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dark:bg-[#18181C] dark:border-gray-800">
          <CardHeader>
            <CardTitle className="dark:text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 last:pb-0 border-b last:border-0 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium dark:text-white">{activity.user}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{activity.action}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-[#18181C] dark:border-gray-800">
          <CardHeader>
            <CardTitle className="dark:text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-left font-medium">
                Add New User
              </button>
              <button className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-left font-medium">
                Generate Report
              </button>
              <button className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-left font-medium">
                View Analytics
              </button>
              <button className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-left font-medium">
                Manage Permissions
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
