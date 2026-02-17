import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import imgLogo from '../assets/images/We\'re here to guide and help you at all times/Vector.png';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Simulate API call delay
    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Try demo@saas.com');
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-900/20 blur-[100px] rounded-full" />
      </div>

      <div className="w-full max-w-md bg-[#121217] border border-gray-800 rounded-2xl p-8 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition">
            <img src={imgLogo} alt="Squid Logo" className="h-8 w-auto object-contain" />
          </Link>
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-400 text-sm">Enter your credentials to access the dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="email" 
                required
                className="w-full bg-[#0B0B0F] border border-gray-700 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition text-sm"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="password" 
                required
                className="w-full bg-[#0B0B0F] border border-gray-700 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-purple-600 focus:ring-0" />
                Remember me
            </label>
              <a href="#" className="hover:text-white transition">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className="w-full bg-linear-to-r from-[#FF7170] to-[#8F5CFF] text-white font-medium py-3 rounded-lg hover:opacity-90 transition shadow-lg shadow-purple-900/20 flex items-center justify-center gap-2 mt-6"
          >
            Sign In <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-8">
          Don't have an account? <Link to="/signup" className="text-white hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}