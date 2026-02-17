import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ArrowRight } from 'lucide-react';
import imgLogo from '../assets/images/We\'re here to guide and help you at all times/Vector.png';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const success = signup(email, password, name);
      if (success) {
        navigate('/dashboard', { replace: true });
      } else {
        setError('Failed to create account. Please try again.');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#18181C] via-[#18181C] to-[#2a1a4a] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
            <img src={imgLogo} alt="Squid Logo" className="h-8 w-auto object-contain" />
            <span className="font-semibold text-xl">Squid</span>
          </Link>
        </div>

        {/* Signup Card */}
        <div className="bg-[#222228] rounded-2xl p-8 shadow-2xl border border-white/10">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-white mb-2">Create an account</h1>
            <p className="text-gray-400">Get started with your free account</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-[#18181C] border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#18181C] border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-[#18181C] border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-[#18181C] border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 transition-colors"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 text-white font-medium transition-all hover:opacity-90"
              style={{
                backgroundImage: 'linear-gradient(101.143deg, rgb(255, 152, 152) 0.47654%, rgb(128, 84, 255) 100%)'
              }}
            >
              {isLoading ? 'Creating account...' : (
                <>
                  Create account <ArrowRight size={18} />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link to="/" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
