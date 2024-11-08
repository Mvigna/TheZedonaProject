import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { LoginModal } from './components/LoginModal';
import { SignUpModal } from './components/SignUpModal';
import { Dashboard } from './pages/Dashboard';
import { Training } from './pages/Training';
import { Community } from './pages/Community';
import { Resources } from './pages/Resources';
import type { Profile } from './types';

function App() {
  const [profile, setProfile] = useState<Profile>({
    id: '1',
    name: 'Alex Chen',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=256',
    level: 5,
    bio: 'Dedicated to personal growth and self-improvement. Ready to embark on a transformative journey with the Zedona Project.',
    characteristics: [
      {
        name: 'Mental Fortitude',
        value: 75,
        description: 'Ability to maintain composure under pressure'
      },
      {
        name: 'Emotional Intelligence',
        value: 65,
        description: 'Understanding and managing emotions effectively'
      },
      {
        name: 'Physical Wellness',
        value: 80,
        description: 'Overall health and fitness level'
      },
      {
        name: 'Social Adaptability',
        value: 70,
        description: 'Skill in navigating social situations'
      }
    ]
  });

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleCharacteristicChange = (index: number, value: number) => {
    setProfile(prev => ({
      ...prev,
      characteristics: prev.characteristics.map((char, i) =>
        i === index ? { ...char, value } : char
      )
    }));
  };

  const handleLogin = (email: string, password: string) => {
    setIsAuthenticated(true);
    setIsLoginOpen(false);
  };

  const handleSignUp = (name: string, email: string, password: string) => {
    setIsAuthenticated(true);
    setIsSignUpOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header 
          isAuthenticated={isAuthenticated}
          onLoginClick={() => setIsLoginOpen(true)}
          onSignUpClick={() => setIsSignUpOpen(true)}
          onLogout={() => setIsAuthenticated(false)}
        />

        <main className="max-w-7xl mx-auto px-4 py-12">
          <Routes>
            <Route path="/" element={<Dashboard profile={profile} onCharacteristicChange={handleCharacteristicChange} isAuthenticated={isAuthenticated} />} />
            <Route path="/training" element={<Training isAuthenticated={isAuthenticated} />} />
            <Route path="/community" element={<Community isAuthenticated={isAuthenticated} />} />
            <Route path="/resources" element={<Resources isAuthenticated={isAuthenticated} />} />
          </Routes>
        </main>

        <LoginModal 
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onLogin={handleLogin}
        />

        <SignUpModal
          isOpen={isSignUpOpen}
          onClose={() => setIsSignUpOpen(false)}
          onSignUp={handleSignUp}
        />
      </div>
    </Router>
  );
}

export default App;