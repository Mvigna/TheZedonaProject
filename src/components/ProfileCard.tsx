import React from 'react';
import { Shield, Star, Trophy, Lock } from 'lucide-react';
import type { Profile } from '../types';
import { CharacteristicSlider } from './CharacteristicSlider';

interface Props {
  profile: Profile;
  onCharacteristicChange: (index: number, value: number) => void;
  isAuthenticated: boolean;
}

export function ProfileCard({ profile, onCharacteristicChange, isAuthenticated }: Props) {
  return (
    <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-cyan-500/20">
      <div className="relative h-32 bg-gradient-to-r from-cyan-500 to-purple-600">
        <div className="absolute -bottom-16 left-8">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-32 h-32 rounded-xl border-4 border-gray-800 shadow-lg object-cover"
          />
        </div>
      </div>
      
      <div className="pt-20 px-8 pb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
            <p className="text-cyan-400">Level {profile.level} Aspirant</p>
          </div>
          <div className="flex gap-2">
            <Trophy className="text-yellow-500" />
            <Shield className="text-cyan-400" />
            <Star className="text-purple-500" />
          </div>
        </div>

        <p className="text-gray-300 mb-8">{profile.bio}</p>

        {isAuthenticated ? (
          <div className="space-y-6">
            {profile.characteristics.map((characteristic, index) => (
              <CharacteristicSlider
                key={characteristic.name}
                characteristic={characteristic}
                onChange={(value) => onCharacteristicChange(index, value)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-900/50 rounded-lg border border-cyan-500/20">
            <Lock className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
            <p className="text-gray-300">Login or sign up to view and modify characteristics</p>
          </div>
        )}
      </div>
    </div>
  );
}