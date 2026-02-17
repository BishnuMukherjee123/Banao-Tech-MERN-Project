import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { User, Mail, Save, Moon, Sun } from 'lucide-react';

export default function SettingsPage() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleThemeToggle = (checked) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage('');

    // Simulate API delay for realism
    await new Promise(resolve => setTimeout(resolve, 800));

    // 1. Update localStorage
    const userData = { ...user, name, email };
    localStorage.setItem('user_data', JSON.stringify(userData));

    // 2. Update Context state (Force reload to reflect changes immediately across app)
    // In a real app, we'd use a context method, but a page reload works for this scope due to "Fake Auth"
    window.location.reload(); 

    setIsSaving(false);
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your account settings and preferences</p>
      </div>

      {/* Profile Settings */}
      <Card className="dark:bg-[#18181C] dark:border-gray-800">
        <CardHeader>
          <CardTitle className="dark:text-white flex items-center gap-2">
            <User size={20} />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="dark:text-gray-300">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="dark:bg-[#222228] dark:border-gray-700 dark:text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="dark:text-gray-300">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10 dark:bg-[#222228] dark:border-gray-700 dark:text-white"
                />
              </div>
            </div>

            {saveMessage && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400 text-sm">
                {saveMessage}
              </div>
            )}

            <Button
              type="submit"
              disabled={isSaving}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90"
            >
              <Save size={16} className="mr-2" />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Appearance Settings */}
      <Card className="dark:bg-[#18181C] dark:border-gray-800">
        <CardHeader>
          <CardTitle className="dark:text-white flex items-center gap-2">
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
            Appearance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium dark:text-white">Dark Mode</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Toggle dark mode theme</p>
            </div>
            <Switch
              checked={isDarkMode}
              onCheckedChange={handleThemeToggle}
            />
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="dark:bg-[#18181C] dark:border-gray-800">
        <CardHeader>
          <CardTitle className="dark:text-white">Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b dark:border-gray-800">
            <div>
              <p className="font-medium dark:text-white">Email Notifications</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Receive email updates</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between pb-4 border-b dark:border-gray-800">
            <div>
              <p className="font-medium dark:text-white">Push Notifications</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Receive push notifications</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium dark:text-white">Marketing Emails</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Receive promotional content</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="dark:bg-[#18181C] dark:border-red-900/20 border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600 dark:text-red-400">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium dark:text-white">Delete Account</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Permanently delete your account and all data</p>
            </div>
            <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
