import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Users, Home, Settings, LogOut } from 'lucide-react';

export default function DashboardLayout() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 font-bold text-xl text-purple-600 flex items-center gap-2">
           <div className="w-8 h-8 bg-purple-600 rounded-lg text-white flex items-center justify-center">S</div>
           Dashboard
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <NavItem to="/dashboard" icon={Home} label="Overview" end />
          <NavItem to="/dashboard/users" icon={Users} label="Users" />
          <NavItem to="/dashboard/settings" icon={Settings} label="Settings" />
        </nav>

        <div className="p-4 border-t border-gray-100">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600">
                {user?.name?.[0]}
              </div>
              <div className="text-sm">
                <p className="font-medium">{user?.name}</p>
                <p className="text-gray-500 text-xs truncate w-32">{user?.email}</p>
              </div>
           </div>
           <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-red-500 hover:bg-red-50 w-full p-2 rounded transition">
             <LogOut size={16} /> Logout
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}

function NavItem({ to, icon: Icon, label, end }) {
  return (
    <NavLink 
      to={to} 
      end={end}
      className={({ isActive }) => 
        `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
          isActive ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'
        }`
      }
    >
      <Icon size={20} />
      {label}
    </NavLink>
  );
}