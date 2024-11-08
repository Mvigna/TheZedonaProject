import React from 'react';
import { Users, MessageSquare, Trophy, Target } from 'lucide-react';

interface Props {
  isAuthenticated: boolean;
}

export function Community({ isAuthenticated }: Props) {
  const members = [
    {
      name: 'Sarah Johnson',
      level: 12,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256',
      specialty: 'Mental Resilience'
    },
    {
      name: 'Michael Chen',
      level: 8,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256',
      specialty: 'Physical Wellness'
    },
    {
      name: 'Emma Wilson',
      level: 15,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256',
      specialty: 'Emotional Intelligence'
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">Community Hub</h2>
        <p className="text-gray-400 mb-8">Please login to access the community features</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
          <Users className="w-8 h-8 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Active Members</h3>
          <p className="text-3xl font-bold text-purple-400">1,234</p>
        </div>
        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-6">
          <MessageSquare className="w-8 h-8 text-cyan-500 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Discussions</h3>
          <p className="text-3xl font-bold text-cyan-400">89</p>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
          <Trophy className="w-8 h-8 text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Achievements</h3>
          <p className="text-3xl font-bold text-yellow-400">567</p>
        </div>
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
          <Target className="w-8 h-8 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Goals Met</h3>
          <p className="text-3xl font-bold text-green-400">2,345</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Featured Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-gray-800/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 rounded-full border-2 border-cyan-500 mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-cyan-400 mb-2">Level {member.level}</p>
              <p className="text-gray-400">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}