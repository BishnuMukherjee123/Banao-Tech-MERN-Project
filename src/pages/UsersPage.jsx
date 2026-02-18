import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { X } from 'lucide-react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const USERS_PER_PAGE = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // 1. Fetch API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  // 2. Filter & Sort Logic
  const filteredUsers = users
    .filter(u => 
      u.name.toLowerCase().includes(search.toLowerCase()) || 
      u.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      return sortOrder === 'asc' 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name);
    });

  // 3. Pagination Logic
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  if (loading) return <div>Loading users...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700">
          + Add User
        </button>
      </div>

      {/* Controls */}
      <div className="bg-white dark:bg-[#18181C] p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col md:flex-row gap-4 justify-between transition-colors duration-200">
        <input 
          type="text" 
          placeholder="Search by name or email..." 
          className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent dark:text-white dark:placeholder-gray-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select 
          className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-sm bg-white dark:bg-[#222228] dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#18181C] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden transition-colors duration-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 dark:bg-[#222228] text-gray-500 dark:text-gray-400 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Email</th>
              <th className="px-6 py-4 font-semibold">Company</th>
              <th className="px-6 py-4 font-semibold">Website</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {paginatedUsers.map(user => (
              <tr 
                key={user.id} 
                className="hover:bg-gray-50 dark:hover:bg-[#222228] cursor-pointer transition-colors"
                onClick={() => {
                  setSelectedUser(user);
                  setModalOpen(true);
                }}
              >
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{user.name}</td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{user.email}</td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                   <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs border border-blue-100 dark:border-blue-800">
                     {user.company.name}
                   </span>
                </td>
                <td className="px-6 py-4 text-purple-600 dark:text-purple-400">{user.website}</td>
              </tr>
            ))}
            {paginatedUsers.length === 0 && (
               <tr><td colSpan="4" className="text-center py-8 text-gray-400">No users found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2">
         {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                 currentPage === page 
                 ? 'bg-purple-600 text-white' 
                 : 'bg-white dark:bg-[#18181C] border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#222228]'
              }`}
            >
              {page}
            </button>
         ))}
      </div>

      {/* User Detail Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent onClose={() => setModalOpen(false)}>
          {selectedUser && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">User Details</DialogTitle>
              </DialogHeader>
              
              <div className="mt-4 space-y-4">
                {/* Basic Info */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Basic Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{selectedUser.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Username:</span>
                      <span className="font-medium">{selectedUser.username}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium text-purple-600">{selectedUser.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-medium">{selectedUser.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="pt-4 border-t">
                  <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-600">{selectedUser.address.street}, {selectedUser.address.suite}</p>
                    <p className="text-gray-600">{selectedUser.address.city}, {selectedUser.address.zipcode}</p>
                  </div>
                </div>

                {/* Company */}
                <div className="pt-4 border-t">
                  <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{selectedUser.company.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Catchphrase:</span>
                      <span className="font-medium text-sm italic">"{selectedUser.company.catchPhrase}"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Website:</span>
                      <a 
                        href={`https://${selectedUser.website}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="font-medium text-purple-600 hover:underline"
                      >
                        {selectedUser.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}