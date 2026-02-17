import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage on mount
    const token = localStorage.getItem('saas_token');
    const userData = localStorage.getItem('user_data');
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error("Failed to parse user data", e);
        localStorage.removeItem('saas_token');
        localStorage.removeItem('user_data');
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Fake Auth
    if (email && password) {
      const userData = { 
        name: email.split('@')[0], 
        email, 
        role: 'Admin' 
      };
      localStorage.setItem('saas_token', 'fake-jwt-token-123');
      localStorage.setItem('user_data', JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  };

  const signup = (email, password, name) => {
    // Fake signup
    if (email && password && name) {
      const userData = { name, email, role: 'User' };
      localStorage.setItem('saas_token', 'fake-jwt-token-123');
      localStorage.setItem('user_data', JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('saas_token');
    localStorage.removeItem('user_data');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);