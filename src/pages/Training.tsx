import React from 'react';
import { BookOpen, Brain, Dumbbell, Heart } from 'lucide-react';

interface Props {
  isAuthenticated: boolean;
}

export function Training({ isAuthenticated }: Props) {
  const programs = [
    {
      title: 'Mental Resilience',
      description: 'Build mental toughness and emotional stability',
      icon: Brain,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      title: 'Physical Wellness',
      description: 'Develop strength, flexibility, and endurance',
      icon: Dumbbell,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      title: 'Emotional Intelligence',
      description: 'Enhance interpersonal awareness and relationships',
      icon: Heart,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      title: 'Personal Development',
      description: 'Continuous learning and self-improvement',
      icon: BookOpen,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">Training Programs</h2>
        <p className="text-gray-400 mb-8">Please login to access training programs</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-8">Training Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((program) => {
          const Icon = program.icon;
          return (
            <div
              key={program.title}
              className={`p-6 rounded-lg border ${program.borderColor} ${program.bgColor} backdrop-blur-sm transition-transform hover:scale-105 cursor-pointer`}
            >
              <Icon className={`w-8 h-8 ${program.color} mb-4`} />
              <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
              <p className="text-gray-400">{program.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}