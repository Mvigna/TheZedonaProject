import React from 'react';
import { Book, Video, FileText, Headphones } from 'lucide-react';

interface Props {
  isAuthenticated: boolean;
}

export function Resources({ isAuthenticated }: Props) {
  const resources = [
    {
      title: 'Mindfulness Fundamentals',
      type: 'E-Book',
      icon: Book,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      description: 'A comprehensive guide to developing mindfulness practices'
    },
    {
      title: 'Peak Performance',
      type: 'Video Course',
      icon: Video,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      description: 'Advanced techniques for achieving optimal performance'
    },
    {
      title: 'Emotional Mastery',
      type: 'Guide',
      icon: FileText,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      description: 'Understanding and managing emotional responses'
    },
    {
      title: 'Guided Meditations',
      type: 'Audio',
      icon: Headphones,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
      description: 'Collection of meditation sessions for different purposes'
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">Learning Resources</h2>
        <p className="text-gray-400 mb-8">Please login to access learning materials</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-8">Learning Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <div
              key={resource.title}
              className={`p-6 rounded-lg border ${resource.borderColor} ${resource.bgColor} backdrop-blur-sm`}
            >
              <div className="flex items-start">
                <Icon className={`w-8 h-8 ${resource.color} mr-4 mt-1`} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{resource.title}</h3>
                  <p className={`text-sm ${resource.color} mb-2`}>{resource.type}</p>
                  <p className="text-gray-400">{resource.description}</p>
                  <button className={`mt-4 px-4 py-2 rounded-md ${resource.bgColor} ${resource.color} hover:bg-opacity-20 transition-colors`}>
                    Access Resource
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}