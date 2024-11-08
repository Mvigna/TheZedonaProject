import React from 'react';
import { Menu, User, LogIn, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  isAuthenticated: boolean;
  onLoginClick: () => void;
  onSignUpClick: () => void;
  onLogout: () => void;
}

export function Header({ isAuthenticated, onLoginClick, onSignUpClick, onLogout }: Props) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400";
  };

  return (
    <header className="bg-slate-900/90 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="w-6 h-6 text-cyan-400 mr-4 cursor-pointer" />
            <Link to="/" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">ZEDONA</Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors ${isActive('/')}`}>Dashboard</Link>
            <Link to="/training" className={`transition-colors ${isActive('/training')}`}>Training</Link>
            <Link to="/community" className={`transition-colors ${isActive('/community')}`}>Community</Link>
            <Link to="/resources" className={`transition-colors ${isActive('/resources')}`}>Resources</Link>
          </nav>

          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <button 
                  onClick={onLoginClick}
                  className="flex items-center px-4 py-2 rounded-md bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </button>
                <button 
                  onClick={onSignUpClick}
                  className="flex items-center px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign Up
                </button>
              </>
            ) : (
              <button 
                onClick={onLogout}
                className="flex items-center px-4 py-2 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}