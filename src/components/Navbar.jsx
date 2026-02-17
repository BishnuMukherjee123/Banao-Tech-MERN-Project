import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 font-bold text-xl">
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs">S</div>
        Squid
      </div>
      <div className="hidden md:flex gap-8 text-sm text-gray-400">
        <a href="#" className="hover:text-white transition">Features</a>
        <a href="#" className="hover:text-white transition">Pricing</a>
        <a href="#" className="hover:text-white transition">About</a>
      </div>
      <div className="flex gap-4">
        <Link to="/login" className="text-sm px-4 py-2 hover:text-white text-gray-400">Log in</Link>
        <Link to="/signup" className="btn-gradient text-white text-sm px-6 py-2 rounded-full font-medium">
          Download Now
        </Link>
      </div>
    </nav>
  );
}